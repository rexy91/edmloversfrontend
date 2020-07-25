import React from 'react'
import './LandingPageUserCard.scss'
//Redux

// singleUser props is being passed from upper component
// Destruct singleUser to get the user.

export default function LandingPageUserCard({singleUser}) {

    return (
        <div>
            <div class='item'>
                <img src='https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'></img>
            </div>
        </div>
    )
}
