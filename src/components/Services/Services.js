import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Course from "../Course/Course";
import "./Services.css";
const Services = () => {
  const [courses, setCourses] = useState([]);
  // cources to be rendered on the UI.
  const [displayCourses, setDisplayCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setDisplayCourses(data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedCourse = courses.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayCourses(matchedCourse);
  };

  return (
    <div>
      <h3>Here are all the courses</h3>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search course"
        />
      </div>
      <div className="services-container">
        <div className="course-container">
          {displayCourses.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
