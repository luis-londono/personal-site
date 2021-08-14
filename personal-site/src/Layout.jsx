import React from "react";
import Link from "./Link";

const Layout = () => {
  return (
    <>
      <div id="intro" />
      <div id="nav">
        <nav>
          <Link href="/">Home</Link> |<Link href="/resume">Resume</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Layout;
