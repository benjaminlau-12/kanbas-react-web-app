import { FaGlasses } from "react-icons/fa6";
import "./home.css"
function Home() {
    return (
      <div className="wd-fourth-col">
        <div className="wd-btn-container">
            <button type="button" className="btn">
                <FaGlasses className="wd-fa-glasses"/>
                Student View
            </button>
        </div>
      </div>
    );
  }
  export default Home;
  