import React from 'react'
import {useSelector} from 'react-redux'

export default function FollowingsPage() {
    const currentUser = useSelector(state => state.userReducer.user)
    
    return (
        <div>   
            <h4>People you are following</h4>
        </div>
    )
}
