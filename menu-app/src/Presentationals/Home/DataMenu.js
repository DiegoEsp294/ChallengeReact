import React from 'react';
import '../../css/Home.css';
import HomeScreen from "./HomeScreen";

function DataMenu({ 
  handleFormData, 
  is_disabled, 
  handleSearch, 
  dataSearch, 
  handleAddRecipie,
  loading
}) {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg">
          <div className="card">
            <div className="card-header">
            </div>
            <div className="card-body">
              <h5 className="card-text">Total: $200</h5>
              <h5 className="card-text">Preparation time: 01:32:00</h5>
              <h5 className="card-text">Healt Score: 01:12:02</h5>
              <input
                type="text"
                id="form2Example27"
                name="search"
                className="form-control-sm"
                style={{ marginRight: '5px' }}
                onChange={(e) => handleFormData(e)}
                />
              { is_disabled ?
                <button 
                  className="btn btn-success"
                  type="button"
                  disabled
                  onClick={() => handleSearch()}
                >
                  Search recipes
                </button>
              :
                <button 
                  className="btn btn-success"
                  type="button"
                  onClick={() => handleSearch()}
                >
                  Search recipes
                </button>
              }
            </div>
            <div className="card-footer">
              <HomeScreen
                data={dataSearch}
                is_Search={true}
                handleAddRecipie={handleAddRecipie}
                loading={loading}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
  );
  }
  
  export default DataMenu;