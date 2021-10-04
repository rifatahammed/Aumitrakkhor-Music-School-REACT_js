import React, { useEffect, useState } from "react";
import "./Home.css";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useCart(courses);
  // products to be rendered on the UI.
  const [displayCourses, setDisplayCourses] = useState([]);

  useEffect(() => {
    fetch("../../fakeData/courses.JSON")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <div className="shop-container">
        <div className="product-container">
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
