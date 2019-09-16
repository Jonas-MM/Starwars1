import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper  blue-grey darken-2">
            <div className="container">
                <a className="brand-logo">StarWars Planets</a>

                <ul className="right">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
