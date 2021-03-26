import React from "react";

const CheckAvailability = () => {
  return (
    // CHECK AVAILABILITY
    <section className="section-check-availability availability-style-2 clearfix">
      <div className="container">
        <div className="check-availability">
          <div className="ot-heading">
            <h2 className="mb40">CHECK Availability</h2>
          </div>
          <form
            id="ajax-form-search-room"
            className="mt40 mb50"
            action="search_step_2.php"
            method="post"
          >
            <div className="availability-form mb40">
              <input
                type="text"
                name="arrive"
                className="awe-calendar from"
                placeholder="Arrival Date"
              />
              <input
                type="text"
                name="departure"
                className="awe-calendar to"
                placeholder="Departure Date"
              />

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
            <div className="availability-submit">
              <button className="awe-btn awe-btn-13 pr30 pl30 f16 bold font-hind">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    // END / CHECK AVAILABILITY
  );
};

export default CheckAvailability;
