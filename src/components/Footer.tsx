import React from "react";
import "./Footer.scss";

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_container">
        Mein iPhone verkaufen ⓒ {currentYear}
        <a className="footer_link" href="/impressum">
          ● Impressum
        </a>
      </div>
    </footer>
  );
}

export default FooterComponent;
