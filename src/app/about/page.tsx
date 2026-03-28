import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn more about TranscoCargo, our mission, logistics expertise, and commitment to reliable freight solutions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-page">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          About TranscoCargo
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          We deliver modern cargo and logistics services with a strong focus on trust, speed, and operational excellence.
        </p>
      </div>
    </section>
  );
}