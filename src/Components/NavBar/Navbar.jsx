import React, { Component } from 'react';
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Signin</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;