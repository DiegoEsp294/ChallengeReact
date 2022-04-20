import React from 'react';
import '../../css/Home.css';
import DishCard from './DishCard';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ModalDetails from "./ModalDetails";

function DishList({
  data, 
  is_Search, 
  handleAddRecipie, 
  handleDeleteRecipie,
  handleDetails,
  closeButton,
  show,
  loading,
  avg_healthScore,
  preparationTime,
  totalAmount
}) {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          { loading ?
              <LoadingScreen />
            :
            <>
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className ="col-lg-4" 
                  style={{paddingTop: '30px', paddingEnd: '10px'}}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <button
                          className={is_Search ? "add" : "details"}
                          type="submit"
                          onClick={() => is_Search ? handleAddRecipie(item) : handleDetails(item)}
                        >
                          <DishCard 
                            image={item.image}
                            servings={item.servings}
                            title={item.title}
                            vegan={item.vegan}
                            dairyFree={item.dairyFree}
                            vegetarian={item.vegetarian}
                            healthScore={item.healthScore}
                            readyInMinutes={item.readyInMinutes}
                            pricePerServing={item.pricePerServing}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        { !is_Search ?
                            <button 
                              type="submit" 
                              className="btn btn-danger danger"
                              onClick={() => handleDeleteRecipie(index, item)}
                            >
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                              </span>
                            </button>
                        :
                          null
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <ModalDetails
                      show={show}
                      closeButton={closeButton}
                      totalAmount={totalAmount}
                      avg_healthScore={avg_healthScore}
                      preparationTime={preparationTime}
                    />
                  </div>
                </div>
              ))}
            </>
          }
        </div>
      </div>
  );
  }
  
  export default DishList;