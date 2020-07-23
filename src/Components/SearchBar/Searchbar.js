import React from 'react'
import './Searchbar.scss'

export default function Searchbar() {
    return (
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search for a user"/>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
    )
}
