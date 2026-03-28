import { createMetadata } from "@/lib/seo";
import { HelpCircle, Package, Clock3, ShieldCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about TranscoCargo services, shipment tracking, freight handling, and customer support.",
  path: "/faq",
  keywords: [
    "logistics FAQ",
    "cargo questions",
    "shipment FAQ",
    "freight forwarding FAQ",
    "tracking help",
  ],
});

const faqGroups = [
  {
    title: "General Questions",
    icon: HelpCircle,
    items: [
      {
        question: "What services does TranscoCargo provide?",
        answer:
          "We provide air freight, sea freight, road freight, warehousing, commercial cargo handling, automobile logistics, and shipment support services.",
      },
      {
        question: "Do you handle both business and personal shipments?",
        answer:
          "Yes. Our services are suitable for commercial clients, import/export operations, and personal cargo requirements depending on shipment type and route.",
      },
      {
        question: "Can I request a custom logistics solution?",
        answer:
          "Yes. If your shipment requires special handling, route planning, or tailored service combinations, our team can prepare a custom logistics plan.",
      },
    ],
  },
  {
    title: "Tracking & Delivery",
    icon: Clock3,
    items: [
      {
        question: "How can I track my shipment?",
        answer:
          "You can use the tracking page and enter your shipment reference details. For more support, you can also contact our team directly.",
      },
      {
        question: "How often is tracking information updated?",
        answer:
          "Tracking updates depend on the transport stage and shipment type, but we aim to provide timely and relevant status information throughout the journey.",
      },
      {
        question: "What should I do if my shipment is delayed?",
        answer:
          "If you notice a delay or need clarification, contact our support team with your tracking details and we will assist you with the latest available status.",
      },
    ],
  },
  {
    title: "Cargo & Handling",
    icon: Package,
    items: [
      {
        question: "What types of cargo do you handle?",
        answer:
          "We handle a wide range of cargo including general goods, commercial shipments, warehouse stock, vehicles, and selected specialized freight categories.",
      },
      {
        question: "Can you assist with fragile or high-value cargo?",
        answer:
          "Yes. We can help coordinate handling for fragile or high-value cargo depending on shipment requirements and route conditions.",
      },
      {
        question: "Do you provide warehousing support?",
        answer:
          "Yes. We offer warehousing and storage-related logistics support for businesses that need better inventory flow and shipment coordination.",
      },
    ],
  },
  {
    title: "Support & Security",
    icon: ShieldCheck,
    items: [
      {
        question: "How do I request a quote?",
        answer:
          "You can submit your shipment details through the quote page. Our team will review your requirements and respond with a tailored logistics quote.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can contact us through the contact page, by email, or by phone for shipment assistance, service inquiries, and operational support.",
      },
      {
        question: "Is my shipment handled securely?",
        answer:
          "We focus on professional coordination, operational care, and secure logistics handling practices to support safe cargo movement.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Frequently Asked Questions
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Answers to Common Logistics Questions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore the most common questions about our services, shipment
              tracking, cargo handling, and support process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="grid gap-8">
            {faqGroups.map((group) => {
              const Icon = group.icon;

              return (
                <section
                  key={group.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        {group.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    {group.items.map((item) => (
                      <details
                        key={item.question}
                        className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                          <span>{item.question}</span>
                          <span className="text-[#2F6DB3] transition group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <p className="mt-4 leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}