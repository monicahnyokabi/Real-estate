import React, { Component } from 'react'

export class Header extends Component {
    render() {
    return (
        <header>
        <div className="logo">Alpha rentals</div>

        <nav>
        <a href="#">Home</a>
            <a href="#">Adverts</a>
            <a href="#">About Us</a>
            <a href="#">Log in</a>
            <a href="#" className="register-btn">Register</a>
        </nav>

        </header>
    )
    }
}

export default Header