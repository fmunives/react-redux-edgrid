import React from "react";
import CourseGrid from "../organisms/CourseGrid";
import { connect } from "react-redux";

const Courses = ({ courses }) => {
  // console.log(courses);

  return <CourseGrid courses={courses} />;
};

const mapStateToProps = state => ({
  courses: state.reducerCourses.courses
});

export default connect(
  mapStateToProps,
  {}
)(Courses);
