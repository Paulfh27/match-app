import './card.css';

function Card(props) {
    return (
        <div className='card'>
            <p className='card-content'>
                This is a test
            </p>
            <div className='navigation-buttons'>
                <button onClick={props.onLeft}>Left</button>
                <button onClick={props.onRight}>Right</button>
            </div>
        </div>
    )
}

export default Card;