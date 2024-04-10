"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import ImageHelper from "./imageHelper";
import { data } from "@/utils/data";
import { SlideRight } from "./slide";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const { navigation } = data;
  const pathname = usePathname();
  const navi = navigation.map(({ name, href, src }, index) => (
    <Link href={href} key={index}>
      <div
        className={`${
          pathname === href && "border-0 border-b-4 border-blue-300"
        } flex items-center transition-all p-2 gap-1 hover:text-slate-100 icons hover:bg-black dark:hover:bg-white dark:hover:text-black`}
      >
        <li>{name}</li>
        <span>
          <ImageHelper src={src} alt={name.concat("-logo")} />
        </span>
      </div>
    </Link>
  ));

  return (
    <main className="dark:bg-black dark:text-white">
      <div className="flex justify-between items-center md:px-24 py-5 text-xs">
        {/* logo */}
        <section>
          <Link href={"/"}>
            <div className="font-bold max-md:ml-12 transition-all px-3 py-2 uppercase icons">
              <span className="tracking-wider font-serif text-xl">Nour</span>
            </div>
          </Link>
        </section>

        {/* navigation section */}
        <nav>
          <ul className="hidden md:flex items-center gap-x-5">{navi}</ul>
        </nav>

        {/* toggle icon */}
        <div
          className="md:hidden flex items-center hover:border-blue-300 px-3 py-2 hover:border rounded-md"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <CloseOutlined /> : <MenuOutlined />}
        </div>
      </div>

      {/* mobile screen */}
      <SlideRight>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } md:hidden transition-all w-[calc(100%-50px)] mx-auto backdrop-blur-md z-50 rounded mb-2 justify-center`}
        >
          <div className="w-full h-full py-5 px-2">
            <ul onClick={() => setToggle(!toggle)}>{navi}</ul>
          </div>
        </div>
      </SlideRight>
    </main>
  );
}
