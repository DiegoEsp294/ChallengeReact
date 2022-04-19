import React from 'react';
import '../../css/Home.css';

function EmptyDish() {
    return (
      <div className="container" style={{ marginBlockStart: '60px' }}>
        <div className="row">
          <div className="col-6" style={{ textAlign: 'right' }}>
            <img
              src="assets/empty.png"
              width="220px"
              height="180px"
            />
          </div>
          <div className="col-2" style={{ textAlign: 'left' }}>
            <h4>ADD DISHES TO YOUR MENU</h4>
          </div>
        </div>
      </div>
    );
  }
  
  export default EmptyDish;