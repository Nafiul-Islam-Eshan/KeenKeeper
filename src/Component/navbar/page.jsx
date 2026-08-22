"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarPage = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
      {/* navbar start */}
      <div className="navbar-start">
        {/* Dropdown button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Timeline</Link>
            </li>
            <li>
              <Link href="/">Stats</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          KeenKeeper
        </Link>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className={`btn btn-ghost text-md ${pathname == "/" && " bg-[#244D3F]  text-white font-bold"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`btn btn-ghost text-md ${pathname == "/timeline" && " bg-[#244D3F] text-white font-bold"}`}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/stats"
              className={`btn btn-ghost text-md ${pathname == "/stats" && " bg-[#244D3F]  text-white font-bold"}`}
            >
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;
