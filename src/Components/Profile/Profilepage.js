import React from 'react'
import {useSelector} from 'react-redux'

import NewPost from './NewPost/NewPost'
import PostContent from './PostContent/PostContent'
import '../Profile/Profilepage.scss'

import testProfilePic from '../../photos/IMG_3928.jpg'

export default function Profilepage() {

    // const currentUser = useSelector(state => state.userReducer.user)
    const currentUser = useSelector(state => state.userReducer.user)

    // Agrument of the callback is the current Redux state, just like mstp.
    // const user = useSelector(state => console.log(state.userReducer))

     return (
        <div className='profilePage'>
            <h3>Profile Page</h3>
            <NewPost/>
            <div className='container1'>
                    <div className='box1'>
                        <div className='box1-Content'>
                            <img id='profilePicIcon'
                            src={testProfilePic}/>
                            <button>290 Fllowers</button>
                            <button>100 Fllowings</button>
                            <p id='profileUsername'>{currentUser?.username}</p> 
                            <p id='bio' >About: kdsfldjslfjslfjlsdjflsjkhkhkjhkhkhkhhkhkhkjhkhjljlkjlkjkjjjljlkjlkkljljljlkdfdsjflsdl jsdlfj jjljljjlkjljkljjsdlfjs jlsdjf fjsdlfjlsdjflsdj</p>
                        </div>
                    </div>
            </div>
            <PostContent/>
        </div>
    )
}




