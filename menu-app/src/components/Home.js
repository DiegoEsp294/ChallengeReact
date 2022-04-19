import { useState, useEffect } from "react";
import DataMenu from "../Presentationals/Home/DataMenu";
import HomeScreen from "../Presentationals/Home/HomeScreen";

import axios from 'axios';
import swal from 'sweetalert';

import { data_api } from "../api/endpoints";
import { 
  healthScore, 
  preparationTime, 
  totalAmount 
} from "../utils/accumulated";
import EmptyDish from "../Presentationals/Home/EmptyDish";

const Home = (props) => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [dataSearch, setSearch] = useState([]);
  const [dataAdded, setAdded] = useState({ total: [], vegans: 0 });
  const [formData, setFormData] = useState({search: '',});
  const [loading, setLoading] = useState({ search: false, added: false });
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleFormData = (e) => {
		if(e.target.value.length > 2){
			setDisabled(false);
    }
    else{
			setDisabled(true);
      setSearch([]);
    }
		console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {

    //check token
    setToken(localStorage.getItem('token'));

    setDisabled(true);

    //update loading
    setLoading({...loading, search: true})

    const {authentication , url_autocomplete } = data_api;
    const url_get_autocomplete = 
      url_autocomplete+authentication+"&addRecipeInformation=true&number=10"+"&query="+formData.search;
    axios.get(url_get_autocomplete)
    .then(res => {
      if(res.status === 200){
        setSearch(res.data.results);
      }
      setDisabled(false);

      //update loading
      setLoading({...loading, search: false})

    })
    .catch(err => {
      swal(err.response.data.error);
      setDisabled(false);

      //update loading
      setLoading({...loading, search: false})

    })	
  }

  const handleAddRecipie = (item) => {

    //check token
    setToken(localStorage.getItem('token'));

    //update loading
    setLoading({...loading, added: true})

    // check requeriments
    const count_vegans = dataAdded.vegans;
    const total = dataAdded.total.length;
    const data = dataAdded.total;
    if(total < 4){
      if(item.vegan){
        if(count_vegans < 2){
          data.push(item);
          setAdded({...dataAdded, total: data, vegans: count_vegans + 1});
        }
        else{
          swal('you have exceeded the limit of non-vegan recipes per menu');
        }
      }
      else{
        if((total - count_vegans) < 2){
          data.push(item);
          setAdded({...dataAdded, total: data});
        }
        else {
          swal('you have exceeded the limit of vegan recipes per menu');
        }
      }
    } else{
			swal('no more recipes can be added');
    }
    setSearch([]); 

    //update loading
    setLoading({...loading, added: false})

  }

  const handleDeleteRecipie = (index, item) => {

    //check token
    setToken(localStorage.getItem('token'));

    //update loading
    setLoading({...loading, added: true})

    const data = dataAdded.total
    const vegans = dataAdded.vegans
    data.splice(index, 1);

    if(item.vegan){
      setAdded({...dataAdded, total: data, vegans: vegans-1});
    }
    else{
      setAdded({...dataAdded, total: data});
    }

    setSearch([]);

    //update loading
    setLoading({...loading, added: false})

  }

  const handleDetails = () => {
    setShowModal(true);
    console.log('details');
  }

  const closeButton = () => {
    setShowModal(false);
  }

  useEffect(() => {
    props.handleToLogin(token);
  },[token]);

  console.log(dataAdded);
  return(
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <h2>RESTAURANT</h2>
          <div className="row" style={{ marginBlockStart: '20px' }}>
            <DataMenu 
              handleFormData={handleFormData}
              is_disabled={disabled}
              handleSearch={handleSearch}
              dataSearch={dataSearch}
              handleAddRecipie={handleAddRecipie}
              loading={loading.search}            
            />
          </div>
          <div className="row" style={{ marginBlockStart: '40px' }}>
              <h2>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                  </svg>
                </span>
                <span>
                  MENU
                </span>
              </h2>
          </div>
          <div className="row">
            { dataAdded.total.length === 0 ?
              <EmptyDish />
            :
              <HomeScreen
                data={dataAdded.total}
                is_Search={false}
                is_null={dataAdded.total===[]}
                handleAddRecipie={handleAddRecipie}
                handleDeleteRecipie={handleDeleteRecipie}
                handleDetails={handleDetails}
                closeButton={closeButton}
                show={showModal}
                loading={loading.added}
                avg_healthScore={healthScore(dataAdded.total)}
                preparationTime={preparationTime(dataAdded.total)}
                totalAmount={totalAmount(dataAdded.total)}
              />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
