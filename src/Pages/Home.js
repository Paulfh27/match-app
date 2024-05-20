import { useState } from "react";
import Toolbar from "../Components/Toolbar";
import Modal from '../Components/Modal'
import './home.css'

// Need a login page 
function Home() {
    const [modalIsOpen, setModal] = useState(false)

    function loginHandler() {
        setModal(true)
    }

    function cancleHandler() {
        setModal(false)
    }

    return(
        <div>
            <Toolbar></Toolbar>
            <div>
                <div className='button-container'>
                    <button onClick={loginHandler}>Login</button>
                </div>
            </div>
            {modalIsOpen ? <Modal onCancle={cancleHandler} onConfirm={cancleHandler}/> : null } 
        </div>
    )
}

export default Home;