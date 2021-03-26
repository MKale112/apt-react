import React from "react";

const HeaderTop = () => {
  return (
    // HEADER TOP
    <div className="header_top">
      <div className="container">
        <div className="header_left float-left">
          <span>
            <i className="lotus-icon-cloud"></i> 18 °C
          </span>
          <span>
            <i className="lotus-icon-location"></i> 225 Beach Street, Australian
          </span>
          <span>
            <i className="lotus-icon-phone"></i> 1-548-854-8898
          </span>
        </div>

        <div className="header_right float-right">
          <span className="socials">
            <a href="!#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="!#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="!#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="!#">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="!#">
              <i className="fa fa-tumblr"></i>
            </a>
          </span>
          <span className="login-register">
            <a href="login.html">Login</a>
            <a href="register.html">register</a>
          </span>
        </div>
        {/* HEADER LOGO */}
        <a className="logo-top img-responsive" href="#">
          <img src="images/logo-header.png" alt="" />
        </a>
        {/* <!-- END / HEADER LOGO --> */}
      </div>
    </div>
  );
  // END / HEADER TOP
};

const HeaderLogo = () => {
  return (
    //  HEADER LOGO
    <div class="header_logo">
      <a href="#">
        <img src="images/logo-header.png" alt="" />
      </a>
    </div>
    // END / HEADER LOGO
  );
};

const HeaderMenu = () => {
  return (
    // HEADER MENU
    <nav class="header_menu">
      <ul class="menu">
        <li class="current-menu-item">
          <a href="index.php">Home</a>
        </li>

        <li>
          <a href="../pages/about.js">Unser Haus</a>
        </li>

        <li>
          <a href="#">
            Die Wohnungen <span class="fa fa-caret-down"></span>
          </a>
          <ul class="sub-menu">
            <li>
              <a href="room-1.html">Apartment 1</a>
            </li>
            <li>
              <a href="room-2.html">Apartment 2</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="gallery-3.html">Impressionen</a>
        </li>

        <li>
          <a href="preise.html">Preise</a>
        </li>

        <li>
          <a href="#">
            Reservation <span class="fa fa-caret-down"></span>
          </a>
          <ul class="sub-menu">
            <li>
              <a href="../reservation-step-1.html">Reservation Step 1</a>
            </li>
            <li>
              <a href="reservation-step-2.html">Reservation Step 2</a>
            </li>
            <li>
              <a href="reservation-step-3.html">Reservation Step 3</a>
            </li>
            <li>
              <a href="reservation-step-4.html">Reservation Step 4</a>
            </li>
            <li>
              <a href="reservation-step-5.html">Reservation Step 5</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="attractions.html">Aktivit&Auml;ten</a>
        </li>

        <li>
          <a href="attractions.html">Standort</a>
        </li>

        <li>
          <a href="contact.html">Kontakt</a>
        </li>
      </ul>
    </nav>
    // END / HEADER MENU
  );
};

const MenuBar = () => {
  return (
    //  MENU BAR
    <span class="menu-bars">
      <span></span>
    </span>
    //  END / MENU BAR
  );
};

const Header = () => {
  return (
    // <!-- HEADER -->
    <header id="header" class="header-v3 clearfix">
      <HeaderTop />

      {/* <!-- HEADER LOGO & MENU --> */}
      <div class="header_content" id="header_content">
        <div class="container">
          <HeaderLogo />
          <HeaderMenu />
          <MenuBar />
        </div>
      </div>
      {/* <!-- END / HEADER LOGO & MENU --> */}
    </header>
    //  END / HEADER
  );
};

export default Header;
