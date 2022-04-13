import React from 'react';
import '../../css/Home.css';
import DishCard from './DishCard';

function Home() {
    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((item,index) => (
            <div key={index} className ="col-lg-3" style={{paddingTop: '10px'}}>
              <div style={{paddingTop: '8%'}}>
                <button
                  type="submit"
                  className="color"
                >
                  <DishCard />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
  }
  
  export default Home;