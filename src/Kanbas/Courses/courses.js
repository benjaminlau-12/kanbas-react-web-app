import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation/course-nav";
import { FaBars } from "react-icons/fa6";
import "./courses.css"
import MainContent from "./MainContent/main-content";
import ButtonsAndStatus from "./ButtonsAndStatus/buttons-and-status";


function Courses() {
    const { courseId } = useParams();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


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
                                        {course.number + " " + "01" + " " + "FA23"}
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
                <MainContent />
                <ButtonsAndStatus />
            </div>




        </div>

    );
}
export default Courses;