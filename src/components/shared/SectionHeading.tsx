type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
        {eyebrow}
      </div>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}