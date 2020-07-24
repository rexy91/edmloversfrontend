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

                <div class='usersScollWrapper'>
                        <div class='item'> user 1 </div>
                        <div class='item'> user 2</div>
                        <div class='item'> user 3</div>
                        <div class='item'> user 4</div>
                        <div class='item'> user 5</div>
                        <div class='item'> user 6</div>
                        <div class='item'> user 7</div>
                        <div class='item'> user 8</div>
                </div>
            </div>
    )
}
