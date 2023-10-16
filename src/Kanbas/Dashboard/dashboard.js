import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css"
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container-fluid">
      <h2 className="wd-kanbas-title-color">Dashboard</h2>
      <hr class="wd-hr-width"></hr>
      <h4 class="wd-sub-title wd-kanbas-title-color">Published Courses</h4>
      <hr class="wd-hr-width"></hr>
      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 card-group">
        {courses.map((course, index) => (
          <div className="col">
            <div className="card">
              <div className={`card-img-top wd-card-color-${index + 1}`}></div>
              <div className="card-body">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className={`wd-course-name${index + 1}`}>
                {course._id}<br/>
                {course.name}
              </Link>
              </div>
              
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
export default Dashboard;

