import { Outlet, Link } from "react-router-dom";
import './toolbar.css'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react';

// Toolbar Class
//      Sits at the bottom of the screen in most pages 
//      holds all navigation options
function Toolbar(props) {

    const logout = async () => {
        try{
            await signOut(auth);
        }catch (err) {
            console.error(err)
        }
    }

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
                    <button onClick={logout}>Log Out</button>
            </ul>
        </div>
    )
}

export default Toolbar;