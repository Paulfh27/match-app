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
            <div padding='20px' className='gallery-container'>
                <Item>One</Item>
                <Item>two</Item>
                <Item>three</Item>
                <Item>four</Item>
                <Item>five</Item>
                <Item>six</Item>
            </div>
        </div>
    )

}

export default Matches;