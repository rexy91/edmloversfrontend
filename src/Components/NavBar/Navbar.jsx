import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './Navbar.scss'
// Components
import ModalLogin from '../Login/ModalLogin'
import ModalSignup from '../Signup/ModalSignup'

class Navbar extends Component {

    logOutOptionTenery = () =>{
      return  localStorage.getItem('token') ? <li>Log Out</li> : null
    }

    directHome = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <nav className = 'navbar'>
                    <ul>
                            <li onClick={this.directHome}>Home</li>
                            <li><ModalLogin/></li>
                            <li><ModalSignup/></li>
                            {this.logOutOptionTenery()}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navbar)