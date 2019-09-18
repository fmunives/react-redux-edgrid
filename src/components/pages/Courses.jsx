import React from "react";
import axios from "axios";
import CourseGrid from "../organisms/CourseGrid";
class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/fmunives/dbjson-grupovg/courses"
      )
      .then(response =>
        this.setState({
          courses: response.data
        })
      );
  }

  render() {
    const { courses } = this.state;
    return <CourseGrid courses={courses} />;
  }
}

export default Courses;
