import React from "react";
import Link from "./Link";
import banner from "../src/images/luis.png";

const Layout = () => {
  return (
    <>
      {/* <div id="intro" /> */}
      <img id="banner" src={banner}></img>
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
