import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';


import { closeModal, openModal } from "../../actions/modal_actions";
import Login from '../../components/session_form/login_form_container'
import Signup from '../../components/session_form/signup_form_container'


const mapStateToProps = state => {
    return {

        modal: state.ui.modal,
     
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
    };
};







function Modal(props){


    if (!props.modal) {
        return null
    }

    if (props.modal.modal === "") return null;

     
    const signupModal = (
        <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <div id="xmodal-2">  <span className="xmodal-click" onClick={() => props.closeModal()}><i class="fas fa-times"></i></span> </div>

            <Signup/>

        </div>

    )


    const loginModal = (
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div id="xmodal">  <span className="xmodal-click" onClick={() => props.closeModal()}><i class="fas fa-times"></i></span> </div>

            <Login/>
        
        </div>


    )


    let selectedModal = null;

    if(props.modal.modal === "signupModal") selectedModal = signupModal;
    if(props.modal.modal === "loginModal") selectedModal = loginModal;


    return (

        <div className="modal-backdrop" onClick={props.closeModal}>
            {selectedModal}
        </div>

    )






}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));

