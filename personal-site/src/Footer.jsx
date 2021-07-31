import React, { useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <footer>
        <a href="mailto:lulondono08@gmail.com">
            <i class="fa fa-envelope" style={{fontSize: '50px'}}></i>
        </a>&nbsp;
        <a href="https://github.com/luis-londono" target="_blank">
            <i class="fa fa-github" style={{fontSize: '50px'}}></i>
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/luis-londono-89614445/" target="_blank">
            <i class="fa fa-linkedin" style={{fontSize: '50px'}}></i>
        </a>&nbsp;
        <p>Copyright &copy; {year} | Luis Londono</p>
    </footer>
    </>
  );
};

export default Footer;