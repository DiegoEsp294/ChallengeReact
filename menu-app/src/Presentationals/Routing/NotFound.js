import '../../css/NotFound.css';
import { useState, useEffect } from 'react';

const NotFound = (props) => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    props.handleToLogin();
  },[token]);

  return (
    <div className="container-fluid">
      <div className="NotFound" style={{paddingBlock:'10%'}}>
        <h3>404 not found</h3>
      </div>
    </div>
  );
}
  export default NotFound;
