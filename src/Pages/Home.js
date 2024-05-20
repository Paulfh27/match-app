import { useState } from "react";
import Toolbar from "../Components/Toolbar";
import Modal from '../Components/Modal'

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
            <button onClick={loginHandler}>Login</button>
            {modalIsOpen ? <Modal onCancle={cancleHandler} onConfirm={cancleHandler}/> : null } 
            <Toolbar></Toolbar>
        </div>
    )
}

export default Home;