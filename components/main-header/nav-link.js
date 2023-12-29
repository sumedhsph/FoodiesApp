"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyle from "./nav-link.module.css";
export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${navStyle.link} ${navStyle.active}`
          : `${navStyle.link}`
      }
    >
      {children}
    </Link>
  );
}
