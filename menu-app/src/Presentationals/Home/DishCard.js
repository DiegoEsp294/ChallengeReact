import React from 'react';
import '../../css/Home.css';

function DishCard() {
    return (
      <div className="card" style={{width: "14rem", borderRadius: '1rem 1rem 0rem 0rem'}}>
        <img 
          src="https://www.recetaslamasia.es/wp-content/uploads/2012/10/foto_plato-equilibrado-1500x1500.jpg" 
          className="card-img-top" 
          alt="Dish"
          style={{borderRadius: "1rem 1rem 1rem 1rem"}}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and.</p>
        </div>
      </div>
    );
  }
  
  export default DishCard;