import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hello world, my name is George  </strong> and this is my portfolio. If you want a responsive and cutting edge website, this is your one-stop-shop.
                    {/* Check out 
                    my <a href="https://www.linkedin.com/in/george-rohn/">LinkedIn</a>.  */}</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
