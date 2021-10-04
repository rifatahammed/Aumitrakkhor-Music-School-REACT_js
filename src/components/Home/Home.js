import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import getit from "../../images/getit.png";
import Intro from "../Intro/Intro";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useCart(courses);
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

  const handleAddToCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    // save to local storage (for now)
    addToDb(course.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedCourse = courses.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayCourses(matchedCourse);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search course"
        />
      </div>
      <div>
        <h3>Choose your desire course now</h3>
        <img src={getit} alt="" />
        <Intro></Intro>
      </div>
      <div className="home-container">
        <div className="course-container">
          {displayCourses.map((course) => (
            <Course
              key={course.key}
              course={course}
              handleAddToCart={handleAddToCart}
            ></Course>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Home;
