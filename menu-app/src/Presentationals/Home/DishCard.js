import React from 'react';
import '../../css/Home.css';

function DishCard({
  image,
  title,
  vegan,
  dairyFree,
  healthScore,
  readyInMinutes,
  vegetarian, 
  pricePerServing
}) {
    return (
      <div className="container dish">
        <div className="row center-text">
          <div className="col">
            <img 
              src={image}
              alt="Dish"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="row" style={{ marginBlockStart: '5px' }}>
            <h6 className="card-title">
              <small><span>${pricePerServing}</span></small>
            </h6>
            <h6 className="card-title">
              <small>health score: <span>{healthScore}</span></small>
            </h6>
            <h6 className="card-title">
              <small>ready in minutes: <span>{readyInMinutes}</span></small>
            </h6>
            <h6 className="card-title">
              <small style={{ backgroundColor: '#A6DF43' }}>{vegan ? ' vegan ' : null}</small>
              <small style={{ backgroundColor: '#E5DC2C' }}>{dairyFree ? ' dairyFree ' : null}</small>
              <small style={{ backgroundColor: '#2CE5CB' }}>{vegetarian ? ' vegetarian ' : null}</small>
            </h6>
          </div>
        </div>
      </div>
    );
  }
  
  export default DishCard;