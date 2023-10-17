
import { Navigate, Route, Routes} from "react-router-dom";
import Modules from "../Modules";

import "./main-content.css"

function MainContent() {
    return (
        <div className="wd-third-col">
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />

                <Route path="Modules" element={<Modules />} />
                <Route path="Home" element={<Modules />} />
                <Route path="Assignments" element={<h1><br />Assignments</h1>} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<h1>Assignment Editor</h1>}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
        </div>
    )
}
export default MainContent