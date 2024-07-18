import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./dashboardMenu.css";
import { dashboard_nav } from "../../LocalData/LocalData";

const DashboardMenu = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "90vh" }}
    >
      <ul className="list-unstyled text-start">
        {dashboard_nav.map((item) => (
          <li>
            <Link to={item.path} className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} />{" "}
              <span>{item.pathname}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardMenu;
