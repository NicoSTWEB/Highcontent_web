const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_REGEX.test(String(email || '').trim());
}

export async function sendPostmarkEmail({ subject, html, text, replyTo }) {
  const token = process.env.POSTMARK_SERVER_TOKEN || '';
  const from = process.env.EMAIL_FROM || '';
  const to = process.env.EMAIL_TO || '';

  if (!token || !from || !to) {
    return { ok: false, error: 'Missing email configuration' };
  }

  const response = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Postmark-Server-Token': token,
    },
    body: JSON.stringify({
      From: from,
      To: to,
      ReplyTo: replyTo || undefined,
      Subject: subject,
      HtmlBody: html,
      TextBody: text,
      MessageStream: 'outbound',
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error(`[Postmark] ${response.status}`, errorData);
    return { ok: false, error: `Postmark error: ${response.status}` };
  }

  return { ok: true };
}
