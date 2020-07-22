import React from 'react'
import {useSelector} from 'react-redux'
import NewPost from './NewPost/NewPost'
import '../Profile/Profilepage.scss'

import testProfilePic from '../../photos/IMG_3928.jpg'

export default function Profilepage() {

    // Agrument of the callback is the current Redux state, just like mstp.
    // const user = useSelector(state => console.log(state.userReducer))

     return (
        <div className='profilePage'>
            <h3>Profile Page</h3>
            <NewPost/>
            <div className='container1'>
                    <div className='box1'>
                            <button>Edit Profile</button>
                            <img id='profilePicIcon'
                            src={testProfilePic}/>
                            <p>fjfjfjsjfjsdjsdf</p>
                    </div>
                    <div className='box2'>
                            <p>sdfljdsljglsdjfjdslgjsdgjfdsjfds</p>
                    </div>
            </div>
        </div>
    )
}




