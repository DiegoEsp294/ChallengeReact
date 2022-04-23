import '../../css/NotFound.css';
import { useEffect } from 'react';

const NotFound = (props) => {

  let token = localStorage.getItem('token');

  useEffect(() => {
    props.handleToLogin();
  },[token, props]);

  return (
    <div className="container-fluid">
      <div className="NotFound" style={{paddingBlock:'10%', color:'white'}}>
        <h3>404 NOT FOUND</h3>
      </div>
    </div>
  );
}
  export default NotFound;
