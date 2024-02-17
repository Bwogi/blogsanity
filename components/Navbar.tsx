import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between">
      <div className="left flex gap-2">
        <Link href="/">
          <span className="text-primary text-2xl">Logo Here</span>
        </Link>
        {/* <Link href="/about">About</Link> */}
        {/* <Link href="/contact">Contact</Link> */}
      </div>
      <h1 className="right flex gap-2 align-center justify-center">
        {/* <Link href="/login">Login</Link> */}
        <ModeToggle />
      </h1>
    </nav>
  );
};

export default Navbar;
