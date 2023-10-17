import { Link, useParams, useLocation } from "react-router-dom";
import "./course-nav.css"


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes",
        "Grades", "People", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="" style={{ width: 150 }}>
            <li>
                <span class="wd-course-italic">
                    {courseId}_Fall_Semester
                </span>
            </li>
            {links.map((link, index) => (
                <li>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`${pathname.includes(link) && "wd-selected-navigation"}`}>
                        {link}
                    </Link>
                </li>

            ))}
        </div>
    );
}


export default CourseNavigation;
