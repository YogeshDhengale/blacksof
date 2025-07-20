import React from "react";
import Link from "next/link";
import Image from "next/image";


const footerLinks = [
  {
    title: "APPLICATIONS",
    links: [
      { href: "#", label: "Apparel" },
      { href: "#", label: "Automotive" },
      { href: "#", label: "Filtration" },
      { href: "#", label: "Customised Nonwoven" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { href: "#", label: "Who We Are" },
      { href: "#", label: "Global Competency" },
      { href: "#", label: "Innovation" },
      { href: "#", label: "ESG Impact" },
    ],
  },
  {
    title: "MORE",
    links: [
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Careers" },
    ],
  },
  {
    title: "FOLLOW US",
    links: [
      { href: "#", label: "LinkedIn" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[url(/footer.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-5xl space-y-10 px-5 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <Link href="/" aria-label="go home">
            <Image
              src={"/logo.svg"}
              width={146}
              height={41}
              alt="logo"
              className="h-full"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="font-bold text-base ">{linksGroup.title}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary text-muted-foreground text-sm duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-28 flex items-center justify-between gap-6 flex-wrap rounded-md">
          <p className="text-title text-center flex-1 min-w-max md:flex-0">&copy; 2024. All Rights Reserved.</p>
          <p className="text-center">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
}
