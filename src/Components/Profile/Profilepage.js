import React from 'react'
import {useSelector} from 'react-redux'
import NewPost from './NewPost/NewPost'
import '../Profile/Profilepage.scss'

export default function Profilepage() {

    // Agrument of the callback is the current Redux state, just like mstp.
    // const user = useSelector(state => console.log(state.userReducer))

     return (
        <div>
            <h3>Profile Page</h3>
            <NewPost/>
            <div className='container1'>
                    <div className='box1'>
                            <p>sdfljdsljglsdjfjdslgjsdgjfdsjfds</p>
                    </div>
                    <div className='box2'>
                            <p>sdfljdsljglsdjfjdslgjsdgjfdsjfds</p>
                    </div>
            </div>
        </div>
    )
}



