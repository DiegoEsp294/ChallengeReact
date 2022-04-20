import React from 'react';

function SearchForm({ 
  handleChange,
  handleSubmit,
  isSubmitting,
  values,
  errors
}) {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  id="formSearch"
                  name="dish"
                  className="form-control-sm"
                  style={{ marginRight: '5px', width: '400px' }}
                  onChange={handleChange}
                  value={values.dish}
                />
                <button 
                  className="btn btn-success"
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  Search recipes
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small className="text-danger">{errors.dish}</small>
              </div>
            </div>
          </form>
        </div>
      </div>
);
  }
  
  export default SearchForm;


/*   <form >
  <div className="row">
    <div className="col">
      <div className="row">
        <input
          type="text"
          id="formSearch"
          name="name"
          className="input"
          style={{ marginRight: '5px' }}
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <div className="row">
        {errors.name}
      </div>
    </div>
    <div className="col">
      <button 
        className="btn btn-success"
        type="button"
        disabled={isSubmitting}
        onClick={handleSubmit}
      >
        Search recipes
      </button>
    </div>
  </div>
</form>
 */