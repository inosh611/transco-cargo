import MeetOurTeam, {
  type TeamMember,
} from "@/components/sections/MeetOurTeam";
import { createMetadata } from "@/lib/seo";
import WorkTogether from "@/components/sections/WorkTogether";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Meet Our Team | TranscoCargo",
  description:
    "Meet the experienced team behind TranscoCargo. Our logistics experts specialize in air freight, sea freight, road transport, warehousing, and global cargo solutions, ensuring reliable and efficient service worldwide.",
  path: "/management-team",
  keywords: [
    "TranscoCargo team",
    "logistics team",
    "freight experts",
    "shipping professionals",
    "cargo specialists",
    "logistics company staff",
    "transport management team",
    "global logistics experts",
  ],
});

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Mohan. A. J. Perera",
    role: "Chairman – Non-Executive, Non-Independent Director",
    image: "/images/team/mohan-perera.webp",
    imageAlt: "Mr. Mohan. A. J. Perera",
    profileUrl: "/team/ava-thompson",
    paragraphs: [
      "With four decades of experience in various fields of transport, freight forwarding and logistics, Mohan is a well-seasoned Business Executive.",
      "Mohan began his career with the Aitken Spence Group that was to take him to the top. When he left the Aitken Spence Group on March 2009 to become the CEO of a global shipping company in Australia, he was the Vice President/ COO of Aitken Spence Cargo (Pvt) Ltd, and Country General Manager for TNT Express Worldwide, Sri Lanka and Maldives.",
      "In April 2009, he assumed duties as the CEO of Transco International (Aust) Pty Ltd, a premier logistics services provider based in Melbourne, Australia. As the Director/CEO, he provides direction and leadership towards the achievement of the organisation’s philosophy, mission, strategy, and its annual goals and objectives.",
      "His wealth of experience in the global logistics industry provides TCL with necessary direction and guidance in developing the business within a short period of time from incorporation. Mohan’s role as the Chairman of the Company is a key strength in achieving the vision of becoming a leading player in the industry.",
      "Mohan is a Member of the Chartered Institute of Marketing (CIM-UK) and of the Chartered Institute of Logistics and Transport, UK, and is an Associate Fellow of the Australian Institute of Management",
    ],
  },
  {
    id: "2",
    name: "Dr. W. M. M. Charitha Mario Perera",
    role: "Joint Managing Director – Executive, Non-Independent Director",
    image: "/images/team/mario-perera.webp",
    imageAlt: "Dr. W. M. M. Charitha Mario Perera",
    profileUrl: "/team/ethan-carter",
    paragraphs: [
      "Charitha, is a skillful entrepreneur who has thrived in logistics industry from a young age. He joined the Transco Cargo group in Australia at the age of 19, and rapidly rose through the ranks to General Manager. He is specialized in many aspects of logistics related functions with a sound knowledge and understanding on global operations. His sound marketing and sales strategies together with customer handling capabilities have resulted in developing a solid client base for not only Transco Cargo but also amongst it’s other subsidiary & associate companies.",
      "Charitha was instrumental in founding TCL in 2021 with the view to offer world class logistics services in Sri Lanka. Since then, Charitha has dedicated his time and efforts to develop the business in Sri Lanka together with a team of professionals and his wealth of experience in global markets is already yielding dividends. At present he holds several directorships in companies operating in the fields of Logistics, Travel & Tourism, Airline Ticketing, Digital Marketing, Education, Real Estate.",
      "He holds a Doctorate in Business Administration (DBA) specializing in Marketing from LIGS University-USA and Master of Business Administration (MBA) specializing in Finance from Australian Institute of Business. In addition, he holds a Diploma of Business from Edith Cowan University and Certificate in Management Accounting from The Chartered Institute of Management Accountants.",
    ],
  },
  {
    id: "3",
    name: "Mr. M. Shanaka Iroshan Dias",
    role: "Joint Managing Director – Executive, Non-Independent Director",
    image: "/images/team/iroshan.webp",
    imageAlt: "Mr. M. Shanaka Iroshan Dias",
    profileUrl: "/team/sophia-nguyen",
    paragraphs: [
      "Shanaka is a well experienced individual in the logistics industry with a track record of over 12 years holding different leading positions in logistics companies in Sri Lanka.",
      "He has performed at multiple levels in business development within the industry at Eagle Logistics Colombo (Pvt) Limited and United Logistics Colombo (Pvt) Limited. During the tenure, he played a pivotal role in leading these organizations to its pinnacle. He also served as a Director at Radiant Logistics Colombo (Pvt) Limited for over 3 years.",
      "He excelled in developing business through global networks as well as local cooperate clientele which has been a key factor for TCL’s success.",
    ],
  },
  {
    id: "4",
    name: "Mr. M. Z. M. Azreen",
    role: "Non-Executive Independent Director",
    image: "/images/team/azreen.webp",
    imageAlt: "Mr. M. Z. M. Azreen",
    profileUrl: "/team/sophia-nguyen",
    paragraphs: [
      "Azreen possesses over 30 years of extensive experience in the fields of Banking, Investment and Accounting in leading multinational organizations. Starting his career in Audit & Assurance services at KPMG Sri Lanka and moved to Ernst & Young Bahrain back in 1996, Azreen then moved to financial services sector.",
      "He has held several positions at Kuwait Finance House (KFH), a pioneer of Islamic and Sharia compliant banking started in Kuwait. He has held positions of Head of Investments and Head of FI Credit during his tenure. He has also served as a non-independent director at KFH Asset Management, KFH Labuan, KFH Ijarah House which are group companies of KFH. He was also a non-executive director at Kuwait Finance House (Malaysia) and was a member of Board sub-committees. Azreen was an Independent Director of Spilburg Holdings (Pvt) Ltd.",
      "He is currently an Independent Director of Kuwait Finance House (Malaysia) and acts as the Chairman of the Board Audit Committee and Nomination and Remuneration Committee as well as a Member of Board Risk Management and Credit Committees.",
      "Azreen is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka, Fellow Member of the Institute of Certified Management Accountants, Associate (ICMA) of Sri Lanka, Member of the Chartered Institute of Management Accountants (UK) and a Chartered Risk Analyst awarded by the American Academy of Financial Management.",
    ],
  },
  {
    id: "5",
    name: "Mrs. Sweena Chang",
    role: "Non-Executive Independent Director",
    image: "/images/team/chang.webp",
    imageAlt: "Mrs. Sweena Chang",
    profileUrl: "/team/sophia-nguyen",
    paragraphs: [
      "Sweena is a well experienced personality in the HR and Legal Fields with over 28 years of working experience in a wide spectrum of HR and Legal functions. To complement her experience working in corporate management, Sweena is also accomplished as a HR and Legal consultant for both local and foreign clients.",
      "Sweena has served at Aitken Spence PLC for 18 years handling Legal/Personnel Management – HR functions. She was the Head of the Legal division in the capacity of General Manager for 9 years. She has handled all HR functions including training programs, dispute resolution, dealing with trade unions, labour department related activities etc. From a legal aspect, Sweena was involved in drafting/reviewing contracts and corporate documents as well as court work and appearing for cases in courts. From 2012 onwards, Sweena has decided to pursue her own career as a Legal/HR Consultant and a Company Secretary with a wide client base of Companies including foreign Companies, NGOs and Banks.",
      "Sweena is an Attorney-at-Law and holds a Master of Business Administration in HRM from the Faculty of Management & Finance – University of Colombo. She has also followed a programme on Organizational Growth and Strategic HRM at the Indian Institute of Management-Bangalore.",
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/team-management.webp"
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
              Meet Our Team
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Our Team of Logistics & Freight Experts
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Get to know the TranscoCargo team — a group of logistics experts
              specializing in air freight, sea freight, road transport,
              warehousing, and global cargo solutions, committed to delivering
              excellence at every stage of the supply chain.
            </p>
          </div>
        </div>
      </section>
      <MeetOurTeam members={teamMembers} organizationName="TranscoCargo" />;
      {/* CTA */}
      <WorkTogether />
    </>
  );
}
