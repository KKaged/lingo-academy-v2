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
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[rgb(221,206,184)]">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="w-full fixed md:static bg-[rgb(221,206,184)]"
      >
        {/* Mobile Brand & Menu Toggle */}
        <NavbarContent className="lg:hidden flex justify-between items-center px-4">
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
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Desktop Navbar Content */}
        <NavbarContent className="hidden lg:flex w-full justify-between px-8 mx-auto max-w-7xl">
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
          <div className="flex gap-8">
            <NavbarItem>
              <Link
                href="/about_us"
                className="text-lg font-medium hover:text-[rgb(78,101,122)] hover:underline hover:underline-offset-2"
              >
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/courses"
                className="text-lg font-medium hover:text-[rgb(78,101,122)] hover:underline hover:underline-offset-2
"
              >
                Courses
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/#bookings"
                className="text-lg font-medium hover:text-[rgb(78,101,122)] hover:underline hover:underline-offset-2"
              >
                Contact
              </Link>
            </NavbarItem>
          </div>
        </NavbarContent>

        {/* Mobile Menu */}
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
