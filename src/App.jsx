import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage'
import {Switch,Route,Link} from "react-router-dom";

//Redux
import {connect} from 'react-redux'
import {saveUserToState} from './Redux/actions'

// Components
import Searchbar from './Components/SearchBar/Searchbar'
import Profilepage from './Components/Profile/Profilepage'
import Navbar from './Components/NavBar/Navbar'

class App extends Component{
  
  componentDidMount(){
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.token) {
          localStorage.setItem('token',resp.token)
          this.props.saveUserToState(resp)
        }
      })
    }}

  render(){
      return(
        <div>
          <Navbar/>
          <Searchbar/>
          <Switch>
              <Route exact path = '/' component = { LandingPage } />
              <Route exact path = '/profile/:id' component={ Profilepage } />
          </Switch>
        </div>
      )
  }
}

export default connect(null, {saveUserToState})(App)
