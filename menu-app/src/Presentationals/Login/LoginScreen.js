import React from 'react';
import '../../css/Login.css';

function LoginScreen({ handleFormData, handleLogin, is_disabled }) {
    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card-body" style={{backgroundColor:"#faf8f6" , borderRadius: '1.5rem'}}>
              <div className="row g-2">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://cdn.pixabay.com/photo/2020/01/29/04/48/food-4801581_960_720.jpg"
                    width="100%" height="100%" alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form >
                      <h2 className="fw-normal mb-3 pb-3" style={{letterSpacing: "8px"}}>Wellcome</h2>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                        <input 
                          type="email" 
                          id="form2Example17"
                          name="email" 
                          className="form-control form-control-lg"
                          onChange={(e) => handleFormData(e)}
                          />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                        <input 
                          type="password" 
                          id="form2Example27"
                          name="password" 
                          className="form-control form-control-lg"
                          onChange={(e) => handleFormData(e)}
                          />
                      </div>
                    </form>
                    <div className="pt-1 mb-4">
                      { is_disabled ?
                        <button 
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          onClick={() => handleLogin()}
                          disabled
                        >
                          Send
                        </button>
                      :
                        <button 
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          onClick={() => handleLogin()}
                        >
                          Send
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
  
  export default LoginScreen;