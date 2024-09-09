"use client";

import { navLinks } from "@/data/navLinks";
import Link from "next/link";

const HeaderNavlinks = ({ className }) => {
  return (
    <nav className={className}>
      {navLinks.map((el) => {
        return (
          <Link key={el.title} href={el.href ? el.href : ""}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNavlinks;
