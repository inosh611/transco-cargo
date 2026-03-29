import Link from "next/link";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo.webp" // 👈 your logo path
                alt="TranscoCargo Logo"
                width={180}
                height={50}
                className="h-auto w-[160px]"
                priority
              />
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Professional logistics solutions designed to keep your cargo
              moving safely, quickly, and efficiently.
            </p>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Professional logistics solutions designed to keep your cargo moving
            safely, quickly, and efficiently.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-4 space-y-3 text-slate-400">
            {siteConfig.nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Services</h3>
          <div className="mt-4 space-y-3 text-slate-400">
            {siteConfig.footerServices.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-slate-400">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
