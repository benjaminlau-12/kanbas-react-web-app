
import { Route, Routes} from "react-router-dom";
import Home from "../Home/home";

function ButtonsAndStatus() {
    return (
        <Routes>
            <Route path="Home" element={<Home/>} />
        </Routes>
    )
}
export default ButtonsAndStatus;