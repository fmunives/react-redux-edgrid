import { useEffect, useState } from "react";
import axios from "axios";

const useCourse = id => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/fmunives/dbjson-grupovg/courses/${id}`
      )
      .then(response => setCourse(response.data));
  }, []);

  return course;
};

export default useCourse;
