import { LegalPageShell } from '@/components/legal-page-shell';

export const metadata = {
  title: 'Terms & Conditions — Highcontent',
  description: 'Terms and conditions for using Highcontent social media content subscriptions and assets.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell title="Terms & Conditions" updated="August 10, 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the Highcontent
        website, dashboard, and subscription services (collectively, the &quot;Service&quot;) operated by
        Highcontent (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By creating an account, purchasing a plan, or
        using the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        Highcontent provides ready-to-post social media templates, design assets, and related
        digital content for professional use. Content is delivered through our online platform and
        is intended to be customized in tools such as Canva before publishing.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You must provide accurate information when registering and keep your login credentials
        secure. You are responsible for all activity under your account. You must be at least 18
        years old, or the age of majority in your jurisdiction, to use the Service.
      </p>

      <h2>3. Subscriptions & billing</h2>
      <p>
        Paid plans renew automatically each billing period unless cancelled before the renewal date.
        Prices are shown at checkout and may change with reasonable notice. Payments are processed
        through our third-party billing provider. Failed payments may result in suspension of access
        until resolved.
      </p>

      <h2>4. License to use content</h2>
      <p>
        Subject to your active subscription and plan tier, we grant you a non-exclusive,
        non-transferable license to download, edit, and publish the content for the permitted uses
        defined in your plan (personal, business, and/or client use where applicable).
      </p>
      <ul>
        <li>You may not resell, redistribute, sublicense, or share raw source files outside your licensed use.</li>
        <li>You may not claim ownership of unmodified template designs or pass them off as your own original work for resale.</li>
        <li>Starter plans are for your own brand unless otherwise stated. Pro plans may include client-use rights as described at purchase.</li>
      </ul>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for unlawful, misleading, or harmful purposes.</li>
        <li>Attempt to scrape, copy, or bulk-download the library outside normal product use.</li>
        <li>Reverse engineer, interfere with, or disrupt the platform or other users&apos; access.</li>
        <li>Misrepresent your relationship with Highcontent or our creators.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        The Service, brand, website, and content library remain our property or that of our
        licensors. These Terms do not transfer ownership of Highcontent intellectual property to
        you. Your edited final posts and brand materials created using our assets remain yours,
        subject to the license limits above.
      </p>

      <h2>7. Cancellations & refunds</h2>
      <p>
        You may cancel your subscription at any time before the next billing cycle through your
        account settings or by contacting us. Cancellation stops future charges; access continues
        until the end of the current paid period unless otherwise stated. Refund eligibility is
        handled according to our refund policy and applicable consumer laws.
      </p>

      <h2>8. Disclaimer</h2>
      <p>
        The Service and content are provided &quot;as is&quot; without warranties of any kind, whether
        express or implied, including fitness for a particular purpose or uninterrupted availability.
        We do not guarantee specific business results from using our content.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Highcontent shall not be liable for indirect,
        incidental, special, consequential, or punitive damages, or for loss of profits, data,
        or goodwill arising from your use of the Service. Our total liability for any claim relating
        to the Service is limited to the amount you paid us in the twelve months before the claim.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be posted on this page
        with an updated date. Continued use of the Service after changes take effect constitutes
        acceptance of the revised Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email us at{' '}
        <a href="mailto:contact@highcontent.io">contact@highcontent.io</a>.
      </p>
    </LegalPageShell>
  );
}
