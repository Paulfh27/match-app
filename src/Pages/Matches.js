import Toolbar from "../Components/Toolbar";
import Item from '../Components/Item'
import '../Components/item.css'
import { useState } from "react";
import Modal from '../Components/Modal'

/*
* Page dedicated to presenting matches in a gallery format
*/
function Matches(props) {
    const [itemModal, setItemModal] = useState(false)

    // Need to pass in the id of an obhect at some point to load in the the data
    function openModal() {
        setItemModal(true)
    }

    function closeModal() {
        setItemModal(false)
    }

    return ( 
        <div>
            <Toolbar></Toolbar>
            <div className='gallery-container'>
                <Item onClick={openModal} text="One"></Item>
                <Item text="Two"></Item>
                <Item text="Three"></Item>
                <Item text="Four"></Item>
                <Item text="Five"></Item>
                <Item text="Six"></Item>
            </div>
            {itemModal ? <Modal>
                <div>
                    <buton onClick={closeModal}>close</buton>
                </div>
            </Modal>: null}
        </div>
    )

}

export default Matches;