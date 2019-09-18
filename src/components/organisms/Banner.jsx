import React from "react";

const Banner = () => (
  <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://images.pexels.com/photos/1458318/pexels-photo-1458318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="site de educación"
        />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Tu futuro te esta esperando</p>
          <p> Tenemos los mejores cursos para tí. </p>
          <a href="https://ed.team" className="button">
            Comenzemos!
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
