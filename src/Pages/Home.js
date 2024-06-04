import { useState } from "react";
import Toolbar from "../Components/Toolbar";
import Modal from '../Components/Modal'
import './home.css'
import { Auth } from "../Components/Auth";

// Need a login page 
function Home() {
    const [loginIsOpen, setLogin] = useState(false)

    function loginHandler() {
        setLogin(true)
    }

    function cancleHandler() {
        setLogin(false)
    }

    return(
        <div>
            <Toolbar></Toolbar>
            <div>
                <div className='button-container'>
                    <button>Sign Up</button>
                    <button onClick={loginHandler}>Login</button>
                </div>
            </div>
            {loginIsOpen ? <Modal> 
                <p><Auth onCancle={cancleHandler}/></p>
            </Modal> : null } 
        </div>
    )
}

export default Home;