import React, { useState } from 'react';
import LoginScreen from "../Presentationals/Login/LoginScreen";

import { data_api } from "../api/endpoints";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = (props) => {

	let navigate = useNavigate();

	const [formData, setFormData] = useState({
    email: '',
		password: ''
	});
	
	const [disabled, setDisabled] = useState(false);

	const handleFormData = (e) => {
		console.log(e.target.name, e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
  };

	const handleLogin = () => {
		setDisabled(true);
		const data = {
			email: formData.email, 
			password: formData.password
		}
		if(data.email === '' || data.password === ''){
			swal('error: empty field');
			setDisabled(false);
		}
		else{
			axios.post(data_api.url_post_login, {
				email: data.email, 
				password: data.password
			})
			.then(res => {
				if(res.status === 200){
					// save token in localStorage
					localStorage.setItem('token', res.data.token);
					navigate('/');
				}
				setDisabled(false);
			})
			.catch(err => {
				swal(err.response.data.error);
				console.log(err.response.data.error);
				setDisabled(false);
			})	
		}
  };

	return(
		<LoginScreen 
			handleFormData={handleFormData}
			handleLogin={handleLogin}
			is_disabled={disabled}
		/>
	)
}

export default Login;
