import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import Courses from "./Courses/courses";
function Kanbas() {
  return (
    <div className="wd-flex-row-container">
      <KanbasNavigation />
      
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/" element={<Navigate to="CS4550/Home" />} />
        </Routes>

      
    </div>
  );
}
export default Kanbas;