import React from 'react';
import '../../css/Home.css';

function DishCard() {
    return (
      <div className="card" style={{width: "14rem", borderRadius: '2rem'}}>
        <img 
          src="https://www.recetaslamasia.es/wp-content/uploads/2012/10/foto_plato-equilibrado-1500x1500.jpg" 
          className="card-img-top" 
          alt="Dish"
          style={{borderRadius: "2rem 2rem 2rem 2rem"}}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and.</p>
          <div className="col-2-lg-6">
            <button 
              type="submit" 
              className="btn btn-success"
              style={{marginRight:'10px', borderRadius: '0.5rem'}}
            >
              Details
            </button>
            <button 
              type="submit" 
              className="btn btn-danger"
              style={{marginRight:'10px', borderRadius: '0.8rem'}}
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default DishCard;