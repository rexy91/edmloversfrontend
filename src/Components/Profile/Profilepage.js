import React from 'react'
import {useSelector} from 'react-redux'

export default function Profilepage() {

    // Agrument of the callback is the current Redux state, just like mstp.
    const user = useSelector(state => console.log(state.userReducer))

     return (
        <div>
            <h3>Profile Page</h3>
            <button class='uploadPost'>New Post</button>
        </div>
    )
}



