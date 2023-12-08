"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MailIcon, PhoneCall, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const listItem = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [slideNav, setSlideNav] = React.useState(false);

  return (
    <div id="home" className=" w-full fixed bg-white h-[70px] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between ">
        <div className="flex items-center gap-x-12 ">
          <h1 className="text-4xl font-extrabold tracking-wide">sunil.</h1>
          <div className="hidden sm:flex items-center space-x-6">
            <span className="flex items-center gap-x-2 font-medium">
              <PhoneCall className="w-5 h-5" />
              +977 9843356917
            </span>
            <span className="flex items-center gap-x-2 font-medium">
              <MailIcon className="w-5 h-5" />
              btwitsbista@gmail.com
            </span>
          </div>
        </div>

        {!slideNav ? (
          <HamburgerMenuIcon
            className="w-6 h-6 cursor-pointer z-50"
            onClick={() => setSlideNav(true)}
          />
        ) : (
          <XIcon
            className="w-6 h-6 cursor-pointer z-50 text-white"
            onClick={() => setSlideNav(false)}
          />
        )}

        <ul
          className={`absolute top-0 ${
            slideNav ? "right-0" : "-right-full"
          } min-h-screen w-72 flex flex-col items-center justify-center text-white bg-orange-600 -z-50 slide-in-from-right-5 ease-in-out duration-500`}
        >
          {listItem.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="hover:font-semibold"
              >
                <li className="text-2xl py-6">{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
