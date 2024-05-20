import { Outlet, Link } from "react-router-dom";
import './toolbar.css'

// Toolbar Class
//      Sits at the bottom of the screen in most pages 
//      holds all navigation options
function Toolbar() {
    return(
        <div className='toolbar'>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Main">Main</Link>
                </li>
                <li>
                    <Link to="/Matches">Matches</Link>
                </li>
            </ul>
        </div>
    )
}

export default Toolbar;