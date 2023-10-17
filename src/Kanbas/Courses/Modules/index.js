import ModuleList from "./modules-list";
import { FaEllipsisVertical } from "react-icons/fa6";
import "./index.css";
function Modules() {
    return (
        <div className="wd-module-container">
            <div className="wd-btn-container d-flex">
                <button class="btn wd-light-grey-button" type="button">Collapse All</button>
                <button class="btn wd-light-grey-button" type="button">View Progress</button>
                <div class="dropdown">
                    <button class="btn wd-light-grey-button dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Publish All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button class="btn btn-danger" type="button">Module</button><br />
                <button class="btn wd-light-grey-button" type="button">
                    <FaEllipsisVertical className="wd-ellipsis-color"/>
                </button>
            </div>
            <ModuleList />
        </div >
    );
}
export default Modules;