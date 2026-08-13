import Link from 'next/link';
import { LegalPageShell } from '@/components/legal-page-shell';

export const metadata = {
  title: 'Privacy Policy — Highcontent',
  description: 'How Highcontent collects, uses, and protects your personal information.',
};

function Mail({ children = 'contact@highcontent.io' }) {
  return <a href={`mailto:${children}`}>{children}</a>;
}

function LegalTable({ headers, rows }) {
  return (
    <div className="legal-table-wrap">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" updated="August 12, 2026">
      <p>
        Highcontent —{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how we collect, use, share and protect personal data when you
        visit www.highcontent.io, create an account, subscribe to a Plan, contact us or otherwise
        use the Highcontent service (the &quot;Service&quot;).
      </p>
      <p>
        We are committed to processing personal data lawfully, fairly and transparently, in
        accordance with Regulation (EU) 2016/679 (the General Data Protection Regulation,
        &quot;GDPR&quot;), the ePrivacy Directive 2002/58/EC as implemented in Lithuania, and the Law
        on Legal Protection of Personal Data of the Republic of Lithuania.
      </p>
      <p>
        This Policy forms part of, and should be read together with, our{' '}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>.
      </p>

      <h2>2. Who is the data controller</h2>
      <p>The controller of your personal data is:</p>
      <p>
        MB &quot;Indremas&quot;<br />
        Company code (Company ID): 306098171<br />
        Registered address: Gvildžių g. 23, Radailių k., Klaipėdos raj., Lithuania<br />
        Manager / Director: Karolina Nikolaityte<br />
        Email: <Mail /><br />
        Website:{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>
      </p>
      <p>
        We have not appointed a Data Protection Officer, as we are not required to do so under
        Article 37 GDPR. All privacy enquiries should be sent to <Mail />.
      </p>

      <h2>3. What personal data we collect</h2>
      <h3>3.1 Data you provide directly</h3>
      <LegalTable
        headers={['Category', 'Examples']}
        rows={[
          ['Identity data', 'First and last name, business name, job title, industry/niche'],
          ['Contact data', 'Email address, phone number (if provided), postal or billing address'],
          ['Account data', 'Username, password (stored hashed), account settings, preferences, language'],
          ['Billing and tax data', 'Billing name and address, country, VAT identification number, company code, invoices, subscription history'],
          ['Payment data', 'Payment method type, last four digits of card, expiry date, transaction ID and status — we never receive or store full card numbers or CVV codes; these are handled directly by our payment providers'],
          ['Communications data', 'Emails, support tickets, chat messages, form submissions, feedback, survey responses'],
          ['Customer Content', 'Any files, images, text or brand materials you upload to the Service, which may incidentally contain personal data'],
        ]}
      />

      <h3>3.2 Data collected automatically</h3>
      <LegalTable
        headers={['Category', 'Examples']}
        rows={[
          ['Technical data', 'IP address, browser type and version, operating system, device type, screen resolution, time zone, language settings'],
          ['Hosting and server logs', 'Requests made to our servers, timestamps, response codes, edge region, user agent — generated automatically by our hosting provider Vercel'],
          ['Usage and analytics data', 'Pages visited, Collections and Assets viewed and downloaded, features used, search queries within the library, scroll depth, session duration, referring URL, clickstream, approximate geographic location derived from IP (city/country level)'],
          ['Cookie and tracking data', 'Cookie identifiers, pixel and tag data, session identifiers, Google Analytics client identifier, consent identifier issued by our consent management platform (see clause 9)'],
          ['Email engagement data', 'Whether an email was delivered, opened, or which links were clicked'],
          ['Consent data', 'Your cookie consent choices, the date and time given, the consent version and the scope accepted or rejected — recorded by CookieYes as proof of consent under Article 7(1) GDPR'],
        ]}
      />

      <h3>3.3 Data from third parties</h3>
      <ul>
        <li>Payment and subscription status from our payment providers;</li>
        <li>Aggregated and pseudonymised measurement data from Google Analytics and, where you have consented, from advertising platforms;</li>
        <li>Publicly available business information, where you contact us on behalf of a company;</li>
        <li>Referral information, where another customer refers you.</li>
      </ul>

      <h3>3.4 Special categories of data</h3>
      <p>
        We do not intentionally collect special categories of personal data (Article 9 GDPR —
        health, biometric, racial or ethnic origin, political opinions, religious beliefs, trade
        union membership, sex life or sexual orientation).
      </p>
      <p>
        Important for healthcare, dental, aesthetic and wellness professionals: if you upload
        patient photographs, before/after images, clinical records or any other health-related
        material into the Service, you do so as an independent controller of that data. You are
        solely responsible for having a valid legal basis and explicit consent under Articles 6
        and 9 GDPR, and for complying with your professional confidentiality obligations. We ask
        you not to upload identifiable patient or health data to the Service. Where we process
        such material incidentally as part of hosting your Customer Content, we act as your
        processor in accordance with clause 11.
      </p>

      <h2>4. Why we process your data and on what legal basis</h2>
      <LegalTable
        headers={['Purpose', 'Data used', 'Legal basis (Art. 6 GDPR)', 'Retention']}
        rows={[
          ['Creating and managing your account', 'Identity, contact, account', 'Performance of a contract — Art. 6(1)(b)', 'Duration of account + 3 years'],
          ['Providing the Service, delivering the library and Assets', 'Account, usage, technical', 'Contract — Art. 6(1)(b)', 'Duration of account'],
          ['Hosting, delivering and securing the website', 'Technical, server logs', 'Contract — Art. 6(1)(b); legitimate interests — Art. 6(1)(f)', 'Up to 12 months'],
          ['Processing payments, subscriptions and renewals', 'Billing, payment, contact', 'Contract — Art. 6(1)(b); legal obligation — Art. 6(1)(c)', '10 years (accounting law)'],
          ['Issuing and archiving invoices, tax and accounting compliance', 'Billing, tax', 'Legal obligation — Art. 6(1)(c)', '10 years from the financial year end'],
          ['Customer support and communications', 'Contact, communications, account', 'Contract — Art. 6(1)(b); legitimate interests — Art. 6(1)(f)', '3 years from last contact'],
          ['Service emails (renewal notices, changes to Terms, security notices)', 'Contact, account', 'Contract — Art. 6(1)(b); legal obligation — Art. 6(1)(c)', 'Duration of account'],
          ['Marketing emails and newsletters', 'Contact, engagement', 'Consent — Art. 6(1)(a); or soft opt-in legitimate interests for existing customers — Art. 6(1)(f)', 'Until withdrawal + 1 year'],
          ['Audience measurement and analytics via Google Analytics 4', 'Usage, technical, cookie identifiers', 'Consent — Art. 6(1)(a)', '14 months'],
          ['Deploying and managing measurement tags via Google Tag Manager', 'Technical, cookie identifiers', 'Consent for non-essential tags — Art. 6(1)(a); legitimate interests for the container itself — Art. 6(1)(f)', 'Not applicable (no storage by GTM itself)'],
          ['Collecting, storing and proving cookie consent via CookieYes', 'Consent data, technical', 'Legal obligation — Art. 6(1)(c) read with Art. 7(1) GDPR', '12 months'],
          ['Advertising, retargeting and measuring campaigns', 'Cookies, engagement', 'Consent — Art. 6(1)(a)', 'Up to 13 months'],
          ['Preventing fraud, credential sharing, abuse and unauthorised access', 'Technical, usage, account', 'Legitimate interests — Art. 6(1)(f)', 'Up to 3 years'],
          ['Enforcing our Terms, establishing or defending legal claims', 'All relevant categories', 'Legitimate interests — Art. 6(1)(f); legal obligation — Art. 6(1)(c)', 'Until limitation period expires (generally up to 10 years)'],
          ['Security, logging and backups', 'Technical, usage', 'Legitimate interests — Art. 6(1)(f)', '24 months'],
          ['Business transfers (merger, sale)', 'All relevant categories', 'Legitimate interests — Art. 6(1)(f)', 'As required by the transaction'],
        ]}
      />
      <p>
        Our legitimate interests are: operating and securing a viable business, preventing fraud
        and licence abuse, understanding how customers use the Service in order to improve it,
        communicating with our existing customers about similar products, and protecting our legal
        rights. We have balanced these against your rights and freedoms and consider that our
        processing does not override them. You may object at any time (see clause 8).
      </p>
      <p>
        If you do not provide the data marked as necessary for account creation and billing, we
        will be unable to provide the Service. If you decline analytics or advertising cookies,
        the Service remains fully usable.
      </p>

      <h2>5. Automated decision-making and profiling</h2>
      <p>
        We do not carry out automated decision-making producing legal or similarly significant
        effects on you within the meaning of Article 22 GDPR.
      </p>
      <p>
        We may use limited automated analysis for fraud and abuse detection (for example, flagging
        unusual login patterns that suggest credential sharing). Any resulting suspension decision
        is reviewed by a human before it becomes final, and you may contest it by writing to us.
      </p>
      <p>
        Where you consent to analytics and advertising cookies, Google Analytics may group visitors
        into aggregated audience segments (for example, by device type, acquisition channel or
        country) and we may segment marketing emails by basic criteria such as industry or plan
        type. This does not produce legal effects and you may object or withdraw consent at any
        time.
      </p>

      <h2>6. Who we share your data with</h2>
      <p>
        We never sell your personal data. We share it only with the categories of recipients
        below, and only to the extent necessary.
      </p>

      <h3>6.1 Processors and service providers</h3>
      <LegalTable
        headers={['Provider', 'Purpose', 'Location', 'Transfer safeguard']}
        rows={[
          ['Vercel Inc.', 'Hosting, content delivery network, edge network, server logs, deployment infrastructure for www.highcontent.io', 'United States (with EU edge regions)', 'EU–US Data Privacy Framework and/or Standard Contractual Clauses; Vercel DPA'],
          ['Google Ireland Limited (Google Analytics 4)', 'Audience measurement, traffic and usage statistics', 'Ireland (EU), with onward transfers to Google LLC in the US', 'EU–US Data Privacy Framework certification of Google LLC; Standard Contractual Clauses; Google Ads Data Processing Terms'],
          ['Google Ireland Limited (Google Tag Manager)', 'Deployment and management of measurement tags', 'Ireland (EU), with onward transfers to Google LLC in the US', 'As above'],
          ['CookieYes Limited', 'Cookie consent banner, consent management platform, cookie scanning, storage of consent records', 'United Kingdom', 'UK adequacy decision of the European Commission; CookieYes DPA'],
          ['Stripe Payments Europe Ltd', 'Payment processing, subscription billing, invoicing', 'Ireland (EU), with onward transfers to Stripe Inc. in the US', 'Standard Contractual Clauses; EU–US Data Privacy Framework'],
          ['Outseta', 'Subscription management, membership access, billing workflows', 'United States', 'Standard Contractual Clauses — obtain and keep the signed DPA'],
          ['Brevo (Sendinblue SAS)', 'Transactional and marketing email delivery', 'France (EU)', 'Within the EEA'],
          ['Canva Pty Ltd', 'Delivery and editing of design Assets', 'Australia', 'Within the EEA'],
          ['Dato srl', 'Content Management System', 'Ireland (EU)', 'Within the EEA'],
        ]}
      />
      <p>
        Each processor is bound by a data processing agreement under Article 28 GDPR, requiring
        confidentiality, appropriate security and processing only on our documented instructions.
      </p>
      <p>
        <em>
          (This list reflects our providers at the date above and may change; an up-to-date list
          is available on request at <Mail />.)
        </em>
      </p>

      <h3>6.2 Other recipients</h3>
      <ul>
        <li>Public authorities, where required by law or by a valid legal request;</li>
        <li>Acquirers, in the context of a merger, acquisition, restructuring or sale of assets, subject to confidentiality and to this Policy continuing to apply;</li>
        <li>Courts and legal advisers, where necessary to establish, exercise or defend legal claims.</li>
      </ul>

      <h2>7. International transfers</h2>
      <p>
        Our data is primarily processed within the European Economic Area (EEA). Certain providers
        listed in clause 6.1 — in particular Vercel Inc., Google LLC (as onward recipient from
        Google Ireland Limited), Outseta and CookieYes Limited — process data outside the EEA.
      </p>
      <p>Where this occurs, we ensure that an appropriate safeguard under Chapter V GDPR is in place, namely:</p>
      <ul>
        <li>
          an adequacy decision of the European Commission — this covers transfers to the United
          Kingdom (CookieYes) and, for certified recipients, transfers to the United States under
          the EU–US Data Privacy Framework; or
        </li>
        <li>
          the European Commission&apos;s Standard Contractual Clauses (Decision (EU) 2021/914),
          supplemented where necessary by a transfer impact assessment and additional technical
          measures such as encryption in transit and at rest, pseudonymisation and IP truncation.
        </li>
      </ul>
      <p>
        Specifically for Google Analytics: we have configured the property so that IP addresses
        are truncated/anonymised before storage, Google Signals and advertising features are
        disabled by default unless you consent to advertising cookies, data sharing with Google
        for product-improvement purposes is switched off, and data retention is set to 14 months.
        Google Analytics is only loaded after you have given consent through the cookie banner.
      </p>
      <p>
        You may request a copy of the relevant safeguards by writing to <Mail />.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the GDPR you have the following rights:</p>
      <ul>
        <li>Right of access (Art. 15) — to obtain confirmation of whether we process your data and a copy of it;</li>
        <li>Right to rectification (Art. 16) — to correct inaccurate or incomplete data;</li>
        <li>Right to erasure (Art. 17) — the &quot;right to be forgotten&quot;, where one of the grounds applies;</li>
        <li>Right to restriction of processing (Art. 18);</li>
        <li>Right to data portability (Art. 20) — to receive data you provided in a structured, commonly used, machine-readable format;</li>
        <li>Right to object (Art. 21) — to processing based on legitimate interests, including an absolute right to object to direct marketing at any time;</li>
        <li>Right to withdraw consent (Art. 7(3)) — at any time, without affecting the lawfulness of processing carried out before withdrawal;</li>
        <li>Right not to be subject to automated decision-making (Art. 22);</li>
        <li>Right to lodge a complaint with a supervisory authority (see clause 13).</li>
      </ul>

      <h3>How to exercise your rights</h3>
      <p>
        Write to <Mail /> with the subject line &quot;GDPR request&quot;. We will respond within
        one month, extendable by two further months for complex or numerous requests, in which
        case we will inform you within the first month.
      </p>
      <p>
        Exercising your rights is free of charge. Where a request is manifestly unfounded or
        excessive, particularly because of its repetitive character, we may charge a reasonable
        fee or refuse to act, giving reasons.
      </p>
      <p>We may need to verify your identity before acting on a request, in order to protect your data.</p>

      <h3>Withdrawing cookie consent</h3>
      <p>
        You can withdraw or change your cookie consent at any time — as easily as you gave it —
        by clicking the &quot;Cookie settings&quot; link in the website footer or the floating
        consent icon, which reopens the CookieYes preference centre.
      </p>

      <h3>Unsubscribing from marketing</h3>
      <p>
        Every marketing email includes an unsubscribe link. You may also email us. Note that we
        will still send you essential service messages (billing, security, changes to the Terms),
        as these are not marketing.
      </p>

      <h2>9. Cookies and similar technologies</h2>
      <h3>9.1 Our consent management platform</h3>
      <p>
        We use CookieYes as our consent management platform. On your first visit, a banner allows
        you to Accept all, Reject all non-essential cookies, or Customise your choices by
        category.
      </p>
      <ul>
        <li>
          No non-essential cookie or tag is placed before you give consent. Google Tag Manager is
          configured with Google Consent Mode v2, so analytics and advertising tags remain in a
          denied state until consent is granted.
        </li>
        <li>
          Your choice is recorded by CookieYes together with a timestamp, the consent version and
          the categories accepted, so that we can demonstrate compliance under Article 7(1) GDPR.
        </li>
        <li>
          Consent is re-requested every 12 months, or sooner if we add a new purpose or provider.
        </li>
      </ul>

      <h3>9.2 Categories of cookies we use</h3>
      <LegalTable
        headers={['Category', 'Purpose', 'Consent required']}
        rows={[
          ['Strictly necessary', 'Login sessions, authentication, security, load balancing, checkout flow, and storing your cookie preferences', 'No — exempt under Art. 5(3) ePrivacy Directive'],
          ['Functional', 'Language, display preferences, saved settings', 'Yes'],
          ['Analytics / performance', 'Google Analytics 4 — measuring traffic, understanding which Collections and features are used', 'Yes'],
          ['Advertising / marketing', 'Retargeting, conversion measurement and audience building on Google, Meta and similar platforms', 'Yes'],
        ]}
      />

      <h3>9.3 Principal cookies</h3>
      <LegalTable
        headers={['Cookie', 'Set by', 'Purpose', 'Duration']}
        rows={[
          ['cookieyes-consent', 'CookieYes', 'Stores your consent choices and the categories you accepted', '12 months'],
          ['_ga', 'Google Analytics', 'Distinguishes unique visitors by assigning a pseudonymous client identifier', '24 months'],
          ['_ga_<404621828>', 'Google Analytics', 'Maintains session state for GA4', '24 months'],
          ['Session / authentication cookies', 'Highcontent, Outseta', 'Keeps you logged in and secures your session', 'Session to 30 days'],
        ]}
      />
      <p>
        Google Tag Manager does not itself store personal data or set cookies; it is a container
        that loads other tags according to your consent state.
      </p>
      <p>
        An up-to-date, automatically scanned cookie list is available in the CookieYes preference
        centre accessible from the footer of the website.
      </p>

      <h3>9.4 Browser controls</h3>
      <p>
        You can also control cookies through your browser settings and delete cookies already
        stored. Blocking strictly necessary cookies may prevent parts of the site from working.
        You may additionally install the Google Analytics Opt-out Browser Add-on available at{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          https://tools.google.com/dlpage/gaoptout
        </a>.
      </p>

      <h2>10. Data retention</h2>
      <p>
        We keep personal data only for as long as necessary for the purposes described in clause
        4, applying the retention periods set out in that table.
      </p>
      <p>In summary:</p>
      <ul>
        <li>Account data — for the life of your account, then 3 years (limitation period for contractual claims), after which it is deleted or anonymised;</li>
        <li>Accounting and invoicing data — 10 years, as required by Lithuanian accounting and tax legislation;</li>
        <li>Google Analytics data — 14 months at user and event level, after which it is automatically deleted by Google; aggregated reports may be retained longer in non-identifying form;</li>
        <li>Consent records (CookieYes) — 12 months from the date of consent, plus a further period sufficient to evidence compliance;</li>
        <li>Marketing consents and preferences — until withdrawal, plus a short record of the withdrawal itself to prove compliance;</li>
        <li>Support correspondence — 3 years from the last exchange;</li>
        <li>Server and hosting logs (Vercel) — up to 12 months</li>
        <li>Backups — overwritten on a rolling cycle, typically within 90 days</li>
      </ul>
      <p>
        After the applicable period, data is securely deleted or irreversibly anonymised for
        statistical purposes.
      </p>

      <h2>11. When you are the controller and we are the processor</h2>
      <p>
        Where you upload Customer Content that contains personal data of your own clients,
        patients, employees or contacts, you act as the data controller for that data and we act
        as your processor.
      </p>
      <p>
        In that capacity we will: process such data only on your documented instructions; ensure
        that personnel are bound by confidentiality; implement appropriate technical and
        organisational security measures; assist you with data subject requests and with your
        obligations under Articles 32–36 GDPR so far as reasonably possible; and delete or return
        such data at the end of the Service, subject to legal retention obligations.
      </p>
      <p>
        If you require a formal Data Processing Agreement (DPA), please contact <Mail /> and we
        will provide one.
      </p>
      <p>
        You confirm that you have a lawful basis for uploading any personal data, and you
        indemnify us against claims arising from your failure to do so.
      </p>

      <h2>12. Security</h2>
      <p>We implement appropriate technical and organisational measures under Article 32 GDPR, including:</p>
      <ul>
        <li>encryption of data in transit (TLS/HTTPS enforced across the whole site by our hosting provider) and at rest where supported by our providers;</li>
        <li>hashed and salted password storage;</li>
        <li>access control on a need-to-know basis, with individual accounts and strong authentication;</li>
        <li>use of reputable, security-certified hosting, analytics and payment providers;</li>
        <li>infrastructure-level protections provided by Vercel, including DDoS mitigation, automatic certificate management and isolated deployment environments;</li>
        <li>regular backups and tested restoration;</li>
        <li>logging and monitoring of access to production systems;</li>
        <li>confidentiality obligations for all personnel and contractors;</li>
        <li>vendor due diligence before appointing processors.</li>
      </ul>
      <p>
        No system is perfectly secure. If a personal data breach occurs that is likely to result
        in a risk to your rights and freedoms, we will notify the State Data Protection
        Inspectorate within 72 hours and, where the risk is high, inform you without undue delay.
      </p>

      <h2>13. Complaints</h2>
      <p>
        If you are not satisfied with how we handle your personal data, please contact us first at{' '}
        <Mail /> — we take complaints seriously and will try to resolve them.
      </p>
      <p>
        You also have the right to lodge a complaint with a supervisory authority, in particular
        the Lithuanian authority:
      </p>
      <p>
        Valstybinė duomenų apsaugos inspekcija (State Data Protection Inspectorate)<br />
        L. Sapiegos g. 17, 10312 Vilnius, Lithuania<br />
        Tel.: <a href="tel:+37052712804">+370 5 271 2804</a><br />
        Email: <Mail>ada@ada.lt</Mail><br />
        Website:{' '}
        <a href="https://www.vdai.lrv.lt" target="_blank" rel="noopener noreferrer">
          www.vdai.lrv.lt
        </a>
      </p>
      <p>
        You may also complain to the supervisory authority of your EU country of residence or
        workplace, or of the place of the alleged infringement.
      </p>

      <h2>14. Children</h2>
      <p>
        The Service is intended for professional and business use and is not directed at persons
        under 18. We do not knowingly collect personal data from children. If you believe a child
        has provided us with personal data, contact us and we will delete it.
      </p>

      <h2>15. Third-party links and platforms</h2>
      <p>
        The Service links to and integrates with third-party platforms (Canva, Instagram,
        Facebook, LinkedIn, Pinterest, YouTube, payment providers and others). Their processing
        of your personal data is governed by their own privacy policies, over which we have no
        control. We encourage you to read them, in particular:
      </p>
      <ul>
        <li>
          Google Privacy Policy —{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </li>
        <li>
          Vercel Privacy Policy —{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            https://vercel.com/legal/privacy-policy
          </a>
        </li>
        <li>
          CookieYes Privacy Policy —{' '}
          <a href="https://www.cookieyes.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            https://www.cookieyes.com/privacy-policy/
          </a>
        </li>
        <li>
          Stripe Privacy Policy —{' '}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            https://stripe.com/privacy
          </a>
        </li>
      </ul>

      <h2>16. Note on AI-generated content</h2>
      <p>
        Some Assets in our library are generated using artificial intelligence and may depict
        human-looking figures. Those figures are synthetic and do not represent real, identifiable
        individuals, and therefore do not constitute personal data of any person. Where an Asset
        depicts a real individual, that individual has been photographed or filmed under an
        appropriate release obtained by us or our licensors.
      </p>
      <p>
        If you believe an Asset depicts you or another identifiable person without a valid basis,
        please contact us at <Mail />. We will investigate promptly and, where appropriate,
        withdraw the Asset from the library.
      </p>

      <h2>17. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices,
        in the Service or in applicable law.
      </p>
      <p>
        The current version is always available at{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>{' '}
        with the &quot;Last updated&quot; date at the top. Where changes are material, we will
        notify you by email or by a prominent notice on the Service before they take effect.
        Where a change requires your consent, we will ask for it, including by re-displaying the
        cookie banner.
      </p>

      <h2>18. Contact us</h2>
      <p>For any question, request or complaint concerning this Privacy Policy or your personal data:</p>
      <p>
        MB &quot;Indremas&quot;<br />
        Gvildžių g. 23, Radailių k., Klaipėdos raj., Lithuania<br />
        Company ID: 306098171<br />
        Manager: Karolina Nikolaityte<br />
        Email: <Mail /><br />
        Website:{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>
      </p>
    </LegalPageShell>
  );
}
