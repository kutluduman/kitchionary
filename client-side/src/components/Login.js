import React from 'react';
import ReactDOM from 'react-dom';
import LoginTemplate from './LoginTemplate';


const Login = () => {
  return (
  <React.Fragment>
    {/* <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
        <a href="#"><span aria-hidden="true">&times;</span></a>
        </div> */}
       <LoginTemplate />
      {/* </div>
    </div> */}
  </React.Fragment>, document.body
  )
}

export default Login;