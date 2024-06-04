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
                {props.children}
            </div>
        </div>
    )
}

export default Modal