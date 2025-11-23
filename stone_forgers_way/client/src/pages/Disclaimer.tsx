import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Disclaimer() {
  return (
    <Layout>
      <SEO
        title="Disclaimer :: The Stone Forger's Way"
        description="Important information about the educational nature of The Stone Forger's Way and your personal responsibility."
        type="website"
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-serif text-stone-800 mb-4">Disclaimer</h1>

        <p className="text-sm text-stone-600 mb-8">
          Last Updated: November 21, 2025
        </p>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Educational Purpose</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The Stone Forger's Way provides frameworks, practices, and perspectives for conscious creation
              and personal exploration. All content is offered for educational and inspirational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Not Professional Advice</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The information on this site is not intended as, and should not be taken as, professional advice
              in any field including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-lg text-stone-700">
              <li><strong>Medical or Mental Health</strong> :: This is not therapy, counseling, or medical treatment</li>
              <li><strong>Financial</strong> :: This is not investment, business, or financial planning advice</li>
              <li><strong>Legal</strong> :: This is not legal counsel or guidance</li>
              <li><strong>Spiritual</strong> :: This is not religious instruction or spiritual direction</li>
            </ul>
            <p className="text-lg leading-relaxed text-stone-700 mt-4">
              Always consult qualified professionals for matters requiring expert guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Personal Responsibility</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              You are responsible for your own choices, actions, and outcomes. The practices, archetypes,
              and concepts presented here are invitations to explore, not prescriptions to follow. Use
              discernment. Trust your own wisdom. Seek professional support when needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Archetype Quiz</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              The archetype quiz is a reflective tool for self-exploration, not a diagnostic instrument.
              Results are descriptive frameworks, not clinical assessments. They do not define you, diagnose
              you, or limit you. They are starting points for inquiry, not endpoints of identity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Accuracy and Completeness</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              While we strive for accuracy, we cannot guarantee that all information is error-free, complete,
              or current. Content evolves as understanding deepens. Corrections are made when errors are
              discovered. Always verify information that informs important decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">External Links</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              This site may link to external resources. We are not responsible for the content, accuracy,
              or practices of third-party sites. Links are provided for convenience and do not constitute
              endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Results Not Guaranteed</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              Engaging with the practices, concepts, or frameworks on this site does not guarantee specific
              outcomes. Your results depend on many factors including your commitment, context, and circumstances.
              Past experiences shared here do not predict future results for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Limitation of Liability</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              To the fullest extent permitted by law, The Stone Forger's Way, its creators, and contributors
              are not liable for any damages arising from your use of this site or reliance on its content.
              This includes but is not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Changes to This Disclaimer</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              We may update this disclaimer as the work evolves. Changes will be posted on this page with
              an updated date. Continued use of the site after changes constitutes acceptance of the updated
              disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Contact</h2>
            <p className="text-lg leading-relaxed text-stone-700">
              Questions about this disclaimer? Contact us through the information provided on our About page.
            </p>
          </section>

          <section className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <p className="font-semibold text-stone-800 mb-2">In Summary:</p>
            <p className="text-lg leading-relaxed text-stone-700">
              This work is offered as practice, not prescription. As exploration, not expertise. As invitation,
              not instruction. Engage with what resonates. Question what doesn't. Test the frameworks in your
              own life. Trust yourself. Seek professional support when needed.
            </p>
            <p className="mt-4 italic text-stone-700">
              The stones are yours to forge.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
