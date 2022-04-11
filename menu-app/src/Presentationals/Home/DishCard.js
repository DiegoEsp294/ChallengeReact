import React from 'react';
import '../../css/Home.css';

function DishCard() {
    return (
      <div className="card" style={{width: "16rem"}}>
        <img 
          src="https://www.recetaslamasia.es/wp-content/uploads/2012/10/foto_plato-equilibrado-1500x1500.jpg" 
          className="card-img-top" 
          alt="Dish"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="col-2-lg-6">
            <span style={{ marginRight:'10px' }}>
              <button type="submit" className="btn btn-success">Add</button>
            </span>
            <span>
              <button type="submit" className="btn btn-danger">Delete</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default DishCard;