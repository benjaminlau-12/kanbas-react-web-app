
import { Route, Routes} from "react-router-dom";
import Home from "../Home/home";
import "./buttons-and-status.css"

function ButtonsAndStatus() {
    return (
        <Routes>
            <Route path="Home" element={<Home/>} />
        </Routes>
    )
}
export default ButtonsAndStatus;