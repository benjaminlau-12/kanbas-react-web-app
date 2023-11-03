import { FaGlasses, FaFileImport, FaArrowRight, FaCrosshairs, } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { BsMegaphone, BsBell } from "react-icons/bs";

import "./home.css"
function Home() {
    return (
        <div className="col wd-fourth-col">
            <div className="wd-btn-container">
                <button type="button" className="btn wd-stdnt-btn">
                    <FaGlasses className="wd-icon-margin" />
                    Student View
                </button>
                <div className="d">
                    <button type="button" className="btn">
                        <FaFileImport className="wd-icon-margin" />
                        Import Existing Content
                    </button><br/>
                    <button type="button" className="btn">
                        <FaArrowRight className="wd-icon-margin" />
                        Import From Commons
                    </button><br/>
                    <button type="button" className="btn">
                        <FaCrosshairs className="wd-icon-margin" />
                        Choose Home Page
                    </button><br/>
                    <button type="button" className="btn">
                        <ImStatsBars className="wd-icon-margin" />
                        View Course Stream
                    </button><br/>
                    <button type="button" className="btn">
                        <BsMegaphone className="wd-icon-margin" />
                        New Announcement
                    </button><br/>
                    <button type="button" className="btn">
                        <ImStatsBars className="wd-icon-margin" />
                        New Analytics
                    </button><br/>
                    <button type="button" className="btn">
                        <BsBell className="wd-icon-margin" />
                        View Course Notifications
                    </button>
                </div>

            </div>
            <div className="wd-todo-container">
                <b className="wd-bold">To Do</b>
                <hr className="wd-hr-margin" />
                <div>
                    <span className="wd-color-red">Grade A1 - ENV + HTML</span><br />
                    <span>100 points</span>
                </div>
                <div>
                    <span className="wd-color-red">Grade A2 - CSS + Bootstrap</span><br />
                    <span>100 points</span>
                </div>
            </div>
        </div>
    );
}
export default Home;
