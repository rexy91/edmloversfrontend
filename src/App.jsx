import React, {Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage'

class App extends Component{
  
  componentDidMount(){
      console.log(localStorage.getItem())
  }
  render(){
      return(
        <div>
          <LandingPage/>
        </div>
      )
  }
}


export default App
