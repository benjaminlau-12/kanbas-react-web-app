import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FaPlus, FaEllipsisVertical, FaSquareCheck } from "react-icons/fa6";
import "./module-list.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="list-group wd-module-container">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div>
              <a key={index} className="list-group-item list-group-item-secondary list-group-item-action">
                {module.name}<br />
                {module.description}
                <div class="d-flex float-end wd-even-space">
                  <FaSquareCheck className="fa-check-square" />
                  <FaPlus />
                  <FaEllipsisVertical />
                </div>
              </a><br/>
            </div>

          ))
      }
    </div>

  );
}
export default ModuleList;