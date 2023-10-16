import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import "./courses.css"


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="wd-course-navigation">
            <ul className="wd-navigation">
                <li class="wd-no-wrap">
                    <ol class="breadcrumb wd-no-wrap">
                        <li class="breadcrumb-item">
                            <FaBars className="wd-bars" />
                            <a class="wd-course-name" href="#">
                                {course.number + " " + course.section + " " + course.term}
                            </a>
                        </li>
                    </ol>
                </li>
                <hr className="wd-hr"/>
            </ul>
        </div>
    );
}
export default Courses;