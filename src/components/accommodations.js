import React from "react";

const Announcement = () => {
  return (
    <div class="row">
      <div class="col-xs-12 col-lg-6 col-lg-offset-3">
        <div class="ot-heading pt80 pb30 text-center row-20">
          <h2 class="mb15">ACCOMMODATIONS</h2>
          <p class="sub">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
      </div>
    </div>
  );
};

const AppartmentShowcase = () => {
  return (
    <div class="row">
      <div class="col-xs-12">
        <div
          class="ot-accomd-modations-content owl-single"
          data-single_item="false"
          data-desktop="1"
          data-small_desktop="1"
          data-tablet="2"
          data-mobile="1"
          data-nav="false"
          data-pagination="false"
        >
          <div class="row">
            <Appartment
              name="Luxury Room"
              price={120}
              details="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's"
            />
            <Appartment
              name="Double Room"
              price={100}
              details="Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Appartment = ({ title, price, details }) => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <div class="item room-item-style-2 mb30 text-center">
        <div class="outer">
          <a href="#">
            <img
              class="img-responsive img-full"
              src="images/home-3/room/room-2-1.png"
              alt=""
            />
          </a>
          <div class="bgr pt20 pb20">
            <div class="details">
              <h2 class="title upper">
                <a href="!#">{title}</a>
              </h2>
              <p class="price upper font-monserat f16 bold mb0 c-main">
                Start from {price} per day
              </p>
              <div class="info">
                <p class="mt20 mb40">{details}</p>
                <a
                  class="awe-btn awe-btn-12 btn-medium font-hind bold f12"
                  href="!#"
                >
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accommodations = () => {
  return (
    // ACCOMMODATIONS
    <section class="ot-accomd-modations">
      <div class="container">
        <div class="content">
          <Announcement />
          <AppartmentShowcase />
        </div>
      </div>
    </section>
    // END / ACCOMMODATIONS
  );
};
