import React from "react";

function Footer() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
