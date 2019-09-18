import React, { useState } from "react";
import useCourse from "../customHooks/useCourse";

const Course = ({ match }) => {
  const courses = useCourse(match.params.id);

  const [message, setMessage] = useState("Sin mensajes");

  const MyMessage = m => {
    setMessage(m.target.value);
  };

  return (
    <div className="ed-grid container m-grid-3">
      <div className="ed-item">
        <div className="ed-grid">
          <h3 className="l-cols-2">Curso de: {courses.title} </h3>
          <img className="l-cols-4" src={courses.image} alt={courses.title} />
          <p className="cols-1">Level: {courses.level} </p>
        </div>
        <div className="ed-grid m-center">
          <h3>{message}</h3>
          <input
            className="l-cols-3"
            type="text"
            placeholder="Ingresa tu comentario"
            onChange={MyMessage.bind(this)}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
