import './card.css';

function Card(props) {
    return (
        <div className='body'>
            <div className='card'>
                <p className='card-content'>
                    This is a test
                </p>
                <div className='navigation-buttons'>
                    <button onClick={props.onLeft}>Left</button>
                    <button onClick={props.onRight}>Right</button>
                </div>
            </div>
        </div>
    )
}

export default Card;