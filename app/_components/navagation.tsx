"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="w-full fixed md:static bg-[rgb(221,206,184)]"
      >
        <NavbarContent className="lg:hidden pr-1" justify="center">
          <NavbarBrand>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="Lingo Academy Logo"
                  className="w-10 h-10"
                />
                <h1 className="text-xl font-bold ml-2">
                  <span className="text-[rgb(78,101,122)] font-bold">
                    Lingo
                  </span>{" "}
                  Academy
                </h1>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="lg:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarBrand>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="Lingo Academy Logo"
                  className="w-10 h-10"
                />
                <h1 className="text-xl font-bold ml-2">
                  <span className="text-[rgb(78,101,122)] font-bold">
                    Lingo
                  </span>
                  Academy
                </h1>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link href="/about_us" className="text-lg">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/courses" className="text-lg">
              Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/#bookings" className="text-lg">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/about_us" className="text-lg">
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/courses" className="text-lg">
              Courses
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/#bookings" className="text-lg">
              Contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </nav>
  );
}
