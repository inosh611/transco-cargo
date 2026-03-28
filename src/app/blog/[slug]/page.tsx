import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock3, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";

const posts = [
  {
    slug: "how-air-freight-helps-businesses-move-faster",
    title: "How Air Freight Helps Businesses Move Faster",
    excerpt:
      "Discover how air freight supports urgent shipments, reduces delays, and helps businesses improve delivery speed.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Air Freight",
    content: [
      "Air freight is one of the fastest logistics solutions for businesses that need urgent shipment movement. It is especially useful when delivery speed has a direct impact on operations, customer expectations, or supply chain continuity.",
      "Businesses often use air freight for time-sensitive goods, high-value cargo, medical supplies, electronics, and critical replacement items. Compared with slower transport modes, air freight helps reduce transit time significantly.",
      "Another advantage of air freight is reliability. Scheduled air routes and faster handling windows can improve shipment consistency when timing matters most.",
      "However, air freight is not always the best choice for every shipment. Businesses should consider shipment size, urgency, product value, and budget before choosing the service type.",
      "A strong logistics partner can help evaluate when air freight is the right decision and how to combine it with warehousing, inland transport, or other services for better results.",
    ],
  },
  {
    slug: "sea-freight-vs-air-freight",
    title: "Sea Freight vs Air Freight: Which One Is Better?",
    excerpt:
      "Understand the difference between sea freight and air freight so you can choose the right shipping method for your cargo.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Shipping Guide",
    content: [
      "Sea freight and air freight serve different business needs. Choosing the right one depends on urgency, cargo volume, cost expectations, and delivery timelines.",
      "Air freight is best when speed matters. It is suitable for urgent shipments, high-value goods, and businesses that need quicker international movement.",
      "Sea freight is more cost-effective for larger volumes and commercial cargo that does not require immediate delivery. It is often preferred for bulk goods and planned inventory movement.",
      "When comparing both, businesses should think beyond price alone. Delivery deadlines, storage needs, documentation, and handling requirements also play an important role.",
      "In many cases, the best solution may involve a mixed logistics strategy supported by a provider who understands both freight modes well.",
    ],
  },
  {
    slug: "why-warehousing-matters-in-modern-logistics",
    title: "Why Warehousing Matters in Modern Logistics",
    excerpt:
      "Learn how warehousing improves inventory control, order fulfillment, and logistics efficiency for growing businesses.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Warehousing",
    content: [
      "Warehousing is more than storage. In modern logistics, it supports inventory visibility, faster order handling, and smoother cargo flow.",
      "For growing businesses, warehousing helps improve delivery readiness by keeping goods organized and accessible. This reduces delays and improves operational planning.",
      "A good warehousing solution can also support picking, packing, dispatch coordination, and return handling depending on business needs.",
      "Businesses that sell across multiple channels often benefit from warehousing because it helps centralize stock and improve response speed.",
      "Integrated warehousing and freight services create stronger logistics performance and better customer satisfaction over time.",
    ],
  },
  {
    slug: "what-businesses-should-know-before-requesting-a-freight-quote",
    title: "What Businesses Should Know Before Requesting a Freight Quote",
    excerpt:
      "A practical guide to preparing shipment information before requesting a quote from a logistics provider.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Business Tips",
    content: [
      "Before requesting a freight quote, businesses should gather the most important shipment details. This helps the logistics team provide a more accurate and useful estimate.",
      "The key information usually includes origin, destination, cargo type, dimensions, weight, preferred shipping mode, and delivery timeline.",
      "It is also helpful to mention whether the shipment has special handling needs, documentation requirements, or delivery constraints.",
      "When shipment information is incomplete, quotes may be delayed or may not fully reflect operational requirements.",
      "A clear and complete quote request helps both the business and the logistics provider align expectations early in the process.",
    ],
  },
  {
    slug: "best-practices-for-smooth-international-cargo-handling",
    title: "Best Practices for Smooth International Cargo Handling",
    excerpt:
      "Explore practical steps that improve shipment handling, documentation readiness, and delivery consistency.",
    date: "March 2026",
    readTime: "7 min read",
    category: "Cargo Handling",
    content: [
      "Smooth international cargo handling depends on preparation, communication, and process discipline. Delays often happen when shipment data or documentation is incomplete.",
      "Businesses should make sure cargo details are clear, packaging is suitable, and shipment instructions are properly communicated before dispatch.",
      "Documentation accuracy is especially important for cross-border cargo because missing or inconsistent records can slow down movement significantly.",
      "Another best practice is choosing a logistics partner who can coordinate across freight, warehousing, destination handling, and support teams.",
      "Consistency in handling improves not only delivery speed but also cargo safety and customer confidence.",
    ],
  },
  {
    slug: "how-real-time-tracking-improves-customer-confidence",
    title: "How Real-Time Tracking Improves Customer Confidence",
    excerpt:
      "See why shipment visibility and modern tracking tools are important for service quality and customer trust.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Tracking",
    content: [
      "Real-time tracking gives customers better visibility into shipment progress and helps reduce uncertainty during transit.",
      "When clients can see whether cargo is booked, in transit, or near delivery, they gain stronger confidence in the logistics process.",
      "Tracking also improves communication by reducing the need for manual update requests and helping support teams respond more effectively.",
      "For businesses, shipment visibility supports planning, inventory coordination, and customer communication.",
      "Modern logistics providers use tracking not only as a tool for updates but also as a trust-building part of the customer experience.",
    ],
  },
] as const;

type Post = (typeof posts)[number];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found",
      path: `/blog/${slug}`,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "logistics blog", "shipping guide", "cargo insights"],
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex rounded-full bg-[#2F6DB3]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6DB3]">
              {post.category}
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#F47B20]" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} className="text-[#2F6DB3]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <article className="max-w-3xl">
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-8 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Related Articles
              </h2>

              <div className="mt-6 space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F47B20]">
                      {item.category}
                    </div>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-6 text-white shadow-lg">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                Need Logistics Support?
              </div>

              <h3 className="mt-3 text-2xl font-black tracking-tight">
                Talk to Our Team
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Let us help you choose the right freight and logistics solution for your shipment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F47B20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#de6f1d]"
                >
                  Request Quote
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}