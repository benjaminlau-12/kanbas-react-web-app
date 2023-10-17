import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation/course-nav";
import { FaBars } from "react-icons/fa6";
import Modules from "./Modules/index";
import "./courses.css"


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    return (
        <div>
            <div className="wd-course-navigation">
                <ul className="wd-navigation">
                    <li class="wd-no-wrap">
                        <nav className="wd-nav">
                            <ol class="breadcrumb wd-no-wrap">
                                <li class="breadcrumb-item">
                                    <FaBars className="wd-bars" />
                                    <a class="wd-course-name" href="#">
                                        {course.number + " " + course.section + " " + course.term}
                                    </a>
                                </li>
                                <li class="breadcrumb-item active wd-no-wrap" aria-current="page">{pathname.substring(23)}</li>
                            </ol>
                        </nav>

                    </li>
                    <hr className="wd-hr" />
                    <CourseNavigation />
                </ul>
            </div>

            <div className="wd-third-col">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Home" element={<Modules />} />
                    <Route path="Assignments" element={<h1><br />Assignments</h1>} />
                    <Route
                        path="Assignments/:assignmentId"
                        element={<h1>Assignment Editor</h1>}
                    />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
            </div>
            <div>
            <Routes>
                <Route path="Home" element={<h1><br />Home</h1>} />
            </Routes>
            </div>



        </div>

    );
}
export default Courses;