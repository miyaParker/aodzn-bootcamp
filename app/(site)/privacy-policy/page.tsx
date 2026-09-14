import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import Footer from "../../components/Footer";
import LegalPage, { type LegalSection } from "../../components/LegalPage";
import { getSiteSettingsData } from "@/sanity/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — AODZN Product Design Bootcamp",
  description:
    "How AODZN collects, uses, and protects the information you share when you apply to or interact with the bootcamp.",
};

const sections: LegalSection[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  {
    id: "how-we-use-your-information",
    label: "3. How We Use Your Information",
  },
  { id: "no-selling-data", label: "4. We Do Not Sell Your Data" },
  { id: "sharing-of-information", label: "5. Sharing of Information" },
  { id: "data-retention", label: "6. Data Retention" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "changes-to-this-policy", label: "8. Changes to This Policy" },
  { id: "contact-us", label: "9. Contact Us" },
];

export default async function PrivacyPolicyPage() {
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
          title="Privacy Policy"
          lastUpdated="September 14, 2026"
          sections={sections}
        >
          <section id="introduction">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how AODZN (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects
              the information you provide when you visit our website or apply to
              the AODZN Product Design Bootcamp (the &ldquo;Program&rdquo;).
            </p>
          </section>

          <section id="information-we-collect">
            <h2>2. Information We Collect</h2>
            <p>
              When you register your interest or apply to the Program, we
              collect:
            </p>
            <ul>
              <li>Your name and email address</li>
              <li>
                Any other details you choose to share with us on the application
                form
              </li>
            </ul>
          </section>

          <section id="how-we-use-your-information">
            <h2>3. How We Use Your Information</h2>
            <p>
              We use your email address solely to communicate with you about the
              Program &mdash; this includes confirming your application, sharing
              cohort updates and start dates, sending onboarding and program
              information, and responding to questions you send us. We do not
              use your email for any purpose unrelated to the bootcamp.
            </p>
          </section>

          <section id="no-selling-data">
            <h2>4. We Do Not Sell Your Data</h2>
            <p>
              We do not sell, rent, or trade your personal information to any
              third party, under any circumstances.
            </p>
          </section>

          <section id="sharing-of-information">
            <h2>5. Sharing of Information</h2>
            <p>
              We only share your information with service providers who help us
              operate the Program and this website &mdash; for example, the
              tools we use to send email and to store application data. These
              providers are only permitted to use your information to perform
              services on our behalf and are not allowed to use it for their own
              marketing purposes.
            </p>
          </section>

          <section id="data-retention">
            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as needed to communicate
              with you about the Program, or until you ask us to delete it.
            </p>
          </section>

          <section id="your-rights">
            <h2>7. Your Rights</h2>
            <p>
              You can ask us to access, correct, or delete the personal
              information we hold about you, or to unsubscribe from our emails,
              at any time by contacting us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>

          <section id="changes-to-this-policy">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date.
            </p>
          </section>

          <section id="contact-us">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
