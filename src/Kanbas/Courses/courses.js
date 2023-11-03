import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation/course-nav";
import { FaBars } from "react-icons/fa6";
import "./courses.css"
import MainContent from "./MainContent/main-content";
import ButtonsAndStatus from "./ButtonsAndStatus/buttons-and-status";


function Courses({courses}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    const size = pathname.split("/").length
    return (
        <div>
            <div className="wd-course-navigation">
                <ul className="wd-navigation col">
                    <li class="">
                        <nav className="wd-nav">
                            <ol class="breadcrumb wd-no-wrap">
                                <li class="breadcrumb-item">
                                    <FaBars className="wd-bars" />
                                    <a class="wd-course-name" href="#">
                                        {course.number + " " + course.section + " " + course.term}
                                    </a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{pathname.split("/")[size - 1]}</li>
                            </ol>
                        </nav>

                    </li>
                    <hr className="wd-hr" />
                    <CourseNavigation />
                </ul>
            </div>
            <div className="row wd-c-container">
                <MainContent/>
                <ButtonsAndStatus/>
            </div>
            



        </div>

    );
}
export default Courses;