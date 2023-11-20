import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./module-list.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./moduleReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";



function ModuleList() {
  const { courseId } = useParams();
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

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
            onClick={handleAddModule}
            className="btn btn-success wd-margin-top-5px wd-margin-right-5px">
            Add
          </button>
          <button
            onClick={handleUpdateModule}
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
                    onClick={() => handleDeleteModule(module._id)}
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