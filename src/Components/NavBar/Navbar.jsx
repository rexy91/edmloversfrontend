import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
//Redux
import{connect} from 'react-redux'

import './Navbar.scss'
// Components
import ModalLogin from '../Login/ModalLogin'
import ModalSignup from '../Signup/ModalSignup'

class Navbar extends Component {

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/')
        swal('','You have been logged out.','success')
    }

    logOutOptionTenery = () =>{
      return  localStorage.getItem('token') ? <li onClick={this.handleLogout}>Log Out</li> : null
    }
    logInOptionTenery = () => {
        return  localStorage.getItem('token') ? null:<li><ModalLogin/></li>
    }
    SignupOptionTenery = () => {
        return  localStorage.getItem('token') ? null:<li><ModalSignup/></li> 
    }
    ProfileOptionTenery = () => {
        return  localStorage.getItem('token') ? <li onClick={this.directProfile}>Profile</li> : null
    }
    directHome = () => {

        this.props.history.push('/')
    }
    directProfile = () => {
        const {id} =  this.props.currentUser
        this.props.history.push(`/profile/${id}`)
    }
    
    render() {
        return (
            <div>
                <nav className = 'navbar'>
                    <ul>
                            <li onClick={this.directHome}>Home</li>
                            {this.logInOptionTenery()}
                            {this.SignupOptionTenery()}
                            {this.ProfileOptionTenery()}
                            {this.logOutOptionTenery()}
                    </ul>
                </nav>
            </div>
        );
    }
}

const mstp = (state) => {
    
    return{
        currentUser:state.userReducer.user
    }
}

export default connect(mstp,null)(withRouter(Navbar))
