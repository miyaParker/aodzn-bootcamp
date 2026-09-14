import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import Footer from "../../components/Footer";
import LegalPage, { type LegalSection } from "../../components/LegalPage";
import { getSiteSettingsData } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service — AODZN Product Design Bootcamp",
  description:
    "The terms that govern your use of the AODZN website and participation in the AODZN Product Design Bootcamp.",
};

const sections: LegalSection[] = [
  { id: "acceptance-of-terms", label: "1. Acceptance of Terms" },
  { id: "the-program", label: "2. The Program" },
  {
    id: "registration-and-eligibility",
    label: "3. Registration and Eligibility",
  },
  { id: "payment", label: "4. Payment" },
  { id: "communications", label: "5. Communications" },
  { id: "intellectual-property", label: "6. Intellectual Property" },
  { id: "disclaimer", label: "7. Disclaimer" },
  { id: "limitation-of-liability", label: "8. Limitation of Liability" },
  { id: "changes-to-these-terms", label: "9. Changes to These Terms" },
  { id: "contact-us", label: "10. Contact Us" },
];

export default async function TermsOfServicePage() {
  const contactEmail = process.env.CONTACT_TO_EMAIL;
  const siteSettings = await getSiteSettingsData();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav
        links={siteSettings.navLinks}
        ctaLabel={siteSettings.navCtaLabel}
      />
      <main className="flex-1">
        <LegalPage
          title="Terms of Service"
          lastUpdated="September 14, 2026"
          sections={sections}
        >
          <section id="acceptance-of-terms">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using this website or applying to the AODZN Product Design
              Bootcamp (the &ldquo;Program&rdquo;), you agree to these Terms of
              Service. If you do not agree, please do not use the website or
              apply to the Program.
            </p>
          </section>

          <section id="the-program">
            <h2>2. The Program</h2>
            <p>
              AODZN offers a cohort-based, hands-on product design bootcamp.
              Program details, including curriculum, schedule, and pricing, are
              described on our website and may be updated from time to time.
            </p>
          </section>

          <section id="registration-and-eligibility">
            <h2>3. Registration and Eligibility</h2>
            <p>
              To apply, you must provide accurate and current information,
              including your name and email address. Submitting an application
              does not guarantee a place in the Program; acceptance is at our
              discretion.
            </p>
          </section>

          <section id="payment">
            <h2>4. Payment</h2>
            <p>
              Where applicable, pricing and instalment terms for the Program are
              set out on our website at the time of registration. Payments are
              due as described during checkout.
            </p>
          </section>

          <section id="communications">
            <h2>5. Communications</h2>
            <p>
              By applying to the Program, you agree that we may email you about
              your application and the Program. Your email is used only for
              these bootcamp-related communications, as described in our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </section>

          <section id="intellectual-property">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and
              curriculum materials, is the property of AODZN or its licensors
              and may not be reproduced or distributed without permission.
            </p>
          </section>

          <section id="disclaimer">
            <h2>7. Disclaimer</h2>
            <p>
              The website and Program are provided &ldquo;as is&rdquo;. While we
              aim to keep information accurate and up to date, we make no
              warranties about the completeness or accuracy of the content on
              this site.
            </p>
          </section>

          <section id="limitation-of-liability">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, AODZN is not liable for
              any indirect or consequential loss arising from your use of this
              website or participation in the Program.
            </p>
          </section>

          <section id="changes-to-these-terms">
            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of the website or participation in the Program after changes
              are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section id="contact-us">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>
        </LegalPage>
      </main>
      <Footer
        navLinks={siteSettings.navLinks}
        legalLinks={siteSettings.footerLegalLinks}
        copyrightName={siteSettings.footerCopyrightName}
      />
    </div>
  );
}
