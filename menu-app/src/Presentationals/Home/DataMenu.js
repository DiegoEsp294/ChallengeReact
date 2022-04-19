import React from 'react';
import '../../css/Home.css';
import HomeScreen from "./HomeScreen";
import { Formik, Field, Form } from 'formik';

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
          <Formik
            initialValues={{
              search: '',
            }}
          >
            <Form>
              <Field
                id="form2Example27"
                className="form-control-sm"
                id="search"
                name="search"
                placeholder="chick"
                type="text"
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
            </Form>
          </Formik>
          <div className="col-lg">
            <input
              type="text"
              id="form2Example27"
              name="search"
              className="form-control-sm"
              style={{ marginRight: '5px' }}
              onChange={(e) => handleFormData(e)}
              />
            <div className="back-list">
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
  );
  }
  
  export default DataMenu;