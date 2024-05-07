import { Outlet, Link } from "react-router-dom";

// Toolbar Class
//      Sits at the bottom of the screen in most pages 
//      holds all navigation options
function Toolbar() {
    return(
        <div style={{position:'absolute', bottom:'0', width:'100%'}}>
            <ul style={{listStyleType: 'none', margin:0, padding:0, display:'flex'}}>
                <li style={{marginRight:'10px'}}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{marginRight:'10px'}}>
                    <Link to="/Main">Main</Link>
                </li>
            </ul>
        </div>
    )
}

export default Toolbar;