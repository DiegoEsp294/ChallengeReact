import React, { useState, useEffect } from 'react';
import LoginScreen from "../Presentationals/Login/LoginScreen";

import { postLogin } from "../api/services";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = (props) => {

	let navigate = useNavigate();

	const [token, setToken] = useState(localStorage.getItem('token'));
	const [formData, setFormData] = useState({
    	email: '',
		password: ''
	});
	const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

	const handleFormData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
  };

	const handleLogin = () => {
		//check token
		setToken(localStorage.getItem('token'));

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
			
			//update load
			setLoading(true);
			localStorage.setItem('token', 'asdsad');
			navigate('/');
			setDisabled(false);

/* 			axios.post(postLogin(), {
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

				//update load
				setLoading(false);

			})
			.catch(err => {
				swal(err.response.data.error);
				setDisabled(false);

				//update load
				setLoading(false);

			})	
 */		}
  };

	useEffect(() => {
    props.handleToLogin();
  },[token]);

	return(
		<LoginScreen 
			handleFormData={handleFormData}
			handleLogin={handleLogin}
			is_disabled={disabled}
			loading={loading}
		/>
	)
}

export default Login;
