import React from "react";
import CourseCard from "../molecules/CourseCard";
import widthLoader from "../HOC/widthLoader";

const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-3 l-grid-4">
    {courses.map(c => (
      <CourseCard
        id={c.id}
        title={c.title}
        image={c.image}
        image_level={c.image_level}
        level={c.level}
        price={c.price}
      />
    ))}
  </div>
);

export default widthLoader("courses")(CourseGrid);
