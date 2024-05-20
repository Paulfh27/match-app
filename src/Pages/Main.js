import Toolbar from "../Components/Toolbar";
import Card from '../Components/Card';

/*
* Main page or the swiping page of the app 
*
* NEED: a loop to cycle through a list of cards generated with backend content
*/
function Main() {
    return(
        <div>
            <Card/>
            <Toolbar></Toolbar>
        </div>
    )
}

export default Main;