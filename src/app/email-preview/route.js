import { buildContactEmail } from '@/lib/email-templates';

export async function GET(request) {
  const origin = request.nextUrl.origin;
  const logoUrl = `${origin}/assets/highcontent-logo.png`;

  const { html, subject } = buildContactEmail(
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      business: 'Smile Studio · smile.studio',
      plan: 'Custom',
      category: 'Dentist',
      message:
        "Hi — I'd love a custom package for my dental clinic. Looking for feed posts, stories, and a cohesive brand look.",
    },
    { logoUrl },
  );

  const previewHtml = html.replace(
    '</title>',
    `</title>\n    <!-- Preview only — not sent via Postmark. Subject: ${subject.replace(/--/g, '—')} -->`,
  );

  return new Response(previewHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
