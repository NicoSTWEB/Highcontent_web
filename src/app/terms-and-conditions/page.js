import Link from 'next/link';
import { LegalPageShell } from '@/components/legal-page-shell';

export const metadata = {
  title: 'Terms & Conditions — Highcontent',
  description: 'Terms and conditions for using Highcontent social media content subscriptions and assets.',
};

function Mail({ children = 'contact@highcontent.io' }) {
  return <a href={`mailto:${children}`}>{children}</a>;
}

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell title="Terms and Conditions" updated="August 12, 2026">
      <p>
        Highcontent —{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>
      </p>

      <h2>1. Who we are and what these Terms cover</h2>
      <p>These Terms and Conditions (the &quot;Terms&quot;) form a binding agreement between you and:</p>
      <p>
        MB &quot;Indremas&quot;<br />
        Company code (Company ID): 306098171<br />
        Registered address: Gvildžių g. 23, Radailių k., Klaipėdos raj., Lithuania<br />
        Legal form: Mažoji bendrija (small partnership)<br />
        Manager / Director: Karolina Nikolaityte<br />
        Registered with the Register of Legal Entities of the Republic of Lithuania<br />
        Email: <Mail />
      </p>
      <p>
        In these Terms, &quot;we&quot;, &quot;us&quot;, &quot;our&quot; and &quot;Highcontent&quot; mean MB
        &quot;Indremas&quot;, operating the brand and platform &quot;Highcontent&quot; at{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>
        . &quot;You&quot;, &quot;your&quot; and &quot;Customer&quot; mean the person or entity that
        creates an account, subscribes to a Plan or otherwise uses the Service.
      </p>
      <p>
        These Terms govern your access to and use of the website, the Highcontent platform, the
        content library, the Assets, and all related services (together, the &quot;Service&quot;).
      </p>
      <p>
        By creating an account, purchasing a Plan, downloading an Asset or otherwise using the
        Service, you confirm that you have read, understood and accept these Terms. If you do not
        accept them, do not use the Service.
      </p>
      <p>
        If you enter into these Terms on behalf of a company or other legal entity, you represent
        that you have the authority to bind that entity, and &quot;you&quot; refers to that entity.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>Assets</strong> — any content made available through the Service, including social
          media templates, feed post designs, story designs, highlight covers, carousels, video
          templates, AI-generated images, AI-generated video, photographs, illustrations, graphics,
          fonts (where licensed), copy, captions, hooks, strategy documents, guides and any other
          material we supply.
        </li>
        <li>
          <strong>AI Assets</strong> — Assets that have been generated or materially modified using
          artificial intelligence systems.
        </li>
        <li>
          <strong>Collection</strong> — a curated group of Assets, typically organised by industry,
          theme or format.
        </li>
        <li>
          <strong>Plan</strong> — a subscription tier offered on our pricing page, each with its own
          scope, volume and licence terms.
        </li>
        <li>
          <strong>Subscription Period</strong> — the recurring period (monthly, annual or as
          otherwise stated at checkout) for which your Plan is purchased.
        </li>
        <li>
          <strong>Customer Content</strong> — any material you upload, submit, insert into or combine
          with the Assets, including your logos, trade marks, photographs, text and client
          materials.
        </li>
        <li>
          <strong>End Client</strong> — a third party for whom you provide marketing, social media or
          agency services.
        </li>
        <li>
          <strong>Third-Party Platform</strong> — any external service used in connection with the
          Assets or the Service, including Canva, Instagram, Facebook, TikTok, LinkedIn, Pinterest,
          YouTube, payment providers, hosting providers and analytics providers.
        </li>
      </ul>

      <h2>3. Eligibility and accounts</h2>
      <p>
        3.1 The Service is designed and marketed for professional and business use — including
        clinics, practitioners, coaches, agencies and other businesses. By subscribing you confirm
        that you are acting for purposes relating to your trade, business, craft or profession,
        unless you expressly tell us otherwise before purchase.
      </p>
      <p>3.2 You must be at least 18 years old and have full legal capacity to enter into contracts.</p>
      <p>
        3.3 You must provide accurate, complete and current registration information and keep it
        up to date. You are responsible for all activity that occurs under your account.
      </p>
      <p>
        3.4 Accounts are personal to one business. Login credentials must not be shared, sold,
        rented, published or made available to any third party outside your organisation, other
        than to employees or contractors acting on your behalf and bound by obligations at least as
        protective as these Terms. You remain fully liable for their acts and omissions.
      </p>
      <p>
        3.5 We may suspend or close an account where we reasonably suspect credential sharing,
        unauthorised access, fraud, chargeback abuse, or breach of these Terms.
      </p>

      <h2>4. The Service</h2>
      <p>
        4.1 The Service gives you access, for the duration of an active paid Plan, to a library of
        ready-to-post social media Assets and related resources, together with periodic updates (for
        example, new drops of feed posts, stories, hooks, video content and Collections) as
        described on the pricing page applicable at the time of your purchase.
      </p>
      <p>
        4.2 Volumes, formats and update frequency are indicative and may evolve. We may add, modify,
        re-curate, replace or retire Assets and Collections, and improve or change features,
        provided that we do not materially reduce the core functionality of your Plan during a
        Subscription Period you have already paid for.
      </p>
      <p>
        4.3 Certain Assets are designed to be edited in Third-Party Platforms such as Canva. Access
        to and use of those platforms is subject to their own terms and, where applicable, their
        own subscription fees. We are not responsible for the availability, pricing, functionality
        or terms of any Third-Party Platform.
      </p>
      <p>
        4.4 The Service is provided on an &quot;as available&quot; basis. We do not guarantee
        uninterrupted access and may carry out maintenance, updates and technical interventions.
      </p>

      <h2>5. Plans, prices, payment and renewal</h2>
      <p>
        5.1 Prices are those displayed on{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>{' '}
        at the moment of purchase, in euros (EUR). Unless expressly stated otherwise, prices are
        exclusive of VAT and any other applicable taxes.
      </p>
      <p>Applicable taxes will be added where required by law.</p>
      <p>
        5.2 VAT. Where we are required to charge VAT, it will be applied at the rate applicable to
        your status and location, based on the information you provide. Business customers in other
        EU Member States who supply a valid VAT identification number may be invoiced under the
        reverse-charge mechanism where legally applicable. You are responsible for the accuracy of
        the tax details you provide.
      </p>
      <p>
        5.3 Payment. Payments are processed by our third-party payment providers Stripe and
        Outseta, or such other providers as we may appoint. By subscribing, you authorise us and
        our payment providers to charge your payment method for the applicable fees, including
        recurring fees.
      </p>
      <p>
        5.4 Automatic renewal. Subscriptions renew automatically at the end of each Subscription
        Period, for a further period of the same duration and at the then-current price for your
        Plan, unless cancelled before the renewal date in accordance with clause 6.
      </p>
      <p>
        5.5 Failed payments. If a payment fails, we may retry the charge, suspend access to the
        Service and/or terminate the subscription. You remain liable for amounts due. We may charge
        statutory default interest on late payments by business customers in accordance with
        Lithuanian law.
      </p>
      <p>
        5.6 Price changes. We may change the price of a Plan for future Subscription Periods. We
        will notify you by email at least 30 days before the change takes effect. If you do not
        accept the new price, you may cancel before the renewal date; continued use after the
        effective date constitutes acceptance.
      </p>
      <p>
        5.7 Custom Plans. Custom or enterprise engagements may be governed by an additional order
        form, quotation or service agreement. In the event of conflict, that document prevails over
        these Terms for the matters it expressly covers.
      </p>

      <h2>6. Cancellation, withdrawal and refunds</h2>
      <p>
        6.1 Cancellation. You may cancel your subscription at any time from your account settings
        or by writing to <Mail />. Cancellation takes effect at the end of the current Subscription
        Period. You retain access until that date. We do not provide pro-rata refunds for partial
        periods, except where required by mandatory law.
      </p>
      <p>
        6.2 Digital content — no right of withdrawal after access. The Service consists of digital
        content and digital services supplied without a tangible medium and made available
        immediately.
      </p>
      <p>
        Where you qualify as a consumer under EU law, you have a statutory 14-day right of
        withdrawal. However, by purchasing and requesting immediate access to the library, you
        expressly request that performance begins immediately and you expressly acknowledge that
        you thereby lose your right of withdrawal once the digital content has been supplied to
        you, in accordance with Article 16(m) of Directive 2011/83/EU and the corresponding
        provisions of Lithuanian law. Business customers (B2B) do not benefit from a statutory
        right of withdrawal.
      </p>
      <p>
        6.3 Discretionary refunds. Outside the above, refunds are granted at our discretion,
        typically only where the Service was materially unavailable for a prolonged period
        attributable to us, or where a duplicate or erroneous charge occurred. Requests must be
        sent to <Mail /> within 14 days of the charge.
      </p>
      <p>
        6.4 Chargebacks. Initiating a chargeback without first contacting us in good faith is a
        breach of these Terms and may result in immediate termination and recovery of costs.
      </p>

      <h2>7. Licence to use the Assets — the core of your rights</h2>
      <p>
        Subject to your full and continuing compliance with these Terms and to payment of all fees
        due, we grant you a limited, non-exclusive, non-transferable, non-sublicensable (except as
        set out in clause 8), revocable, worldwide licence to use the Assets as set out below.
      </p>
      <p>
        Nothing in these Terms transfers ownership of any Asset to you. You purchase a right of
        use, not a right of property. All intellectual property rights in and to the Assets remain
        with MB &quot;Indremas&quot; or its licensors at all times.
      </p>

      <h3>7.1 Permitted uses</h3>
      <p>You may:</p>
      <ol className="legal-alpha">
        <li>
          download, edit, adapt, resize, recolour, translate and customise Assets, including by
          inserting your Customer Content, brand elements, logo and copy;
        </li>
        <li>
          publish the resulting materials on your own social media accounts, website, landing
          pages, newsletters, blogs, digital advertising campaigns (including paid ads),
          presentations, and in printed marketing collateral for your own business;
        </li>
        <li>use the Assets to promote your own products and services;</li>
        <li>
          retain and continue to display materials already published while your subscription was
          active, subject to clause 12.
        </li>
      </ol>

      <h3>7.2 Territory, duration and volume</h3>
      <p>
        The licence is worldwide and, for Assets downloaded during an active paid subscription,
        continues after the end of that subscription for the continued use of materials you have
        already created and published, subject to the restrictions in clause 9 and to clause 12.4.
        Access to the library, to new drops and to any further downloads ends when your
        subscription ends.
      </p>

      <h3>7.3 Non-exclusivity — important</h3>
      <p>
        The Assets are non-exclusive. Identical or similar Assets are licensed to other customers,
        including potentially to businesses in your industry, city or niche. We do not guarantee,
        and expressly disclaim, any exclusivity, geographic protection, sector protection or
        uniqueness, unless exclusivity has been agreed in writing in a Custom Plan and paid for
        separately.
      </p>

      <h3>7.4 No attribution required</h3>
      <p>
        You are not required to credit Highcontent when using the Assets. You may not, however,
        imply a partnership, endorsement or affiliation with Highcontent beyond your status as a
        customer, without our written consent.
      </p>

      <h2>8. Agency and End Client use</h2>
      <p>
        8.1 By subscribing to the &quot;Pro €159/Month&quot; offer, agencies, freelancers, and
        service providers may use the Assets for their End Clients only where their Plan expressly
        includes client use.
      </p>
      <p>8.2 Where client use is included:</p>
      <ol className="legal-alpha">
        <li>you may create and deliver finished marketing materials incorporating the Assets to your End Clients;</li>
        <li>
          the End Client may use those finished materials for their own marketing, on a
          non-exclusive basis, subject to the same restrictions set out in clause 9;
        </li>
        <li>you remain fully responsible for your End Clients&apos; compliance with these Terms as if their acts were your own;</li>
        <li>
          you must not provide End Clients with raw, unmodified or unflattened Asset files,
          template links, editable source files, or access to the library.
        </li>
      </ol>
      <p>
        8.3 You may not give End Clients access to your Highcontent account, nor resell access to
        the library, nor present the library itself (as opposed to finished creative work) as a
        deliverable.
      </p>
      <p>8.4 Any volume limits, client-count limits or seat limits stated for your Plan apply strictly.</p>

      <h2>9. Restrictions — what you may never do</h2>
      <p>You must not, and must not permit any third party to:</p>
      <ol className="legal-alpha">
        <li>
          resell, sublicense (except as permitted in clause 8), rent, lease, lend, distribute,
          share, publish or otherwise make available the Assets as Assets — that is, in their
          original, substantially unmodified or &quot;stock-like&quot; form, whether free or for a
          fee;
        </li>
        <li>
          upload, submit or contribute any Asset to any stock library, template marketplace,
          design marketplace, print-on-demand platform, AI training dataset, NFT or
          blockchain-based platform, or any similar service;
        </li>
        <li>
          use any Asset as, or as part of, a logo, trade mark, service mark, trade name, or design
          right, or attempt to register any such right in an Asset or anything confusingly similar
          to it;
        </li>
        <li>claim, or allow anyone to claim, authorship, ownership or exclusive rights in any Asset;</li>
        <li>
          use the Assets to create a product, service, library, template pack, membership, course
          asset pack or offering that competes with, replicates or substitutes the Service;
        </li>
        <li>
          use the Assets, in whole or in part, to train, fine-tune, benchmark or develop any
          machine learning or artificial intelligence model, or to build any dataset for such
          purposes;
        </li>
        <li>
          scrape, crawl, bulk-download, mirror, index or systematically extract the library or any
          part of it, or use any automated means to access the Service;
        </li>
        <li>
          circumvent, disable or interfere with any security, access-control, watermarking,
          rate-limiting or usage-tracking feature;
        </li>
        <li>remove, obscure or alter any copyright, watermark, proprietary notice or metadata;</li>
        <li>
          use the Assets in any manner that is unlawful, defamatory, obscene, pornographic,
          sexually suggestive, harassing, discriminatory, hateful, violent, or that promotes
          illegal activity;
        </li>
        <li>
          use the Assets in connection with adult entertainment, escort services, dating services
          presenting depicted persons as available, gambling, tobacco or vaping, weapons, illegal
          drugs, extremist or political campaigning, or any comparably sensitive context, without
          our prior written consent;
        </li>
        <li>
          use the Assets in a way that could be perceived as unfair, misleading or deceptive
          commercial practice, including misrepresenting the results, safety, qualifications or
          regulatory status of any product, service or treatment;
        </li>
        <li>
          use the Assets in a manner that infringes any third party&apos;s intellectual property,
          privacy, personality or other rights;
        </li>
        <li>reverse engineer, decompile or attempt to derive the source of any part of the Service.</li>
      </ol>
      <p>
        Breach of this clause 9 is a material breach entitling us to terminate immediately and to
        seek injunctive relief and damages.
      </p>

      <h2>10. AI-generated Assets — specific terms</h2>
      <p>
        10.1 A significant portion of the Assets is generated using artificial intelligence. This
        includes AI-generated images and videos depicting people, environments, products and
        scenes.
      </p>
      <p>
        10.2 Legal status of AI outputs. The legal protection available for AI-generated material
        varies by jurisdiction and is evolving. In some jurisdictions, purely AI-generated output
        may not attract copyright protection. Accordingly:
      </p>
      <ol className="legal-alpha">
        <li>
          we make no representation or warranty that AI Assets are protected by copyright, that
          any exclusive rights subsist in them, or that you can prevent third parties from using
          identical or similar material;
        </li>
        <li>your licence under clause 7 is granted to the fullest extent of the rights we hold, and no further;</li>
        <li>
          we do not warrant that AI Assets are unique, or that no substantially similar output
          exists or will be generated elsewhere.
        </li>
      </ol>
      <p>
        10.3 Similarity risk. AI systems may, without intent, produce output resembling existing
        works, real persons, brands or trade dress. We take reasonable curation measures, but you
        must review each Asset before use and satisfy yourself that its use is appropriate for
        your context, market and regulatory environment.
      </p>
      <p>
        10.4 Disclosure obligations. You are solely responsible for complying with any legal,
        platform or professional obligation to disclose the use of AI-generated or synthetic
        media, including obligations arising under Regulation (EU) 2024/1689 (the AI Act),
        advertising standards, medical or healthcare advertising rules, and the policies of social
        media platforms. We recommend labelling AI-generated imagery where it could otherwise
        mislead.
      </p>
      <p>
        10.5 Regulated sectors. Where you operate in a regulated sector — including aesthetic
        medicine, dentistry, healthcare, cosmetics, nutrition, finance or legal services — you are
        solely responsible for ensuring that any material you publish complies with the
        advertising, claims-substantiation and patient-communication rules applicable to you.
        Assets depicting treatments, results or clinical settings are illustrative only and must
        not be presented as genuine patient results, before/after evidence, testimonials or
        clinical outcomes.
      </p>

      <h2>11. Depictions of people — image rights and personality rights</h2>
      <p>This clause is important. Read it carefully.</p>
      <p>
        11.1 Nature of depicted persons. Persons appearing in the Assets are either (i) entirely
        AI-generated and do not depict real, identifiable individuals, or (ii) real individuals
        photographed or filmed under a licence or release obtained by us or our licensors. Where a
        real person is depicted, we obtain, or require our licensors to obtain, appropriate model
        releases.
      </p>
      <p>11.2 No endorsement. You must not use any Asset in a way that states or implies that a depicted person:</p>
      <ol className="legal-alpha">
        <li>endorses, recommends, uses or is affiliated with you, your brand, your products or your services;</li>
        <li>is a real client, patient, customer, employee, practitioner, staff member or founder of your business;</li>
        <li>has personally achieved, experienced or testified to any result, treatment outcome, transformation or benefit;</li>
        <li>holds any qualification, medical opinion or professional status.</li>
      </ol>
      <p>
        11.3 Testimonials. Assets may include testimonial-style layouts and design templates. These
        are design frameworks only. Any testimonial text, star rating, review or client quote you
        place into them must be genuine, verifiable and lawfully obtained from a real person who
        has consented to its publication. Placing invented testimonials into these templates is a
        misuse of the Assets, is a breach of these Terms, and may constitute a misleading
        commercial practice under Directive 2005/29/EC and national law. You bear sole liability
        for it.
      </p>
      <p>
        11.4 Sensitive uses. You must not use Assets depicting persons in connection with any
        subject matter that a reasonable person could find unflattering, controversial or damaging
        to the depicted person&apos;s reputation — including health conditions, mental health,
        sexual health, substance use, physical or cosmetic &quot;problems&quot;, financial
        distress, criminality, or political or religious opinion — even where the depicted person
        is AI-generated.
      </p>
      <p>
        11.5 Your own materials. Where you insert your own photographs, videos or footage of real
        people (including staff, clients or patients) into the Assets, you are the controller of
        those images. You warrant that you have obtained all necessary consents, releases and,
        where applicable, GDPR-compliant legal bases for their use, and that you comply with all
        professional confidentiality obligations.
      </p>
      <p>
        11.6 Reporting. If you become aware that an Asset may depict a real person without a valid
        release, or may infringe any right of personality, contact us immediately at <Mail /> and
        we will investigate and, where appropriate, withdraw the Asset. We may require you to
        cease use of a withdrawn Asset; we will give you reasonable notice and, where we are at
        fault, a proportionate credit.
      </p>

      <h2>12. Term, suspension and termination</h2>
      <p>
        12.1 These Terms apply from the moment you create an account or purchase a Plan and
        continue until terminated.
      </p>
      <p>12.2 You may terminate by cancelling your subscription in accordance with clause 6.1.</p>
      <p>
        12.3 We may suspend or terminate your access, in whole or in part, with immediate effect
        and without refund, if:
      </p>
      <ol className="legal-alpha">
        <li>you materially breach these Terms (in particular clauses 3.4, 8, 9, 10.4 or 11);</li>
        <li>payment is not made when due;</li>
        <li>we reasonably suspect fraud, unlawful use, or use that exposes us or third parties to legal risk;</li>
        <li>we are required to do so by law or by a regulator.</li>
      </ol>
      <p>
        Where the breach is capable of remedy and does not present an immediate risk, we will
        normally give you notice and a reasonable opportunity to remedy it.
      </p>
      <p>12.4 Effect of termination.</p>
      <ol className="legal-alpha">
        <li>Your access to the library, updates and support ends immediately.</li>
        <li>
          Materials you have already lawfully created and published using Assets downloaded during
          an active subscription may continue to be used and remain online, subject to clauses 9
          and 11.
        </li>
      </ol>
      <p>
        12.5 We may discontinue the Service as a whole on 60 days&apos; notice, in which case we
        will refund the unused portion of any prepaid Subscription Period on a pro-rata basis.
      </p>

      <h2>13. Customer Content</h2>
      <p>
        13.1 You retain all rights in your Customer Content. You grant us a limited, non-exclusive,
        royalty-free licence to host, store, reproduce and process Customer Content solely to the
        extent necessary to operate and provide the Service to you.
      </p>
      <p>
        13.2 You warrant that you hold all rights, consents and permissions necessary for your
        Customer Content and that it does not infringe any third-party right or applicable law.
      </p>
      <p>
        13.3 Showcasing. We may wish to feature examples of customer work, testimonials or logos in
        our marketing. We will only do so with your prior consent, which you may withdraw at any
        time by writing to <Mail />. Publicly available content that you have already published on
        your own public social media accounts may be re-shared by us in a customary social media
        manner, with attribution, unless you object.
      </p>

      <h2>14. Acceptable use of the platform</h2>
      <p>
        You must not: attempt to gain unauthorised access to the Service or its systems; introduce
        malware; conduct penetration testing without written authorisation; overload or impair the
        Service; use the Service to send unsolicited communications; or use the Service in
        violation of any export control or sanctions regime.
      </p>

      <h2>15. Intellectual property</h2>
      <p>
        15.1 The Service, the library, the curation, the selection and arrangement of the Assets,
        the platform, the software, the Highcontent name, logo, visual identity and all associated
        intellectual property rights are and remain the exclusive property of MB &quot;Indremas&quot;
        and its licensors.
      </p>
      <p>
        15.2 Except for the limited licence in clause 7, no right, title or interest is granted to
        you, whether by implication, estoppel or otherwise.
      </p>
      <p>
        15.3 Feedback. If you send us ideas, suggestions or improvement requests, you grant us a
        perpetual, irrevocable, worldwide, royalty-free right to use them without restriction or
        compensation.
      </p>

      <h2>16. Warranties and disclaimers</h2>
      <p>
        16.1 We warrant that we will provide the Service with reasonable skill and care and in
        accordance with these Terms.
      </p>
      <p>
        16.2 To the fullest extent permitted by law, and except as expressly stated in these Terms,
        the Service and the Assets are provided &quot;as is&quot; and &quot;as available&quot;,
        without warranties of any kind, whether express, implied or statutory, including implied
        warranties of merchantability, satisfactory quality, fitness for a particular purpose,
        non-infringement, accuracy or uninterrupted availability.
      </p>
      <p>16.3 In particular, we do not warrant that:</p>
      <ol className="legal-alpha">
        <li>
          the Assets will generate any specific commercial result, engagement, reach, follower
          growth, lead volume, conversion or revenue — any figures, examples or testimonials shown
          on our website are illustrative and not a guarantee of results;
        </li>
        <li>the Assets are suitable for your specific regulatory, professional or contractual context;</li>
        <li>
          the Assets are compliant with the policies of any Third-Party Platform, which may change
          at any time;
        </li>
        <li>the Service will be free from errors or interruptions;</li>
        <li>AI Assets are protected by copyright or are unique (see clause 10).</li>
      </ol>
      <p>
        16.4 Nothing in these Terms excludes or limits any statutory rights that a consumer has
        under mandatory Lithuanian or EU law, including rights relating to non-conformity of
        digital content under Directive (EU) 2019/770.
      </p>

      <h2>17. Limitation of liability</h2>
      <p>
        17.1 Nothing in these Terms excludes or limits our liability for death or personal injury
        caused by our negligence, for fraud or fraudulent misrepresentation, for wilful misconduct
        or gross negligence, or for any other liability that cannot be excluded or limited under
        applicable law.
      </p>
      <p>17.2 Subject to clause 17.1, we shall not be liable for:</p>
      <ol className="legal-alpha">
        <li>loss of profits, revenue, business, contracts, anticipated savings, goodwill or reputation;</li>
        <li>loss or corruption of data;</li>
        <li>business interruption;</li>
        <li>any indirect, special, incidental, punitive or consequential loss;</li>
        <li>
          any claim, fine, penalty, regulatory action or damage arising from your use of the
          Assets, including your compliance with advertising, healthcare, consumer-protection,
          AI-disclosure or platform rules;
        </li>
        <li>
          any act, omission, suspension, ban, shadow-ban, account restriction, algorithmic decision
          or policy change of any Third-Party Platform;
        </li>
        <li>any loss arising from your insertion of Customer Content or third-party content into the Assets.</li>
      </ol>
      <p>
        17.3 Cap. Subject to clause 17.1, our total aggregate liability arising out of or in
        connection with these Terms and the Service, whether in contract, tort (including
        negligence), breach of statutory duty or otherwise, shall not exceed the total amount
        actually paid by you to us in the twelve (12) months immediately preceding the event giving
        rise to the claim, or EUR 100 if no amount was paid.
      </p>
      <p>
        17.4 You must notify us of any claim within twelve (12) months of becoming aware of the
        circumstances giving rise to it, failing which the claim is waived to the extent permitted
        by law.
      </p>

      <h2>18. Indemnity</h2>
      <p>
        To the fullest extent permitted by law, you agree to indemnify, defend and hold harmless MB
        &quot;Indremas&quot;, its manager, employees, contractors and licensors from and against
        any claim, demand, action, proceeding, loss, liability, damage, fine, cost and expense
        (including reasonable legal fees) arising out of or in connection with:
      </p>
      <ol className="legal-alpha">
        <li>your use of the Service or the Assets in breach of these Terms;</li>
        <li>your Customer Content;</li>
        <li>any representation, claim, testimonial, before/after depiction or result you publish;</li>
        <li>
          your breach of clause 10.4 (AI disclosure), clause 10.5 (regulated sectors) or clause 11
          (image and personality rights);
        </li>
        <li>your End Clients&apos; use of materials you supply;</li>
        <li>your infringement of any third-party right or applicable law.</li>
      </ol>
      <p>
        This clause does not apply to consumers to the extent it would be unenforceable under
        mandatory consumer protection law.
      </p>

      <h2>19. Force majeure</h2>
      <p>
        We are not liable for any failure or delay in performance caused by events beyond our
        reasonable control, including natural disasters, war, terrorism, civil unrest, epidemics,
        strikes, failure of telecommunications, internet or hosting infrastructure, cyber-attacks,
        changes in law, or the suspension or failure of any Third-Party Platform or AI service
        provider.
      </p>

      <h2>20. Changes to these Terms</h2>
      <p>
        20.1 We may amend these Terms to reflect changes in the Service, in our business, or in
        applicable law.
      </p>
      <p>
        20.2 We will notify you of material changes by email and/or in-app notice at least 30 days
        before they take effect. Non-material changes (clarifications, corrections, formatting)
        take effect on publication.
      </p>
      <p>
        20.3 If you do not accept a material change, you may terminate before it takes effect.
        Continued use after the effective date constitutes acceptance.
      </p>
      <p>
        20.4 The version in force is always the one published at{' '}
        <a href="https://www.highcontent.io" target="_blank" rel="noopener noreferrer">
          www.highcontent.io
        </a>{' '}
        with the &quot;Last updated&quot; date at the top.
      </p>

      <h2>21. Governing law and disputes</h2>
      <p>
        21.1 These Terms and any dispute or claim arising out of or in connection with them
        (including non-contractual disputes) are governed by the laws of the Republic of Lithuania,
        without regard to conflict-of-law rules.
      </p>
      <p>
        21.2 Business customers: the courts of the Republic of Lithuania, with the court having
        jurisdiction over the registered office of MB &quot;Indremas&quot; Klaipėda district, shall
        have exclusive jurisdiction.
      </p>
      <p>
        21.3 Consumers: where you qualify as a consumer, this choice of law does not deprive you of
        the protection of the mandatory provisions of the law of your country of habitual
        residence, and you may bring proceedings in the courts of your place of residence.
      </p>
      <p>
        21.4 Amicable resolution. Before initiating proceedings, please contact us at <Mail />. We
        aim to resolve disputes quickly and in good faith.
      </p>
      <p>
        21.5 Consumer ADR. Consumers resident in Lithuania may address the State Consumer Rights
        Protection Authority (Valstybinė vartotojų teisių apsaugos tarnyba), Vilniaus g. 25, 01402
        Vilnius,{' '}
        <a href="https://www.vvtat.lt" target="_blank" rel="noopener noreferrer">
          www.vvtat.lt
        </a>
        . Consumers resident in other EU Member States may contact the alternative dispute
        resolution body competent in their country.
      </p>

      <h2>22. General provisions</h2>
      <p>
        22.1 Entire agreement. These Terms, together with the{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>, any Custom Plan order form and any
        documents expressly referred to, constitute the entire agreement between the parties and
        supersede all prior arrangements, representations and understandings.
      </p>
      <p>
        22.2 Severability. If any provision is held invalid or unenforceable, it shall be modified
        to the minimum extent necessary or severed, and the remainder shall continue in full force.
      </p>
      <p>22.3 No waiver. Failure or delay in exercising a right does not constitute a waiver of it.</p>
      <p>
        22.4 Assignment. You may not assign or transfer these Terms without our prior written
        consent. We may assign these Terms in connection with a merger, acquisition, reorganisation
        or sale of assets, on notice to you.
      </p>
      <p>
        22.5 No partnership. Nothing in these Terms creates a partnership, joint venture, agency or
        employment relationship between the parties.
      </p>
      <p>
        22.6 Notices. Notices to us should be sent to <Mail />. Notices to you will be sent to the
        email address on your account.
      </p>
      <p>
        22.7 Language. These Terms are drafted in English. Any translation is provided for
        convenience only; in case of discrepancy, the English version prevails, save where
        mandatory consumer law requires otherwise.
      </p>

      <h2>23. Contact</h2>
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
