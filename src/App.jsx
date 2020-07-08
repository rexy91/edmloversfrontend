import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage'
import {Switch,Route,Link} from "react-router-dom";


// Components
import Profilepage from './Components/Profile/Profilepage'

class App extends Component{
  
  componentDidMount(){
      
  }

  render(){
      return(
        <div>
          <LandingPage/>
          <Switch>
              <Route path='/profile/:id' component={ Profilepage } />
          </Switch>
        </div>
      )
  }
}


export default App
