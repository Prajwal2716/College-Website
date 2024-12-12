import React from "react";

function Campus() {
  return (
    <section className="campus">
      <h1>Our Campus</h1>
      <p>Providing great Facilities</p>
      <div className="row">
        <div className="campus-col">
          <img src="images/SRMKTR.jpeg" alt="Campus" />
          <div className="layer">
            <h3>Gurugaon</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/SRMRMP.jpeg" alt="RAMAPURAM Campus" />
          <div className="layer">
            <h3>Chandigarh</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/SRMNCR.jpeg" alt="DELHI-NCR Campus" />
          <div className="layer">
            <h3>Rajpura</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campus;
