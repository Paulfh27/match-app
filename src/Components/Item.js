import './item.css'

/* Item Class
*      This is what appears to represent one element in a users inventory 
*      It will appear as a picture with base level information: name, date, begining of description paragraph
*/
function Item(props) {
    return (
        <div className='gallery-item'>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Item;
