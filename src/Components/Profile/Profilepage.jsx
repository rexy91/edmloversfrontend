import React, {Component} from 'react'
import {connect} from 'react-redux'

class Profilepage extends Component{
    
    render(){
        console.log(this.props.loggedInUser)
        return(
            <div>
                <h3>Profile Page</h3>
                <button class='uploadPost'>New Post</button>
                
            </div>
        )
    }
}

const mstp = (appState) => {
    //Get the user obejct from store and save it as loggedInUser.
    return{
    loggedInUser: appState.user}
}

export default connect(mstp)(Profilepage)