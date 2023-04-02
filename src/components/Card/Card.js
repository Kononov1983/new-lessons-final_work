import './Card.css';
import Button from '../Button/Button.js';

function Card(props) {
    return (
        <div className="Card">
          <img className="Card-img" src={ props.img }/>
          <div className="Card-container">
            <p className="Card-description">{ props.description}</p>
            <h2 className='Card-title common-header'>{ props.title }</h2>        
            <div className="Card-barcode">{ props.barcode }</div>
            <div className="Card-producer">{ props.producer }</div>
            <div className="Card-brand">{ props.brand }</div>
            <div className="Card-price common-price">{ props.price }</div>
            <div className="Place-button">
              <Button>В КОРЗИНУ</Button>
            </div>
          </div>
        </div>
    )
}

export default Card;