import { useState, useEffect } from "react";
import { data_api } from "../api/endpoints";
import DataMenu from "../Presentationals/Home/DataMenu";
import HomeScreen from "../Presentationals/Home/HomeScreen";

import axios from 'axios';
import swal from 'sweetalert';

const Home = (props) => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [dataSearch, setSearch] = useState([]);
  const [dataAdded, setAdded] = useState([]);
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

    console.log(dataAdded);
    if(dataAdded.length < 4){
      const data = dataAdded;
      data.push(item);
      setAdded(data);
      setSearch([]); //loading  
    } else{
			swal('no puedes agregar mas recipientes');
      setSearch([]); //loading  
    }

    //update loading
    setLoading({...loading, added: false})

  }

  const handleDeleteRecipie = (index) => {

    //check token
    setToken(localStorage.getItem('token'));

    //update loading
    setLoading({...loading, added: true})

    const data = dataAdded
    data.splice(index, 1);
    setAdded(data);
    setSearch([]); //loading

    //update loading
    setLoading({...loading, added: false})

  }

  useEffect(() => {
    props.handleToLogin(token);
  },[token]);

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
          />
          <h3 style={{ padding:'30px' }}>Added</h3>
          <HomeScreen
            data={dataAdded}
            is_Search={false}
            is_null={dataAdded===[]}
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
