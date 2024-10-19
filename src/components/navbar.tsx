"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <main className="dark:bg-black dark:text-white bg-white z-50">
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
          <ul className="hidden md:flex items-center gap-x-5">
            <Navigation pathname={pathname} />
          </ul>
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
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } md:hidden transition-all mx-auto ml-12 backdrop-blur-md z-50 rounded justify-center`}
      >
        <div className="w-full h-full py-5 px-2">
          <ul onClick={() => setToggle(!toggle)}>
            <Navigation pathname={pathname} />
          </ul>
        </div>
      </div>
    </main>
  );
}
