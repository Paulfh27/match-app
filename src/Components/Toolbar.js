import { Outlet, Link } from "react-router-dom";
import "./toolbar.css";
import { useAuth } from "../contexts/AuthContext";

// Toolbar Class
//      Sits at the bottom of the screen in most pages
//      holds all navigation options
function Toolbar(props) {
  const { user } = useAuth();

  return (
    <div className="toolbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Main">Main</Link>
        </li>
        { user != null ? (
        <li>
          <Link to="/Matches">Matches</Link>
        </li>
        ) : null }
      </ul>
    </div>
  );
}

export default Toolbar;
