import Image from "next/image";
import Script from "next/script";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  profileUrl?: string;
  paragraphs: string[];
};

type MeetOurTeamProps = {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  organizationName?: string;
};

export default function MeetOurTeam({
  title = "Meet Our Team",
  subtitle = "Get to know the people behind our work. Each team member brings a unique perspective, deep expertise, and a strong commitment to delivering meaningful results.",
  members,
  organizationName = "Your Company",
}: MeetOurTeamProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationName,
    employee: members.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      url: member.profileUrl || undefined,
      description: member.paragraphs.join(" "),
    })),
  };

  return (
    <>
      <Script
        id="team-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <section
        aria-labelledby="meet-our-team-title"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#F47B20] px-4 py-1 text-sm font-medium text-gray-600">
              Our People
            </span>

            <h2
              id="meet-our-team-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="mt-14 space-y-8 md:mt-16 lg:space-y-10">
            {members.map((member, index) => (
              <article
                key={member.id}
                className="relative overflow-hidden rounded-[10px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 lg:p-10"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(255,255,255,1))]" />

                <div className="relative flex flex-col gap-8 md:flex-row md:items-start lg:gap-12">
                  <div className="flex w-full shrink-0 justify-center md:w-[220px] md:justify-start">
                    <div className="flex flex-col items-center text-center md:items-center">
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md sm:h-44 sm:w-44">
                        <Image
                          src={member.image}
                          alt={member.imageAlt}
                          fill
                          priority={index < 2}
                          sizes="176px"
                          className="object-cover object-center"
                          itemProp="image"
                        />
                      </div>

                      <div className="mt-4 max-w-[220px]">
                        <h3
                          className="text-lg font-semibold text-gray-900"
                          itemProp="name"
                        >
                          {member.name}
                        </h3>
                        <p
                          className="mt-1 text-sm font-medium text-sky-700"
                          itemProp="jobTitle"
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                      Team Member
                    </p>

                    <div className="mt-5 space-y-4 text-base leading-8 text-gray-700 text-justify">
                      {member.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          itemProp={
                            paragraphIndex === 0 ? "description" : undefined
                          }
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {member.profileUrl ? (
                      <div className="mt-6">
                        <a
                          href={member.profileUrl}
                          className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          aria-label={`Learn more about ${member.name}`}
                          itemProp="url"
                        >
                          View Profile
                        </a>
                      </div>
                    ) : null}
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