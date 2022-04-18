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
      <div className="card" style={{width: "14rem", height: "21rem", borderRadius: '1rem 1rem 0rem 0rem'}}>
        <img 
          src={image}
          className="card-img-top" 
          alt="Dish"
          style={{borderRadius: "1rem 1rem 1rem 1rem"}}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">servings: {servings}</h6>
          <h6 className="card-title">
            <span style={{ backgroundColor: '#A6DF43' }}>{vegan ? ' vegan ' : null}</span> 
            <span style={{ backgroundColor: '#E5DC2C' }}>{dairyFree ? ' dairyFree ' : null}</span> 
            <span style={{ backgroundColor: '#E5962C' }}>{glutenFree ? ' glutenFree ' : null }</span> 
            <span style={{ backgroundColor: '#2CE5CB' }}>{vegetarian ? ' vegetarian ' : null}</span> 
            <span style={{ backgroundColor: '#752CE5' }}>{sustainable ? ' sustainable ' : null}</span> 
            <span style={{ backgroundColor: '#E52CC9' }}>{veryHealthy ? ' veryHealthy ' : null}</span> 
          </h6>
        </div>
      </div>
    );
  }
  
  export default DishCard;