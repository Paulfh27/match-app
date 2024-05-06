import { Outlet, Link } from "react-router-dom"

function Navbar() {
    return(
        <div>
            <header>Navagation Bar</header>
            <ul>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    )
}