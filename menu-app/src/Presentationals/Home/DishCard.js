import React from 'react';
import '../../css/Home.css';

function DishCard({
  image,
  servings,
  title,
  vegan,
  dairyFree,
  glutenFree,
  vegetarian, 
  sustainable,
  veryHealthy
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
          <div className="row" style={{ marginBlockStart: '20px' }}>
            <h6 className="card-title">servings: {servings}</h6>
            <h6 className="card-title">
              <span style={{ backgroundColor: '#A6DF43', marginRight: '6px' }}>{vegan ? ' vegan ' : null}</span> 
              <span style={{ backgroundColor: '#E5DC2C', marginRight: '6px' }}>{dairyFree ? ' dairyFree ' : null}</span> 
              <span style={{ backgroundColor: '#E5962C', marginRight: '6px' }}>{glutenFree ? ' glutenFree ' : null }</span> 
              <span style={{ backgroundColor: '#2CE5CB', marginRight: '6px' }}>{vegetarian ? ' vegetarian ' : null}</span> 
              <span style={{ backgroundColor: '#752CE5', marginRight: '6px' }}>{sustainable ? ' sustainable ' : null}</span> 
              <span style={{ backgroundColor: '#E52CC9', marginRight: '6px' }}>{veryHealthy ? ' veryHealthy ' : null}</span> 
            </h6>
          </div>
        </div>
      </div>
    );
  }
  
  export default DishCard;