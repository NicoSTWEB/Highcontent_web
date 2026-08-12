import { NextResponse } from 'next/server';
import { isValidEmail, sendPostmarkEmail } from '@/lib/email';
import { buildContactEmail } from '@/lib/email-templates';

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const email = clean(body.email);
    const business = clean(body.business);
    const message = clean(body.message);
    const plan = clean(body.plan);
    const category = clean(body.category);

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
