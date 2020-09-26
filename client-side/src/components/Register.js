import React from 'react';
import ReactDOM from 'react-dom';
import RegisterTemplate from './RegisterTemplate';


const Register = ({ registerShowing, hide }) => registerShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <RegisterTemplate/>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Register