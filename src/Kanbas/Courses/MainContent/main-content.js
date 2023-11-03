
import { Navigate, Route, Routes} from "react-router-dom";
import Modules from "../Modules";
import Assignments from "../Assignments/assignments";

import "./main-content.css"
import AssignmentEditor from "../Assignments/AssignmentEditor";

function MainContent() {
    return (
        <div className="wd-third-col col">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />

                <Route path="Modules" element={<Modules />} />
                <Route path="Home" element={<Modules />} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
        </div>
    )
}
export default MainContent