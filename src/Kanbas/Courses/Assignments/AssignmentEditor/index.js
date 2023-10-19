import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisVertical, FaCircleCheck, FaCircle } from "react-icons/fa6";
import db from "../../../Database";
import "./index.css"

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div class="d-flex float-end">
                <span class="wd-color-lime-green wd-space-evenly">
                    <FaCircleCheck className="margin-right-10px" />
                    <span className="margin-right-10px">Published</span>
                    <button class="btn wd-light-grey-button wd-ellipsis-btn">
                        <FaEllipsisVertical />
                    </button>
                </span>
            </div>

            <hr class="wd-hr-width wd-margin-top-50px"></hr>
            <h5>Assignment Name</h5>
            <input value={assignment.title}
                className="form-control mb-2" />
            <br />
            <textarea cols="30" rows="5" class="form-control"></textarea><br />
            <div class="col d-flex">
                <label className="margin-right-10px ">Points</label>
                <input type="text" class="form-control wd-margin-left-10px" />
            </div><br />
            <div class="col d-flex">
                    <label class="wd-btn-label">Assignment Group</label>
                    <div class="dropdown-center">
                        <button class="btn wd-light-grey-button wd-button-size dropdown-toggle wd-margin-left-10px" type="button"
                            data-bs-toggle="dropdown">
                            ASSIGNMENTS
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div><br/>
                <div class="col d-flex">
                    <label class="wd-btn-label">Display Grade as</label>
                    <div class="dropdown-center">
                        <button class="btn wd-light-grey-button wd-button-size dropdown-toggle wd-margin-left-10px" type="button"
                            data-bs-toggle="dropdown">
                            Percentage
                        </button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">Action</li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div><br/>
                <div class="col d-flex wd-margin-left-140px">
                    <input type="checkbox"/>
                    <label class="wd-margin-left-10px">Do not count this assignment towards the final grade</label>
                </div><br/>
                <div class="col d-flex">
                    <label>Submission type</label>
                    <div class="col wd-borders wd-container wd-margin-left-10px">
                        <div class="dropdown">
                            <button class="btn btn-light wd-button-size dropdown-toggle wd-margins wd-small-btn"
                                type="button" data-bs-toggle="dropdown">
                                Online
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item">Action</li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <span class="wd-margins wd-bold">Online Entry Options</span>
                        <div class="d-flex row checkboxes wd-margins">
                            <div>
                                <input type="checkbox"/>
                                <label class="wd-margin-left-10px">Text Entry</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label class="wd-margin-left-10px">Website Url</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label class="wd-margin-left-10px">Media Recordings</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label class="wd-margin-left-10px">Student Annotations</label>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label class="wd-margin-left-10px">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div><br/>

                <div class="col d-flex">
                    <label class="wd-bold">Assign</label>
                    <div class="col wd-borders wd-container wd-margin-left-10px">
                        <label class="wd-margin-left-10px wd-margins wd-margin-bot">Assign To</label>
                        <input class="form-control wd-margin-left-10px wd-textbox" type="text"/>
                        <label class="wd-bold wd-margins wd-margin-bot">Due</label><br/>
                        <input class="wd-margin-left-10px wd-textbox form-control" type="text"
                            value="October 2, 2023"/><br/>
                        <div class="wd-margin-left-10px row">
                            <div class="col d-flex">
                                <div class="row">
                                    <label class="wd-bold">Available From</label>
                                    <input class="form-control" type="text" value="October 1, 2023"/>
                                </div>

                            </div>
                            <div class="col d-flex">
                                <div class="row">
                                    <label class="" for="Until">Until</label>
                                    <input class="form-control" type="text" value="October 2, 2023"/>
                                </div>
                            </div>
                        </div><br/>
                        <div class="row">
                            <button class="btn wd-light-grey-button wd-add-btn" type="button">+ Add</button>
                        </div>
                    </div>
                </div> <br/> <br/>
                <div class="col d-flex">
                    <input type="checkbox"/>
                    <label class="wd-margin-left-10px">Notify users that this content has changed</label>

                </div>
            <div className="float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn wd-light-grey-button me-2">
                    Save
                </button>
            </div>

        </div>
    );
}


export default AssignmentEditor;