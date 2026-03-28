import Link from "next/link";
import { SearchX, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.10),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-xl">
          <SearchX size={36} />
        </div>

        <div className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
          Page Not Found
        </div>

        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
          Sorry, we couldn’t find the page you’re looking for
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The page may have been moved, renamed, or may not exist anymore.
          You can return to the homepage or explore our services.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#2F6DB3] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#275c98]"
          >
            Go to Home
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-[#F47B20] hover:text-[#F47B20]"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}