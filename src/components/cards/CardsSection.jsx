import React from "react";

import "./CardsSection.css";
import CourseList from "../../assets/courses.json";
import CardItem from "../ui/CardItem";

function CardsSection() {
  const highlightedCourses = CourseList.slice(0, 2);
  const secondaryCourses = CourseList.slice(2);

  return (
    <>
      <section className="card-section">
        <h1>Check out our fantastic craft courses!</h1>
        <div className="cards-cont">
          <div className="card-items-wrapper">
            {highlightedCourses.map((highlightedCourse) => {
              return (
                <CardItem
                  key={highlightedCourse.id}
                  path={highlightedCourse.path}
                  imgSrc={highlightedCourse.pictureUrl}
                  title={highlightedCourse.title}
                  label={highlightedCourse.timing}
                  text={highlightedCourse.text}
                />
              );
            })}
          </div>
          <div className="card-items-wrapper">
            {secondaryCourses.map((secondaryCourse) => {
              return (
                <CardItem
                  key={secondaryCourse.id}
                  path={secondaryCourse.path}
                  imgSrc={secondaryCourse.pictureUrl}
                  title={secondaryCourse.title}
                  label={secondaryCourse.timing}
                  text={secondaryCourse.text}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardsSection;
