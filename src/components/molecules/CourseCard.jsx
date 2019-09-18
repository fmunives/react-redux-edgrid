import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, image, image_level, level, price }) => (
  <article class="card">
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">{title}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <div class="card__avatar s-mr-1">
            <div class="circle img-container">
              <img src={image_level} alt={title} />
            </div>
          </div>
          <span class="small">{level}</span>
        </div>
      </div>
      <div class="s-main-center">
        <a class="button--ghost-alert button--tiny" href="#">
          {`S/. ${price}.00`}
        </a>
      </div>
    </div>
  </article>
);

export default CourseCard;
