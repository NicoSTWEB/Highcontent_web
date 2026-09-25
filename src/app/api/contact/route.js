import { NextResponse } from 'next/server';
import { isValidEmail, sendPostmarkEmail } from '@/lib/email';
import { buildContactEmail } from '@/lib/email-templates';
import { rateLimit } from '@/lib/rate-limit';

const MIN_FILL_MS = 2000;
const MAX_LINKS = 3;

function clean(value, max = 2000) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function clientIp(request) {
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const forwarded = request.headers.get('x-forwarded-for');
  if (!forwarded) return 'unknown';

  const parts = forwarded.split(',').map((part) => part.trim()).filter(Boolean);
  return parts[parts.length - 1] || 'unknown';
}

function linkCount(value) {
  return (value.match(/https?:\/\/|www\./gi) || []).length;
}

export async function POST(request) {
  try {
    const limit = rateLimit(`contact:${clientIp(request)}`);
    if (!limit.ok) {
      return NextResponse.json(
        { success: false, error: 'Too many messages. Please try again in a few minutes.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      );
    }

    const body = await request.json();
    const honeypot = clean(body.company_website, 500);
    const startedAt = Number(body.startedAt);
    const elapsed = Date.now() - startedAt;
    const tooFast = !Number.isFinite(startedAt) || startedAt < 1_000_000_000_000 || (elapsed >= 0 && elapsed < MIN_FILL_MS);

    if (honeypot || tooFast) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const business = clean(body.business, 200);
    const message = clean(body.message, 4000);
    const plan = clean(body.plan, 80);
    const category = clean(body.category, 80);

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    if (linkCount(`${name} ${email} ${business} ${message}`) > MAX_LINKS) {
      return NextResponse.json({ success: true });
    }

    const { subject, html, text } = buildContactEmail(
      {
        name,
        email,
        business,
        message,
        plan,
        category,
      },
      { origin: new URL(request.url).origin },
    );

    const result = await sendPostmarkEmail({
      subject,
      html,
      text,
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: result.error || 'Failed to send email.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Contact API]', error);
    return NextResponse.json(
      { success: false, error: 'Server error.' },
      { status: 500 },
    );
  }
}
