import { React, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./module-list.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.moduleReducer.modules);
  const module = useSelector((state) => state.moduleReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="list-group wd-module-container">
      <li className="list-group-item">
        <div className="">
          <div>
            <input value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }    
              className="form-control"
            />
            <textarea value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }    
              className="form-control"
            />
          </div>
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="btn btn-success wd-margin-top-5px wd-margin-right-5px">
            Add
          </button>
          <button 
          onClick={() => dispatch(updateModule(module))}
          className="btn btn-primary wd-margin-top-5px">
            Update
          </button>

        </div>
      </li><br />
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div>
              <a key={index} className="list-group-item list-group-item-secondary list-group-item-action">

                {module.name}<br />
                {module.description}
                <div class="d-flex float-end">
                  <button
                     onClick={() => dispatch(setModule(module))}
                    className="btn btn-warning wd-margin-top-20px wd-margin-right-5px">
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteModule(module._id))}
                    className="btn btn-danger wd-margin-top-20px">
                    Delete
                  </button>
                </div>
              </a><br />
            </div>

          ))
      }
    </div>

  );
}
export default ModuleList;