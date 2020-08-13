import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage'
import {Switch,Route,Link} from "react-router-dom";

//Redux
import {connect} from 'react-redux'
import {saveUserToState, saveAllUsers} from './Redux/actions'

// Components
import FollowingsPage from './Components/FollowingsPage/FollowingsPage'
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
    }
  
    //Fetch all users:
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => {
        this.props.saveAllUsers(users)
    })
  }

    // searchBarTernery = () => {
    //   return localStorage.getItem('token') ? <Searchbar/> : null
    // }
  render(){
      return(
        <div>
          <Navbar/>
          {/* {this.searchBarTernery()} */}
          <Switch>
              <Route exact path = '/' component = { LandingPage } />
              <Route exact path = '/profile/:id' component={ Profilepage } />
              <Route exact path = '/:id/followings' component = { FollowingsPage }/>
          </Switch>
        </div>
      )
  }
}

export default connect(null, {saveUserToState, saveAllUsers})(App)
