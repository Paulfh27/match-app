import "./item.css";

/* Item Class
 *      This is what appears to represent one element in a users inventory
 *      It will appear as a picture with base level information: name, date, begining of description paragraph
 */
function Item(props) {
  return (
    <div onClick={props.onClick} className="gallery-item">
      <h1 className="gallery-item-title">{props.text}</h1>
    </div>
  );
}

export default Item;
