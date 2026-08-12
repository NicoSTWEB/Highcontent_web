const LOGO_PATH = '/assets/highcontent-logo.png';
const DEFAULT_BRAND_NAME = 'Highcontent';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function resolveEmailLogoUrl(origin) {
  if (process.env.EMAIL_LOGO_URL) return process.env.EMAIL_LOGO_URL;

  const base =
    origin ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://localhost:3000';

  return `${String(base).replace(/\/$/, '')}${LOGO_PATH}`;
}

function buildFieldRows(fields) {
  return fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:12px 0;color:#6b7280;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;width:140px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px 0;color:#0a0a0a;font-size:15px;line-height:1.55;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join('');
}

function buildEmailShell({ title, intro, fields, highlight, footerNote, logoUrl }) {
  const resolvedLogoUrl = logoUrl || resolveEmailLogoUrl();
  const brandName = process.env.EMAIL_BRAND_NAME || DEFAULT_BRAND_NAME;
  const sentAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#fafafa;font-family:'DM Sans',Helvetica,Arial,sans-serif;color:#0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fafafa;padding:40px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e5e7eb;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 24px;background:linear-gradient(135deg,#f5efff 0%,#ffffff 45%,#fdf2f8 100%);border-bottom:1px solid #e5e7eb;">
                <img src="${escapeHtml(resolvedLogoUrl)}" alt="${escapeHtml(brandName)}" width="150" style="display:block;max-width:150px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <p style="margin:0 0 10px;color:#6b7280;font-size:11.5px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;">
                  ${escapeHtml(brandName)}
                </p>
                <h1 style="margin:0 0 14px;color:#0a0a0a;font-size:28px;line-height:1.15;letter-spacing:-0.02em;font-weight:800;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin:0;color:#6b7280;font-size:15px;line-height:1.6;">
                  ${escapeHtml(intro)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 8px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e5e7eb;">
                  ${buildFieldRows(fields)}
                </table>
              </td>
            </tr>
            ${
              highlight
                ? `
            <tr>
              <td style="padding:8px 32px 28px;">
                <div style="background:linear-gradient(95deg,rgba(196,181,253,0.22),rgba(249,168,212,0.22));border:1px solid #e5e7eb;border-radius:16px;padding:14px 16px;color:#0a0a0a;font-size:14px;line-height:1.55;">
                  ${escapeHtml(highlight)}
                </div>
              </td>
            </tr>
            `
                : '<tr><td style="padding:0 0 20px;"></td></tr>'
            }
            <tr>
              <td style="padding:18px 32px 28px;background:#fafafa;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.55;">
                  ${escapeHtml(
                    footerNote ||
                      'You are receiving this email because a form was submitted on the Highcontent website.',
                  )}
                </p>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;color:#9ca3af;font-size:12px;">
            ${escapeHtml(brandName)} · ${escapeHtml(sentAt)}
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export function buildContactEmail(payload, options = {}) {
  const fields = [
    { label: 'Name', value: payload.name },
    { label: 'Email', value: payload.email },
  ];

  if (payload.business) {
    fields.push({ label: 'Business', value: payload.business });
  }
  if (payload.plan) {
    fields.push({ label: 'Plan', value: payload.plan });
  }
  if (payload.category) {
    fields.push({ label: 'Niche', value: payload.category });
  }

  fields.push({
    label: 'Message',
    value: payload.message?.trim() ? payload.message.trim() : '(no message)',
  });

  const contextBits = [payload.plan, payload.category].filter(Boolean);
  const subject = contextBits.length
    ? `New inquiry — ${payload.name} (${contextBits.join(' · ')})`
    : `New contact request — ${payload.name}`;

  const html = buildEmailShell({
    title: 'New website inquiry',
    intro: 'Someone just reached out through the Highcontent contact form.',
    fields,
    highlight: 'Reply to this email to respond directly to the sender.',
    logoUrl: options.logoUrl || resolveEmailLogoUrl(options.origin),
  });

  const text = [
    'New website inquiry',
    '',
    ...fields.map((field) => `${field.label}: ${field.value}`),
  ].join('\n');

  return { subject, html, text };
}
