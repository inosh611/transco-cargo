import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const latestBlogs = [
  {
    title: "How Air Freight Helps Businesses Move Faster",
    slug: "how-air-freight-helps-businesses-move-faster",
    excerpt:
      "Discover how air freight supports urgent shipments, reduces delays, and helps businesses improve delivery speed.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Air Freight",
  },
  {
    title: "Sea Freight vs Air Freight: Which One Is Better?",
    slug: "sea-freight-vs-air-freight",
    excerpt:
      "Understand the difference between sea freight and air freight so you can choose the right shipping method for your cargo.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Shipping Guide",
  },
  {
    title: "Why Warehousing Matters in Modern Logistics",
    slug: "why-warehousing-matters-in-modern-logistics",
    excerpt:
      "Learn how warehousing improves inventory control, order fulfillment, and logistics efficiency for growing businesses.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Warehousing",
  },
  {
    title: "How Real-Time Tracking Improves Customer Confidence",
    slug: "how-real-time-tracking-improves-customer-confidence",
    excerpt:
      "See why shipment visibility and modern tracking tools are important for service quality and customer trust.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Tracking",
  },
];

export default function LatestBlogsSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Latest Blogs
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Insights, Guides, and Logistics Updates
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our latest articles on freight, shipping, warehousing, and
              smarter logistics planning.
            </p>
          </div>

          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F6DB3] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#275c98]"
            >
              View More Blogs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {latestBlogs.map((post) => (
            <article
              key={post.slug}
              className="group cursor-pointer rounded-[0.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/20 hover:shadow-lg"
            >
              <div className="inline-flex rounded-full bg-[#2F6DB3]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6DB3]">
                {post.category}
              </div>

              <h3 className="mt-5 text-xl font-bold leading-8 tracking-tight text-slate-900">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#F47B20]" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} className="text-[#2F6DB3]" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] transition group-hover:text-[#F47B20]"
              >
                Read Article
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}