"use client"
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
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { ChevronDown } from "lucide-react";

export default function Navagation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="w-full fixed md:static bg-[rgb(221,206,184)]">
      <NavbarContent className="lg:hidden pr-1" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="icon" className="w-10 h-10" />
          <h1 className="text-xl font-bold ml-2">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={logo} alt="icon" className="w-10 h-10" />
          <h1 className="text-xl font-bold">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </NavbarBrand>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
              id="online"
                radius="sm"
                disableRipple
                variant="light"
                endContent={(<ChevronDown fill="currentColor" size={16}/>)}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                <span>Online</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Online options"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="english_courses"
              description="Courses for English online"
            >
              English Courses
            </DropdownItem>
            <DropdownItem
              key="business_english"
              description="Courses for learning English for business"
            >
              Business English
            </DropdownItem>
            <DropdownItem
              key="TOEIC_preparation"
              description="Courses for TOEIC preparation"
            >
              TOEIC preparation
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
              id="mhSchool"
                radius="sm"
                disableRipple
                variant="light"
                endContent={(<ChevronDown fill="currentColor" size={16}/>)}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                <span>Middle & High School Students</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="middle-high_students"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="course_overview"
              description="English for students in middle or high school"
            >
              Course Overview
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation for middle or high school students"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
              id="adults"
                radius="sm"
                disableRipple
                variant="light"
                endContent={(<ChevronDown fill="currentColor" size={16}/>)}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                <span>Adults & University Students</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="middle-high_students"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="course_overview"
              description="English for students in university or adults"
            >
              Course Overview
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation for students in university or adults"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
              id="corporate"
                radius="sm"
                disableRipple
                variant="light"
                endContent={(<ChevronDown fill="currentColor" size={16}/>)}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                <span>Corporate Institution</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="corprate_institution"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="corporate_training"
              description="Courses for business English in corporate settings"
            >
              Corporate Training
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      {/* Mobile menu */}
      <NavbarMenu>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button radius="sm" variant="light" endContent={(<ChevronDown fill="currentColor" size={16}/>)}>
                Online
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="online-options"
            className="w-[345px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="english_courses"
              description="Courses for English online"
            >
              English Courses
            </DropdownItem>
            <DropdownItem
              key="business_english"
              description="Courses for learning English for business"
            >
              Business English
            </DropdownItem>
            <DropdownItem
              key="TOEIC_preparation"
              description="Courses for TOEIC preparation"
            >
              TOEIC preparation
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button radius="lg" variant="light" endContent={(<ChevronDown fill="currentColor" size={16}/>)}>
                Middle & High School Students
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="middle_high-school-students"
            className="w-[345px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="course_overview"
              description="English for students in university or adults"
            >
              Course Overview
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation for students in university or adults"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button radius="lg" variant="light" endContent={(<ChevronDown fill="currentColor" size={16}/>)}>
                Adults & University Students
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="middle-high_students"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="course_overview"
              description="English for students in university or adults"
            >
              Course Overview
            </DropdownItem>
            <DropdownItem
              key="casual_english"
              description="Courses for casual English conversation for students in university or adults"
            >
              Casual English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarMenuItem>
          <DropdownTrigger>
              <Button radius="lg" variant="light" endContent={(<ChevronDown fill="currentColor" size={16}/>)}>
                Corporate Institutions
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="corprate_institution"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="corporate_training"
              description="Courses for business English in corporate settings"
            >
              Corporate Training
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
    </nav>
  );
}
