import {usestate} from 'react'
import './modal.css';

/*
* For the login Page specifically
*
* should prommpt for two text boxes and on confirm run a querey in 
* backend database
*/
function Modal(props) { 
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h1>This is a login Page</h1>
                <button onClick={props.onCancle}>Cancle</button>
                <button onClick={props.onConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal