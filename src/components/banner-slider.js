import React from "react";

const BannerSlider = () => {
  return (
    // BANNER SLIDER
    <section className="section-slider slider-style-2 clearfix">
      <h1 className="element-invisible">Slider</h1>
      <div id="slider-revolution">
        <ul>
          <li data-transition="fade">
            <img
              src="images/home-3/slider-2.png"
              data-bgposition="left center"
              data-duration="14000"
              data-bgpositionend="right center"
              alt=""
            />

            <div
              className="tp-caption sft fadeout"
              data-x="center"
              data-y="195"
              data-speed="700"
              data-start="1300"
              data-easing="easeOutBack"
            >
              <img src="images/icon-slider-1.png" alt="" />
            </div>

            <div
              className="tp-caption sft fadeout slider-caption-sub slider-caption-sub-3"
              data-x="center"
              data-y="220"
              data-speed="700"
              data-start="1500"
              data-easing="easeOutBack"
            >
              EACH HOTEL IS
            </div>

            <div
              className="tp-caption sfb fadeout slider-caption slider-caption-3"
              data-x="center"
              data-y="260"
              data-speed="700"
              data-easing="easeOutBack"
              data-start="2000"
            >
              UNIQUE 100%
            </div>

            <div
              className="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3"
              data-x="center"
              data-y="365"
              data-easing="easeOutBack"
              data-speed="700"
              data-start="2200"
            >
              JUST LIKE YOU
            </div>

            <div
              className="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3"
              data-x="center"
              data-y="395"
              data-easing="easeOutBack"
              data-speed="700"
              data-start="2400"
            >
              <img src="images/icon-slider-2.png" alt="" />
            </div>
          </li>

          <li data-transition="fade">
            <img
              src="images/home-3/slider-1.png"
              data-bgposition="left center"
              data-duration="14000"
              data-bgpositionend="right center"
              alt=""
            />

            <div
              className="tp-caption sft fadeout slider-caption-sub slider-caption-1"
              data-x="center"
              data-y="100"
              data-speed="700"
              data-start="1500"
              data-easing="easeOutBack"
            >
              <img src="images/slider/hom1-slide1.png" alt="icons" />
            </div>

            <div
              className="tp-caption sft fadeout slider-caption-sub slider-caption-1"
              data-x="center"
              data-y="240"
              data-speed="700"
              data-start="1500"
              data-easing="easeOutBack"
            >
              WELCOME TO
            </div>

            <div
              className="tp-caption sfb fadeout slider-caption slider-caption-sub-1"
              data-x="center"
              data-y="280"
              data-speed="700"
              data-easing="easeOutBack"
              data-start="2000"
            >
              THE LOTUS HOTEL
            </div>

            <a
              href="#"
              className="tp-caption sfb fadeout awe-btn awe-btn-12 awe-btn-slider"
              data-x="center"
              data-y="380"
              data-easing="easeOutBack"
              data-speed="700"
              data-start="2200"
            >
              VIEW NOW
            </a>
          </li>
        </ul>
      </div>
    </section>
    // END / BANNER SLIDER
  );
};

export default BannerSlider;
