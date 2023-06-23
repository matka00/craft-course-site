import React from "react";

import "./CourseDetails.css";
import CourseData from "../../assets/courses.json";
import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";

function CourseDetails() {
  const { courseId } = useParams();
  const thisCourse = CourseData.find((course) => course.path === courseId);

  return (
    <>
      <section className="course-details-section">
        <div className="details-cont">
          <h2>{thisCourse.title}</h2>
          <p className="instructor">by {thisCourse.instructor}</p>
          <p className="timing">Length: {thisCourse.timing}</p>
          <p className="short-text">{thisCourse.text}</p>
          <p className="course-description">{thisCourse.description1}</p>
          <p className="course-description">{thisCourse.description2}</p>
          <p className="course-description">{thisCourse.description3}</p>
        </div>
        <div className="course-btn-cont">
          <Link to="/notice">
            <Button buttonStyle={"btn-dark"} buttonSize={"btn-large"}>
              GET STARTED
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;
