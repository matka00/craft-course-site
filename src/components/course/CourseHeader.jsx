import React from "react";

import "./CourseHeader.css";
import CourseData from "../../assets/courses.json";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";

function CourseHeader() {
  const { courseId } = useParams();
  const thisCourse = CourseData.find((course) => course.path === courseId);

  return (
    <>
      <section className="course-header-cont">
        <h1>{thisCourse.title}</h1>
        <img
          src={process.env.PUBLIC_URL + thisCourse.pictureUrl}
          alt={thisCourse.title}
        />
        <div className="hero-btns">
          <Link to="/notice">
            <Button buttonStyle={"btn-outline"} buttonSize={"btn-large"}>
              GET STARTED
            </Button>
          </Link>
          <Link to="/notice">
            <Button buttonStyle={"btn-primary"} buttonSize={"btn-large"}>
              WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CourseHeader;
