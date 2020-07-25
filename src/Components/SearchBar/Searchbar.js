import React from 'react'
import './Searchbar.scss'

//Components
import LandingPageUserCard from '../LandingPageUsers/LandingPageUserCard'

export default function Searchbar() {
    return (
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search for a user"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <div class='usersScollWrapper'>
                        <LandingPageUserCard/>
                </div>
            </div>
    )
}
