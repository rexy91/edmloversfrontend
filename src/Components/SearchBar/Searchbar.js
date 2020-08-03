import React from 'react'
import './Searchbar.scss'
import Carousel from 'react-elastic-carousel'

//Redux
import {useSelector} from 'react-redux'

//Components
import LandingPageUserCard from '../LandingPageUsers/LandingPageUserCard'

export default function Searchbar() {
    // Get all users from redux store
    // State consists userReducer and followerReducer, since we combined reducers.

    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:550, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:4},
    ]
    
    const allUsers = useSelector(state => state.userReducer.allUsers)

    
    // React renders components first before componentDidmount, so allUsers will first be undefined.

    const usersMapper = allUsers?.map(singleUser => {
        console.log(singleUser)
        return <LandingPageUserCard singleUser = {singleUser} key={singleUser.id}/>
    })
    return (
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search for a user"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <div class='usersScollWrapper'>
                        {usersMapper}
                </div>
            </div>
    )
}

