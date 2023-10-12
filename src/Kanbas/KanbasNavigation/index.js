import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCircleUser, FaCalendar, FaInbox, FaClock, FaDesktop, FaBook, FaArrowRight, FaQuestion } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import "./index.css"
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [FaCircleUser, AiOutlineDashboard, FaBook, FaCalendar, FaInbox, FaClock, FaDesktop, FaArrowRight, FaQuestion]
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleClick = (link) => {
        console.log("handling Click")
        navigate(`/Kanbas/${link}`)
    }
    return (
        <div className="sidebar">
            <div className="wd-sidebar" style={{ width: 150 }}>
                <li>
                    <img src="../../../Northeastern-logo.png" className="wd-neu-logo"></img>
                </li>
                {/* <AiOutlineDashboard/> */}
                {links.map((link, index) => (
                    <li className={`row ${pathname.includes(link) && "wd-kanbas-selected-bg"}`}>
                        <div onClick={() => handleClick(link)}
                            className={`row ${link === "Account" ?
                                "account-icon" : "menu-icon"}`}>
                            {icons[index] && React.createElement(icons[index],
                                {size: 25 })}
                            <Link
                                key={index}
                                to={`${link}`}
                                className={`${pathname.includes(link) && "wd-kanbas-selected-option"}`}>
                                {link}
                            </Link>
                        </div>

                    </li>

                ))}


            </div>
        </div>

    );
}
export default KanbasNavigation;