import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <a
          className="footer"
          href="mailto:lulondono08@gmail.com"
          target="_blank"
          without
          rel="noreferrer"
        >
          <i class="fa fa-envelope" style={{ fontSize: "50px" }}></i>
        </a>
        &nbsp;
        <a
          className="footer"
          href="https://github.com/luis-londono"
          target="_blank"
          without
          rel="noreferrer"
        >
          <i class="fa fa-github" style={{ fontSize: "50px" }}></i>
        </a>
        &nbsp;
        <a
          className="footer"
          href="https://www.linkedin.com/in/luis-londono-89614445/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <i class="fa fa-linkedin" style={{ fontSize: "50px" }}></i>
        </a>
        &nbsp;
        <p>Copyright &copy; {year} | Luis Londono</p>
      </footer>
    </>
  );
};

export default Footer;
