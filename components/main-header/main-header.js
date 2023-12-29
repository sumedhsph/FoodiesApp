
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/logo.png";
import headerStyle from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";
 
import NavLink from "./nav-link";
export default function MainHeader() {
   
  return (
    <>
    <MainHeaderBackground/>
    <header className={headerStyle.header}>
      <Link href="/" className={headerStyle.logo}>
        <Image src={logoImg} alt="Logo" priority/>
        NextLevel Food
      </Link>
      <nav className={headerStyle.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
          <NavLink href="/community">Foodie Community</NavLink>
             
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
