import React, { useRef } from "react";
import "./Header.scss";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    const hamburgerIcon = document.getElementsByClassName(
      "header__hamburger-icon"
    )[0];
    mobileMenu.classList.toggle("mobile-menu-active");
    hamburgerIcon.classList.toggle(
      "header__hamburger-icon_close-icon-disply_true"
    );
  };
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="mobile-header">
          <div
            className="header__item header__hamburger-icon header__item_flex-basis_15"
            onClick={toggleMobileMenu}
          ></div>
          <a
            className="header__item header__item_flex-basis_70 header__item_left_padding_30"
            href="/"
          >
            <img className="header__logo" src="/assets/logo-white.svg" alt="header logo"></img>
            <div>Mein Iphone Verkaufen</div>
          </a>
        </div>
        <div className="desktop-header" >
          <a
            className="header__item header__item_flex-basis_15 header__item_left_padding_30"
            href="/"
          >
            <img className="header__logo" src="/assets/logo-white.svg" alt="header logo"></img>
            <div>Mein Iphone Verkaufen</div>
          </a>
          <div className="header__item header__item_justify-content_centered header__item_flex-basis_70">
            <a className="header__menu-link" href="/iphone-ankauf-wert-ebay">
            Iphone Ankauf Wert auf Ebay
            </a>
            {/*<a className="header__menu-link" href="">
              Blog
  </a>*/}
          </div>
        </div>
      </div>
      <div className="mobile-menu">
        <a className="mobile-menu__item" href="/iphone-ankauf-wert-ebay">
          Iphone Ankauf Wert auf Ebay
        </a>
        {/*<a className="mobile-menu__item" href="">
          Blog
</a>*/}
      </div>
    </div>
  );
};

export default Header;
