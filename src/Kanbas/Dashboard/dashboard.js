import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css"
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div className="container-fluid">
      <h2 className="wd-kanbas-title-color">Dashboard</h2>
      <hr class="wd-hr-width"></hr>
      <h4 class="wd-sub-title wd-kanbas-title-color">Published Courses</h4>
      <hr class="wd-hr-width"></hr>
      <div className="list-group">
        <div className="list-group-item">
          <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

          <button className="btn btn-success wd-margin-top-10px" onClick={addNewCourse} >
            Add
          </button>
          <button className="btn btn-primary wd-margin-left-5px wd-margin-top-10px" onClick={updateCourse} >
            Update
          </button>
        </div><br />

      </div>

      <div className="list-group">
        {courses.map((course, index) => (
          <div className="list-group-item">
            <Link key={course.number} to={`/Kanbas/Courses/${course.number}`} className={`wd-course-name${index + 1} wd-remove-text-decoration`}>
              {course.number} - {course.name}
            </Link>

            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
              className="btn btn-danger float-end wd-margin-left-5px">
              Delete
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              className="btn btn-warning float-end">
              Edit
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
export default Dashboard;

