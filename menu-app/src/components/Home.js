import { useState } from "react";
import { data_api } from "../api/endpoints";
import DataMenu from "../Presentationals/Home/DataMenu";
import FilterScreen from "../Presentationals/Home/FilterScreen";
import HomeScreen from "../Presentationals/Home/HomeScreen";

import axios from 'axios';
import swal from 'sweetalert';

const Home = (props) => {

  const [dataSearch, setSearch] = useState([]);

  const [dataAdded, setAdded] = useState([]);

  const [formData, setFormData] = useState({
    search: '',
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
    setDisabled(true);
    const {authentication , url_autocomplete } = data_api;
    const url_get_autocomplete = 
      url_autocomplete+authentication+"&addRecipeInformation=true&number=10"+"&query="+formData.search;
      console.log(url_get_autocomplete);
      console.log(formData.search);
      console.log(formData);
    axios.get(url_get_autocomplete)
    .then(res => {
      if(res.status === 200){
        console.log(res.data);
        setSearch(res.data.results);
      }
      setDisabled(false);
    })
    .catch(err => {
      swal(err.response.data.error);
      console.log(err.response.data.error);
      setDisabled(false);
    })	
  }

  const handleAddRecipie = (item) => {
    const data = dataAdded
    data.push(item);
    setSearch([]);
    console.log(data);
    //setAdded();
  }

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
          />
          <h3 style={{ padding:'30px' }}>Added</h3>
          <HomeScreen
            data={dataAdded}
            is_Search={false}
            handleAddRecipie={handleAddRecipie}
          />
        </div>
      </div>
    </>
  )
}

export default Home;
