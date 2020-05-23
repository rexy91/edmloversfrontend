import React, {Component} from 'react'
import SideNavBar from './SideNavBar'
import './LandingPage.css'
import ModalLogin from '../Login/ModalLogin'

export class LandingPage extends Component{
    render(){
        return(
            <div>
                <h1> Title gi</h1>
                <h1> Landing Page</h1>
                <ModalLogin/>
            </div>
        )
    }
}

export default LandingPage 