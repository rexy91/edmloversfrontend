import React, { Component } from 'react';
import './Navbar.scss'

// Components
import ModalLogin from '../Login/ModalLogin'
import ModalSignup from '../Signup/ModalSignup'

class Navbar extends Component {



    logOutOptionTenery = () =>{
      return  localStorage.getItem('token') ? <li>Log Out</li> : null
    }

    render() {
        return (
            <div>
                <nav className = 'navbar'>
                    <ul>
                        <li>Home</li>
                        {/* <li onClick={this.handleSignup}>Sign Up</li> */}
                        <li><ModalLogin/></li>
                        <li><ModalSignup/></li>
                        {this.logOutOptionTenery()}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;