import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the TranscoCargo privacy policy to understand how we handle contact details, shipment information, and website inquiries.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "logistics privacy policy",
    "cargo website privacy",
    "shipping data policy",
  ],
});

const sections = [
  {
    title: "1. Introduction",
    content:
      "This Privacy Policy explains how TranscoCargo may collect, use, and manage information submitted through our website, forms, and service inquiries. It is intended to provide general transparency about how user information is handled.",
  },
  {
    title: "2. Information We May Collect",
    content:
      "We may collect information such as your name, email address, phone number, company details, shipment requirements, and any information you submit through contact or quote request forms.",
  },
  {
    title: "3. How We Use Information",
    content:
      "Information may be used to respond to inquiries, prepare logistics quotes, provide shipment-related support, improve service communication, and maintain operational contact with clients.",
  },
  {
    title: "4. Shipment and Business Information",
    content:
      "For logistics and freight services, shipment-related information may be reviewed to support planning, pricing, routing, handling requirements, and service coordination.",
  },
  {
    title: "5. Website Usage Data",
    content:
      "Like many websites, we may collect general usage information such as page visits, browser type, and device details to improve website performance and user experience.",
  },
  {
    title: "6. Information Sharing",
    content:
      "We do not describe any specific external sharing arrangements on this page. If your business requires formal privacy compliance language, legal review is recommended before production launch.",
  },
  {
    title: "7. Data Security",
    content:
      "We aim to use reasonable operational measures to protect information submitted through our website and support channels. However, businesses should implement proper hosting, form security, and access controls before launch.",
  },
  {
    title: "8. Your Rights",
    content:
      "Depending on your region, you may have rights related to access, correction, or removal of personal information. For formal compliance, your final privacy policy should be reviewed according to applicable legal requirements.",
  },
  {
    title: "9. Contact",
    content:
      "If you have questions about this privacy policy or how your information is handled, please contact us through the contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Legal Information
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              This page outlines general information about how website inquiry
              data and shipment-related information may be handled by
              TranscoCargo.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-[#F47B20]/20 bg-white p-5">
              <p className="text-sm leading-7 text-slate-500">
                <span className="font-semibold text-slate-700">Note:</span> This
                is a website-ready starter privacy policy for design and
                development purposes. Before going live, it should be reviewed
                and updated to match your actual business operations, data
                practices, and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}