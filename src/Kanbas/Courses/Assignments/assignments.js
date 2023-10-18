import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical, FaGripVertical, FaPlus, FaNoteSticky, FaNotesMedical, FaSquareCheck } from "react-icons/fa6";
import "./assignments.css"


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="wd-main-content">
            <div className="wd-search col">
                <input className="form-control wd-search-size" type="text" placeholder="Search for Assignment"></input>
            </div>
            <div class="wd-btn-container float-end">
                <button class="btn wd-light-grey-button">+ Group</button>
                <button class="btn btn-danger">+ Assignment</button>
                <button class="btn  wd-light-grey-button">
                    <FaEllipsisVertical />
                </button>
            </div>
            <div className="list-group">
                <li class="list-group-item list-group-item-secondary list-group-item-action d-flex wd-list-group-item-width wd-list-group-item-margin">
                    <FaGripVertical className="wd-double-ellipsis" />
                    <span className="wd-main-title">Assignments</span>
                    <div class="d-flex float-end">
                        <span class="wd-title-w-buttons">40% of Total</span>
                        <FaPlus />
                        <FaEllipsisVertical className="wd-last-btn" />
                    </div>
                </li>
                <ul className="list-group-item wd-sub-list-group wd-list-group-item-width wd-only-bot-border">
                    <li className="list-group">
                        {courseAssignments.map((assignment) => (
                            <div className="d-flex list-group-item wd-only-bot-border2">
                                <div class="wd-list-group-starting-icons d-flex">
                                    <div>
                                        <FaGripVertical />
                                    </div>
                                    <div>
                                        <FaNoteSticky className="wd-color-lime-green" />
                                    </div>
                                </div>
                                <div class="wd-ms-left">
                                    <h5> <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                        {assignment.title}
                                    </Link></h5>
                                    <span>Due October 3rd at 11:59 pm</span>
                                </div>
                                <div>
                                    <div class="float-end">
                                        <FaSquareCheck className="wd-color-lime-green" />
                                        <FaEllipsisVertical />
                                    </div>
                                </div>
                            </div>

                        ))}



                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Assignments;