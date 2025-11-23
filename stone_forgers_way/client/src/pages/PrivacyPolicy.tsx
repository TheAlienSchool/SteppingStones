import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy :: The Stone Forger's Way"
        description="Our commitment to your privacy. Learn how The Stone Forger's Way collects, uses, and protects your information."
        type="website"
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-serif text-stone-800 mb-4">Privacy Policy</h1>

        <p className="text-sm text-stone-600 mb-8">
          Last Updated: November 21, 2025
        </p>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Our Commitment</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The Stone Forger's Way respects your privacy. This policy explains what information we collect,
              how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Newsletter Signup</h3>
            <p className="text-lg leading-relaxed text-stone-700">
              When you subscribe to The Listener's Path newsletter via Beehiiv, we collect your email address.
              This information is processed by Beehiiv and subject to their privacy policy. We use your email
              solely to send you newsletter content you've requested.
            </p>

            <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Archetype Quiz Data</h3>
            <p className="text-lg leading-relaxed text-stone-700">
              Quiz results are stored locally in your browser using localStorage. This data never leaves your
              device and is not transmitted to our servers. You can clear this data at any time by clearing
              your browser's local storage.
            </p>

            <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Analytics</h3>
            <p className="text-lg leading-relaxed text-stone-700">
              We use privacy-focused analytics to understand how visitors use the site. This includes page
              views, time on site, and general traffic patterns. No personally identifiable information is
              collected through analytics.
            </p>

            <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-3">Payment Information</h3>
            <p className="text-lg leading-relaxed text-stone-700">
              When you make a contribution via Stripe, your payment information is processed securely by
              Stripe. We never see or store your credit card details. Stripe's privacy policy governs how
              your payment data is handled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-stone-700">
              <li>To send you newsletter content you've subscribed to</li>
              <li>To process contributions and provide receipts</li>
              <li>To improve the website experience through analytics</li>
              <li>To respond to your inquiries if you contact us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Third-Party Services</h2>
            <p className="text-lg leading-relaxed text-stone-700">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-lg text-stone-700">
              <li><strong>Beehiiv</strong> :: Newsletter management and email delivery</li>
              <li><strong>Stripe</strong> :: Payment processing for contributions</li>
              <li><strong>Netlify</strong> :: Website hosting and delivery</li>
            </ul>
            <p className="text-lg leading-relaxed text-stone-700 mt-4">
              Each service has its own privacy policy governing how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Cookies and Local Storage</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              We use localStorage (not cookies) to save your archetype quiz results on your device.
              This allows you to return and see your results without retaking the quiz. You can delete
              this data at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Your Rights</h2>
            <p className="text-lg leading-relaxed text-stone-700">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-lg text-stone-700">
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Request deletion of any personal data we hold</li>
              <li>Access the information we have about you</li>
              <li>Clear your local quiz data through your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Data Security</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              We take reasonable measures to protect your information. However, no internet transmission
              is completely secure. We encourage you to use strong passwords and protect your account
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Children's Privacy</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The Stone Forger's Way is not intended for children under 13. We do not knowingly collect
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Changes to This Policy</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              We may update this privacy policy as our practices evolve. Changes will be posted on this
              page with an updated date. Continued use of the site after changes constitutes acceptance
              of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Contact</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              Questions about this privacy policy? Contact us through the information provided on our
              About page.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
