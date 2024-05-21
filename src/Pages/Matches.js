import Toolbar from "../Components/Toolbar";
import Item from '../Components/Item'
import '../Components/item.css'
import { db } from '../config/firebase'
import { useState } from "react";

/*
* Page dedicated to presenting matches in a gallery format
*/
function Matches(props) {

    const [movieList, setMovieList] = useState([]);
    const getMovieList = () => {
        
    }

    return ( 
        <div>
            <Toolbar></Toolbar>
            <div className='gallery-container'>
                <Item text="One"></Item>
                <Item text="Two"></Item>
                <Item text="Three"></Item>
                <Item text="Four"></Item>
                <Item text="Five"></Item>
                <Item text="Six"></Item>
            </div>
        </div>
    )

}

export default Matches;