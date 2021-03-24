import React, {Component} from "react";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        {{/* PRELOADER */}}
        <div id="preloader">
            <span className="preloader-dot"></span>
        </div>
        {/* END / PRELOADER */}

        <div id="page-wrap" className="bg-white-2">
          {/* HEADER */}
          <header id="header" className="header-v3 clearfix">

              {/* HEADER TOP */}
              <div className="header_top">
                  <div className="container">
                      <div className="header_left float-left">
                          <span><i className="lotus-icon-cloud"></i> 18 °C</span>
                          <span><i className="lotus-icon-location"></i> 225 Beach Street, Australian</span>
                          <span><i className="lotus-icon-phone"></i> 1-548-854-8898</span>
                      </div>

                      <div className="header_right float-right">
                          <span className="socials">
                              <a href="!#"><i className="fa fa-facebook"></i></a>
                              <a href="!#"><i className="fa fa-twitter"></i></a>
                              <a href="!#"><i className="fa fa-instagram"></i></a>
                              <a href="!#"><i className="fa fa-pinterest"></i></a>
                              <a href="!#"><i className="fa fa-tumblr"></i></a>
                          </span>
                      </div>

                      {/* HEADER LOGO */}
                      <a className="logo-top img-responsive" href="#">
                        <img src="images/logo-header.png" alt="" />
                      </a>
                      {/* END / HEADER LOGO */}

                  </div>
              </div>
              {/* END / HEADER TOP */}

              {/* HEADER LOGO & MENU */}
              <div className="header_content" id="header_content">

                  <div className="container">

                      {/* HEADER LOGO */}
                      <div className="header_logo">
                          <a href="#"><img src="images/logo-header.png" alt="" /></a>
                      </div>
                      {/* END / HEADER LOGO */}
                      {/* HEADER MENU */}
                      <nav className="header_menu">
                          <ul className="menu">
                              <li className="current-menu-item">
                                  <a href="index.html">Home <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="index.html">Home 1</a></li>
                                      <li><a href="index-2.html">Home 2</a></li>
                                      <li><a href="index-3.html">Home 3</a></li>
                                      <li className="current-menu-item"><a href="index-4.html">Home 4</a></li>
                                  </ul>
                              </li>
                              <li><a href="about.html">About</a></li>

                              <li>
                                  <a href="#">Room <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="room-1.html">Room 1</a></li>
                                      <li><a href="room-2.html">Room 2</a></li>
                                      <li><a href="room-3.html">Room 3</a></li>
                                      <li><a href="room-4.html">Room 4</a></li>
                                      <li><a href="room-5.html">Room 5</a></li>
                                      <li><a href="room-6.html">Room 6</a></li>
                                      <li><a href="room-detail.html">Room Detail</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Restaurant <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="restaurants-1.html">Restaurant 1</a></li>
                                      <li><a href="restaurants-2.html">Restaurant 2</a></li>
                                      <li><a href="restaurants-3.html">Restaurant 3</a></li>
                                      <li><a href="restaurants-4.html">Restaurant 4</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Reservation <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="reservation-step-1.html">Reservation Step 1</a></li>
                                      <li><a href="reservation-step-2.html">Reservation Step 2</a></li>
                                      <li><a href="reservation-step-3.html">Reservation Step 3</a></li>
                                      <li><a href="reservation-step-4.html">Reservation Step 4</a></li>
                                      <li><a href="reservation-step-5.html">Reservation Step 5</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Page <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li>
                                          <a href="#">Guest Book <span className="fa fa-caret-right"></span></a>
                                          <ul className="sub-menu">
                                              <li><a href="guest-book.html">Guest Book 1</a></li>
                                              <li><a href="guest-book-2.html">Guest Book 2</a></li>
                                          </ul>
                                      </li>

                                      <li>
                                          <a href="#">Event <span className="fa fa-caret-right"></span></a>
                                          <ul className="sub-menu">
                                              <li><a href="events.html">Events</a></li>
                                              <li><a href="events-fullwidth.html">Events Fullwidth</a></li>
                                              <li><a href="events-detail.html">Events Detail</a></li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="attractions.html">Attractions</a>
                                      </li>
                                      <li>
                                          <a href="#">Term Condition <span className="fa fa-caret-right"></span></a>
                                          <ul className="sub-menu">
                                              <li><a href="term-condition.html">Term Condition 1</a></li>
                                              <li><a href="term-condition-2.html">Term Condition 2</a></li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="">Activiti <span className="fa fa-caret-down"></span></a>
                                          <ul className="sub-menu">
                                              <li><a href="activiti.html">Activiti</a></li>
                                              <li><a href="activiti-detail.html">Activiti Detail</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="check-out.html">Check Out</a></li>
                                      <li><a href="shortcode.html">ShortCode</a></li>
                                      <li><a href="page-404.html">404 Page</a></li>
                                      <li><a href="comingsoon.html">Comming Soon</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Gallery <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="gallery.html">Gallery Style 1</a></li>
                                      <li><a href="gallery-2.html">Gallery Style 2</a></li>
                                      <li><a href="gallery-3.html">Gallery Style 3</a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#">Blog <span className="fa fa-caret-down"></span></a>
                                  <ul className="sub-menu">
                                      <li><a href="blog.html">Blog</a></li>
                                      <li><a href="blog-detail.html">Blog Detail</a></li>
                                      <li><a href="blog-detail-fullwidth.html">Blog Detail Fullwidth</a></li>
                                  </ul>
                              </li>
                              <li><a href="contact.html">Contact</a></li>
                          </ul>
                      </nav>
                      {/* END / HEADER MENU */}

                      {/* MENU BAR */}
                      <span className="menu-bars">
                              <span></span>
                          </span>
                      {/* END / MENU BAR */}

                  </div>
              </div>
              {/* END / HEADER LOGO & MENU */}

          </header>
          {/* END / HEADER */}
          {/* BANNER SLIDER */}
          <section className="section-slider slider-style-2 clearfix">
              <h1 className="element-invisible">Slider</h1>
              <div id="slider-revolution">
                  <ul>
                      <li data-transition="fade">
                          <img src="images/home-3/slider-2.png" data-bgposition="left center" data-duration="14000"
                              data-bgpositionend="right center" alt="" />

                          <div className="tp-caption sft fadeout" data-x="center" data-y="195" data-speed="700" data-start="1300"
                              data-easing="easeOutBack">
                              <img src="images/icon-slider-1.png" alt="" />
                          </div>

                          <div className="tp-caption sft fadeout slider-caption-sub slider-caption-sub-3" data-x="center"
                              data-y="220" data-speed="700" data-start="1500" data-easing="easeOutBack">
                              EACH HOTEL IS
                          </div>

                          <div className="tp-caption sfb fadeout slider-caption slider-caption-3" data-x="center" data-y="260"
                              data-speed="700" data-easing="easeOutBack" data-start="2000">
                              UNIQUE 60%
                          </div>

                          <div className="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3" data-x="center"
                              data-y="365" data-easing="easeOutBack" data-speed="700" data-start="2200">JUST LIKE YOU
                          </div>

                          <div className="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3" data-x="center"
                              data-y="395" data-easing="easeOutBack" data-speed="700" data-start="2400">
                                <img src="images/icon-slider-2.png" alt="" />
                          </div>

                      </li>

                      <li data-transition="fade">
                          <img src="images/home-3/slider-1.png" data-bgposition="left center" data-duration="14000"
                              data-bgpositionend="right center" alt="" />

                          <div className="tp-caption sft fadeout slider-caption-sub slider-caption-1" data-x="center" data-y="100"
                              data-speed="700" data-start="1500" data-easing="easeOutBack">
                              <img src="images/slider/hom1-slide1.png" alt="icons" />
                          </div>

                          <div className="tp-caption sft fadeout slider-caption-sub slider-caption-1" data-x="center" data-y="240"
                              data-speed="700" data-start="1500" data-easing="easeOutBack">
                              WELCOME TO
                          </div>

                          <div className="tp-caption sfb fadeout slider-caption slider-caption-sub-1" data-x="center" data-y="280"
                              data-speed="700" data-easing="easeOutBack" data-start="2000">THE LOTUS HOTEL
                          </div>

                          <a href="#" className="tp-caption sfb fadeout awe-btn awe-btn-12 awe-btn-slider" data-x="center"
                            data-y="380" data-easing="easeOutBack" data-speed="700" data-start="2200">VIEW NOW</a>
                      </li>

                  </ul>
              </div>

          </section>
          {/* END / BANNER SLIDER */}
          {/* CHECK AVAILABILITY */}
          <section className="section-check-availability availability-style-2 clearfix">
              <div className="container">
                  <div className="check-availability">
                      <div className="ot-heading">
                          <h2 className="mb40">CHECK availability</h2>
                      </div>
                      <form id="ajax-form-search-room" className="mt40 mb50" action="search_step_2.php" method="post">
                          <div className="availability-form mb40">
                              <input type="text" name="arrive" className="awe-calendar from" placeholder="Arrival Date" />
                              <input type="text" name="departure" className="awe-calendar to" placeholder="Departure Date" />

                              <select className="awe-select" name="adults">
                                  <option>Adults</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                              </select>
                              <select className="awe-select" name="children">
                                  <option>Children</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                              </select>
                          </div>
                          <div className="vailability-submit">
                              <button className="awe-btn awe-btn-13 pr30 pl30 f16 bold font-hind">Check Availability</button>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
          {/* END / CHECK AVAILABILITY */}

          {/* ACCOMMODATIONS */}

          <section className="ot-accomd-modations">
              <div className="container">
                  <div className="content">
                      <div className="row">
                          <div className="col-xs-12 col-lg-6 col-lg-offset-3">
                              <div className="ot-heading pt80 pb30 text-center row-20">
                                  <h2 className="mb15">ACCOMMODATIONS</h2>
                                  <p className="sub">
                                      It is a long established fact that a reader will be distracted by the readable
                                      content of a page
                                      when looking at its layout
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-xs-12">
                              <div className="ot-accomd-modations-content owl-single"
                                  data-single_item="false"
                                  data-desktop="1"
                                  data-small_desktop="1"
                                  data-tablet="2"
                                  data-mobile="1"
                                  data-nav="false"
                                  data-pagination="false">
                                  <div className="row">
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Luxury Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Double Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Family Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Deluxe Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Single Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Presidential Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Deluxe Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Single Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Presidential Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Luxury Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Double Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                          <div className="item room-item-style-2 mb30 text-center">
                                              <div className="outer">
                                                  <a href="#"><img className="img-responsive img-full"
                                                                  src="images/home-3/room/room-2-1.png" alt="" /></a>
                                                  <div className="bgr pt20 pb20">
                                                      <div className="details">
                                                          <h2 className="title upper"><a href="!#">Family Room</a></h2>
                                                          <p className="price upper font-monserat f16 bold mb0 c-main">
                                                              Start from $120 per day
                                                          </p>
                                                          <div className="info">
                                                              <p className="mt20 mb40">Lorem Ipsum is simply dummy text of the
                                                                  printing and typesetting industry. Lorem Ipsum has been the
                                                                  industry's</p>
                                                              <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                                                                href="!#">Click here</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
          {/* END / ACCOMMODATIONS */}


          {/* ABOUT */}
          <section className="section-home-about style-2 bg-white">
              <div className="container">
                  <div className="home-about">
                      <div className="row v-align">
                          <div className="col-xs-12 col-sm-6">
                              <div className="img-hover-box">
                                  <div className="img">
                                      <a href="#"><img className="img-responsive img-full" src="images/home-3/about.png" alt="" /></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                              <div className="ot-heading row-20 text-center">
                                  <h2 className="mb30">ABOUT LOTUS HOTEL</h2>
                                  <p className="mb30 font-hind f20 f600 pl30 pr30 lh27">Brent Conrad talks with everyone from, frequent
                                      travelers to the busy
                                      family that can only get away for vacation every couple of years.</p>
                              </div>
                              <div className="text-center">
                                  <p className="f14">
                                      The cards are being handed out by quarantine officials at Chicago, O’Hare International
                                      Air-port;
                                      Los Angeles; old York City, JFK International Airport; Newark; & San Francisco.
                                      These airports are the only U.S. airports receiving direct flights from Hong Kong.
                                      No U.S. airports receive direct flights Hanoi or the Guangdong Province...
                                  </p>
                                  <a href="#" className="awe-btn awe-btn-default btn-medium font-hind bold f12 mt30">READ MORE</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* END / ABOUT */}

          {/* OUR BEST */}
          <section className="section-our-best our-best-style-2 mt100 pt0 pb0 bg-white">
              <div className="container">
                  <div className="our-best">
                      <div className="row v-align">
                          <div className="col-xs-12 col-sm-6 col-sm-push-6">
                              <div className="img-hover-box">
                                  <div className="img mt0">
                                      <img className="img-responsive img-full" src="images/home-3/about.png" alt="" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-sm-pull-6 ">
                              <div className="ot-heading row-20 text-center">
                                  <h2>Out best</h2>
                                  <p className="sub f16 mb40">One of Catalina Island's best-loved hotels, Hotel Vista Del Mar is
                                      recognized as one of Avalon's leading hotels with gracious island hospitality,
                                      thoughtful amenities and distinctive .</p>
                              </div>
                              <div className="owl-single">
                                  <div className="row">
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Free Wifi</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Car Parking</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Service Room</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Air Conditioner</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Airtel Digital TV</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Luggage</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Free Wifi</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Car Parking</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Service Room</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Air Conditioner</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Airtel Digital TV</span>
                                          </div>
                                      </div>
                                      <div className="col-xs-6 col-sm-4 col-md-4">
                                          <div className="item">
                                              <img className="img-responsive block mb10" src="images/home-3/icon/icon-11.png" alt="icon" />
                                              <span>Luggage</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
          {/* END / OUR BEST */}

          {/* DEALS PACKAGE */}
          <section className="section-deals mt100">
              <div className="container">
                  <div className="content">
                      <div className="row">
                          <div className="col col-xs-12 col-lg-6 col-lg-offset-3">
                              <div className="ot-heading row-20 mb30 text-center">
                                  <h2>Deals & PACKAGE</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row v-align">
                          <div className="col-xs-12 col-sm-6">
                              <div className="img-deals img-hover-box">
                                  <div className="img">
                                      <img src="images/home-3/deals/deals-5.png" alt="" className="img-responsive img-full" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                              <div className="item item-deal">
                                  <div className="img">
                                      <img className="img-full" src="images/home-3/deals/deals-1.png" alt="" />
                                  </div>
                                  <div className="info">
                                      <a className="title bold f26 font-monserat upper" href="!#">Spa salon</a>
                                      <p className="sub font-monserat f12 f-600 upper mt10 mb20">package</p>
                                      <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12" href="!#">Click hear</a>
                                  </div>
                              </div>
                              <div className="item item-deal">
                                  <div className="img">
                                      <img className="img-full" src="images/home-3/deals/deals-1.png" alt="" />
                                  </div>
                                  <div className="info">
                                      <a className="title bold f26 font-monserat upper" href="!#">weeding</a>
                                      <p className="sub font-monserat f12 f-600 upper mt10 mb20">event</p>
                                      <a className="awe-btn awe-btn-12 btn-medium font-hind bold f12" href="!#">Read more</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* END / DEALS PACKAGE */}

          {/* NEWS */}
          <section className="section-news mt70">
              <div className="container">
                  <div className="content">
                      <div className="row">
                          <div className="col-xs-12 col-lg-6 col-lg-offset-3">
                              <div className="ot-heading row-20 mb40 text-center">
                                  <h2>News</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-xs-12 col-sm-4">
                              <div className="item">
                                  <div className="img">
                                      <img className="img-responsive img-full" src="images/home-3/blog/blog-1.png" alt="" />
                                  </div>
                                  <div className="info">
                                      <p className="date f20">
                                          21 December, 2017
                                      </p>
                                      <a className="title font-monserat f20 mb20 block bold upper" href="!#">UPDATE MENU FOOD IN LOTUS
                                          HOTEL</a>
                                      <a className="more block f13" href="!#">[Read more]</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                              <div className="item">
                                  <div className="img">
                                      <img className="img-responsive img-full" src="images/home-3/blog/blog-1.png" alt="" />
                                  </div>
                                  <div className="info">
                                      <p className="date f20">
                                          06 Octorber, 2017
                                      </p>
                                      <a className="title font-monserat f20 mb20 block bold upper" href="!#">WEDDING DAY
                                          JONATHA & JESSICA</a>
                                      <a className="more block f13" href="!#">[Read more]</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xs-12 col-sm-4">
                              <div className="item">
                                  <div className="img">
                                      <img className="img-responsive img-full" src="images/home-3/blog/blog-1.png" alt="" />
                                  </div>
                                  <div className="info">
                                      <p className="date f20">
                                          18 March, 2017
                                      </p>
                                      <a className="title font-monserat f20 mb20 block bold upper" href="!#">Bryce Canyon A Stunning Us
                                          Travel Destination</a>
                                      <a className="more block f13" href="!#">[Read more]</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="text-center">
                          <a href="!#"
                            className="awe-btn btn-medium font-hind bold f12 awe-btn-default mt15 awe-btn-default mt15 f13">View
                              more</a>
                      </div>
                  </div>
              </div>
          </section>
          {/* END / NEWS */}

          {/* MAP */}
          <section className="section-map style-2 clearfix mt100">
              <div className="contact-map">
                  <div id="map" className="awe-parallax" data-styles="silver" data-locations="39.0926986,-94.5747324--39.0912284,-94.5743515"
                      data-center="39.0926986,-94.5747324">
                  </div>

                  <div className="container contact text-center">
                      <div className="contact-main pt40 pb60 bg-white-2">
                          <div className="ot-heading row-20 mb40 text-center">
                              <h2>Contact with us</h2>
                          </div>
                          <div className="row">
                              <div className="col-xs-12 col-sm-4">
                                  <div className="item">
                                      <p className="f20"><i className="lotus-icon-location c-main block f30 mb20"></i> 225 Beach
                                          Street,
                                          Australian</p>
                                      <p className="description font-monserat f12 bold upper">Address</p>
                                  </div>
                              </div>
                              <div className="col-xs-12 col-sm-4">
                                  <div className="item">
                                      <p className="f20"><i className="lotus-icon-phone c-main block f30 mb20"></i> 1-548-854-8898</p>
                                      <p className="description font-monserat f12 bold upper">Phone</p>
                                  </div>
                              </div>
                              <div className="col-xs-12 col-sm-4">
                                  <div className="item">
                                      <p className="f20"><i className="fa fa-envelope-o c-main block f30 mb20"></i> <a href="mailto:hello@thelotushotel.com">hello@thelotushotel.com</a> </p>
                                      <p className="description font-monserat f12 bold upper">Email</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* END / MAP */}

          {/* FOOTER */}
          <footer id="footer" className="footer-style-3 text-center">
              <div className="bgr-footer pt60">
                  <div className="container">
                      <div className="footer_top">
                          <div className="ot-heading row-20 mb40 text-center">
                              <img className="img-responsive img-center mb20" src="images/home-3/footer/mail-footer-1.png" alt="" />
                              <h2>News & Offers</h2>
                              <p className="sub">Enjoy many benefits and receive our promotions and special offers directly</p>
                          </div>
                          <div className="mailchimp mb30">
                              <div className="mailchimp-form">
                                  <form action="#" method="POST">
                                      <input type="text" name="email" placeholder="Enter your email address" className="input-text" />
                                      <button className="awe-btn">SIGN UP</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="copyright">
                      <div className="container">
                          <p className="pull-left inline-block f14">&copy; 2017 Lotus Hotel All rights reserved.</p>
                          <div className="social inline-block">
                              <a className="mr10" href="!#"><i className="fa fa-facebook f16"></i></a>
                              <a className="mr10" href="!#"><i className="fa fa-twitter f16"></i></a>
                              <a className="mr10" href="!#"><i className="fa fa-instagram f16"></i></a>
                              <a className="mr10" href="!#"><i className="fa fa-pinterest f16"></i></a>
                              <a className="mr10" href="!#"><i className="fa fa-tumblr f16"></i></a>
                          </div>
                          <div className="payment pull-right inline-block">
                              <img className="img-responsive" src="images/home-3/footer/card.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          {/* END / FOOTER */}

        </div>
      </div>
    );
  }
}

export default App;
