import React from 'react'
import "../Navbar/Navbar.scss"

function Navbar() {

    return (
        <div className="navbar__style">
           <h1 className= "navbar-header__style">DASHBOARD</h1>
           <ul className="navbar-list">
            <li className="navbar-list__style">Overview</li>
            <li className="navbar-list__style">Tickets</li>
            <li className="navbar-list__style">Ideas</li>
            <li className="navbar-list__style">Contacts</li>
            <li className="navbar-list__style">Agents</li>
            <li className="navbar-list__style">Articles</li>
            <li className="navbar-list__style">Settings</li>
            <li className="navbar-list__style">Subscription</li>
           </ul>
        </div>
    )
}

export default Navbar