import React from 'react';
import '../../css/Login.css';

function LoginScreen() {
    return (
      <section className="vh-100" style={{backgroundColor: "#d5a133"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{backgroundColor:"#faf8f6" , borderRadius: '1.5rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://cdn.pixabay.com/photo/2020/01/29/04/48/food-4801581_960_720.jpg"
                      width="100%" height="100%" alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form className="was-validated" noValidate>
                        <h2 className="fw-normal mb-3 pb-3" style={{letterSpacing: "8px"}}>Wellcome</h2>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example17">Email address</label>
                          <input type="email" id="form2Example17" className="form-control form-control-lg"/>
                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example27">Password</label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        </div>

                        <div className="pt-1 mb-4">
                          <button 
                            className="btn btn-dark btn-lg btn-block" 
                            type="botton"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
  }
  
  export default LoginScreen;