import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Building2 } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with TranscoCargo for logistics services, shipment inquiries, and customer support.",
  path: "/contact",
  keywords: [
    "contact logistics company",
    "cargo support",
    "freight inquiry",
    "shipping contact",
  ],
});

const offices = [
  {
    title: "Campbellfield Office / Warehouse",
    addressLine1: "45 Adrian Road",
    addressLine2: "Campbellfield VIC 3061",
    country: "Australia",
    phone: "+61 3 9357 7228",
    fax: "+61 3 9357 7229",
    email: "info@transcocargo.com.au",
    mapSrc:
      "https://www.google.com/maps?q=45%20Adrian%20Road%2C%20Campbellfield%20VIC%203061%2C%20Australia&z=15&output=embed",
  },
  {
    title: "Dandenong South Office / Warehouse",
    addressLine1: "206-208 Discovery Road",
    addressLine2: "Dandenong South VIC 3175",
    country: "Australia",
    phone: "+61 3 9703 2255",
    fax: "+61 3 9790 0677",
    email: "info@transcocargo.com.au",
    mapSrc:
      "https://www.google.com/maps?q=206-208%20Discovery%20Road%2C%20Dandenong%20South%20VIC%203175%2C%20Australia&z=15&output=embed",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Contact Us
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Let’s Talk About Your Shipment
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Have questions about logistics services, pricing, or shipment
              tracking? Our team is ready to help you with reliable support and
              professional guidance.
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/contact.webp"
            alt="TranscoCargo Team"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
        </div>

        <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
              Contact Us
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Let’s Talk About Your Shipment
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Have questions about logistics services, pricing, or shipment
              tracking? Our team is ready to help you with reliable support and
              professional guidance.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Get in Touch
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Reach out to our logistics team for inquiries, quotes, or support.
              We respond quickly and provide clear guidance for your cargo
              needs.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#2F6DB3] p-3 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <p className="text-slate-600">info@transcocargo.com.au</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#F47B20] p-3 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <p className="text-slate-600">+61 3 9703 2255</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-slate-900 p-3 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Main Location
                  </div>
                  <p className="text-slate-600">Melbourne, Australia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h3>

            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F47B20] px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#de6f1d]"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-500">
              Or request a{" "}
              <Link
                href="/quote"
                className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
              >
                custom quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Our Locations
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Offices & Warehouses
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Visit our operational locations or contact the nearest office for
              shipment support.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[#2F6DB3] p-3 text-white shadow-lg">
                      <Building2 size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                        {office.title}
                      </h3>
                      <div className="mt-4 space-y-1 text-slate-600">
                        <p>{office.addressLine1}</p>
                        <p>{office.addressLine2}</p>
                        <p>{office.country}</p>
                      </div>

                      <div className="mt-5 space-y-1 text-slate-700">
                        <p>
                          <span className="font-semibold">Phone:</span>{" "}
                          {office.phone}
                        </p>
                        <p>
                          <span className="font-semibold">Fax:</span>{" "}
                          {office.fax}
                        </p>
                        <p>
                          <span className="font-semibold">Email:</span>{" "}
                          <a
                            href={`mailto:${office.email}`}
                            className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
                          >
                            {office.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-slate-100 p-4">
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                    <iframe
                      src={office.mapSrc}
                      width="100%"
                      height="360"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title={office.title}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
