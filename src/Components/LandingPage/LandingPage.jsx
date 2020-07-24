import React, {Component} from 'react'
import SideNavBar from './SideNavBar'
import './LandingPage.css'
import ModalLogin from '../Login/ModalLogin'
import ModalSignup from '../Signup/ModalSignup'
import Searchbar from '../SearchBar/Searchbar'

export class LandingPage extends Component{
    render(){
        return(
            <div>
                <h1> Social Media App</h1>
                <Searchbar/>
            </div>
        )
    }
}

export default LandingPage 