import { LegalPageShell } from '@/components/legal-page-shell';

export const metadata = {
  title: 'Privacy Policy — Highcontent',
  description: 'How Highcontent collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" updated="August 10, 2026">
      <p>
        This Privacy Policy explains how Highcontent (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
        and protects personal information when you visit our website, create an account, or use our
        subscription services (the &quot;Service&quot;).
      </p>

      <h2>1. Information we collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address, billing details, and subscription
          plan information when you register or purchase.
        </li>
        <li>
          <strong>Usage information:</strong> pages visited, features used, downloads, device type,
          browser, and approximate location derived from IP address.
        </li>
        <li>
          <strong>Communications:</strong> messages you send us via email, contact forms, or support
          channels.
        </li>
        <li>
          <strong>Payment information:</strong> processed by our payment and subscription partners;
          we do not store full card numbers on our servers.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service.</li>
        <li>Process subscriptions, payments, and account management.</li>
        <li>Send service-related messages, product updates, and support responses.</li>
        <li>Monitor usage, prevent fraud, and protect platform security.</li>
        <li>Comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2>3. Legal bases for processing</h2>
      <p>
        Where applicable under GDPR and similar laws, we process personal data based on contract
        performance, legitimate interests (such as improving the Service and preventing abuse),
        consent (where required), and legal obligations.
      </p>

      <h2>4. Sharing of information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> that help us operate the platform, such as hosting,
          analytics, email delivery, customer support, and payment processing.
        </li>
        <li>
          <strong>Professional advisers</strong> where reasonably necessary for legal, accounting,
          or compliance purposes.
        </li>
        <li>
          <strong>Authorities</strong> when required by law or to protect our rights, users, or the
          public.
        </li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>5. Cookies & similar technologies</h2>
      <p>
        We use cookies and similar technologies to remember preferences, understand site usage, and
        support authentication and billing flows. You can control cookies through your browser
        settings, though some features may not function properly if cookies are disabled.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain personal information for as long as needed to provide the Service, meet legal
        obligations, resolve disputes, and enforce agreements. When no longer required, we delete
        or anonymize data where feasible.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Your information may be processed in countries other than your own. Where required, we use
        appropriate safeguards for cross-border data transfers.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, restrict, or
        object to certain processing of your personal data, and to data portability or withdrawal
        of consent. To exercise these rights, contact us at{' '}
        <a href="mailto:hello@highcontent.io">hello@highcontent.io</a>.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect personal
        information. No method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>10. Children</h2>
      <p>
        The Service is not directed to children under 16, and we do not knowingly collect personal
        information from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top
        of this page indicates when revisions were posted. Material changes will be communicated
        where appropriate.
      </p>

      <h2>12. Contact</h2>
      <p>
        For privacy-related questions or requests, email{' '}
        <a href="mailto:hello@highcontent.io">hello@highcontent.io</a>.
      </p>
    </LegalPageShell>
  );
}
