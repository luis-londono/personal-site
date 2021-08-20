import React from "react";
import Link from "./Link";
import banner from "../src/images/luis_banner.png";

const Layout = () => {
  return (
    <>
      {/* <div id="intro" /> */}
      <img id="banner" src={banner}></img>
      <div id="nav">
        <nav>
          <Link href="/">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </Link>{" "}
          |
          <Link href="/resume">
            <i class="fa fa-file" aria-hidden="true"></i> Resume
          </Link>{" "}
          |
          <Link href="/contact">
            <i class="fa fa-phone" aria-hidden="true"></i> Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Layout;
