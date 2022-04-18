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
} from "../utils/avg";

const Home = (props) => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [dataSearch, setSearch] = useState([]);
  const [dataAdded, setAdded] = useState({
    total: [],
    vegans: 0,
  });
  const [formData, setFormData] = useState({search: '',});
  const [loading, setLoading] = useState({
    search: false,
    added: false,
  });

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

  const [disabled, setDisabled] = useState(true);
  
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

  useEffect(() => {
    props.handleToLogin(token);
  },[token]);

  console.log(dataAdded);
  return(
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <h1>Menu</h1>
          <DataMenu 
            handleFormData={handleFormData}
            is_disabled={disabled}
            handleSearch={handleSearch}
            dataSearch={dataSearch}
            handleAddRecipie={handleAddRecipie}
            loading={loading.search}
            avg_healthScore={dataAdded.total.length === 0 ? "0" : healthScore(dataAdded.total)}
            preparationTime={dataAdded.total.length === 0 ? "00:00:00" : preparationTime(dataAdded.total)}
            totalAmount={dataAdded.total.length === 0 ? "0" : totalAmount(dataAdded.total)}
            
          />
          <h3 style={{ padding:'30px' }}>Added</h3>
          <HomeScreen
            data={dataAdded.total}
            is_Search={false}
            is_null={dataAdded.total===[]}
            handleAddRecipie={handleAddRecipie}
            handleDeleteRecipie={handleDeleteRecipie}
            loading={loading.added}
          />
        </div>
      </div>
    </>
  )
}

export default Home;
