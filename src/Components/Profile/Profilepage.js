import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'

import NewPost from './NewPost/NewPost'
import PostContent from './PostContent/PostContent'
import EditProfileModal from '../EditProfileModal/EditProfileModal'

import '../Profile/Profilepage.scss'

import testProfilePic from '../../photos/IMG_3928.jpg'

function Profilepage(props) {

    const [profilePic, setProfilePic] = useState({})

    // const currentUser = useSelector(state => state.userReducer.user)
    const currentUser = useSelector(state => state.userReducer.user)

    const followingsPage = () => {

          const id = currentUser.id
          props.history.push(`/${id}/followings`)
    }
    
    const editProfilePic = () => {
        fetch(`http://localhost:3000/uploadProfilepic`, {
            method:'POST',
            headers: {
              'content-type':'application/json',
               accept:'application/json'
            },
            body: JSON.stringify(
              {
                test:'testing'
              }
            )
          })
          .then(res => res.json())
          .then(respond => {
                console.log(respond)
          })
    }

    const profileInputOnchange = () => {}

     return (
        <div className='profilePage'>
            <h3>Profile Page</h3>
            <NewPost/>
            <div className='container1'>
                    <div className='box1'>
                        <div className='box1-Content'>
                            <img id='profilePicIcon'
                            src={testProfilePic}/>
                            
                            {/* <input type="file" name="profilePic" onChange={profileInputOnchange} /> */}
                            <EditProfileModal/>
                            <br/>
                            <button>290 Fllowers</button>
                            <button onClick={followingsPage}>100 Fllowings</button>
                            <p id='profileUsername'>{currentUser?.username}</p> 
                            <p id='bio' >About: kdsfldjslfjslfjlsdjflsjkhkhkjhkhkhkhhkhkhkjhkhjljlkjlkjkjjjljlkjlkkljljljlkdfdsjflsdl jsdlfj jjljljjlkjljkljjsdlfjs jlsdjf fjsdlfjlsdjflsdj</p>
                        </div>
                    </div>
            </div>
            <PostContent/>
        </div>
    )
}


export default withRouter(Profilepage)



