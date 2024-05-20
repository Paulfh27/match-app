import Toolbar from "../Components/Toolbar";
import Item from '../Components/Item'
import '../Components/item.css'

/*
* Page dedicated to presenting matches in a gallery format
*/
function Matches(props) {
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