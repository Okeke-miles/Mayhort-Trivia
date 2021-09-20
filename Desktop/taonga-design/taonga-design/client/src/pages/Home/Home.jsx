import React from 'react'
import "../Home/Home.scss"
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className="home-background__style">
            <div className="home-container__style">
                <div className="home-width-container__style">
                    <div className="home-header__style">
                        <p className="home-admin__style">Admin Dashboard</p>
                        <h1 className="home-dashboard__style">Log In to the Dashboard</h1>
                        <p className="prompt-desc__style">Enter your email and password below</p>
                    </div>
                    <div className="home-form-container__style">
                        <form className="home-form__style">
                            <label className="email-label__style">EMAIL</label>
                            <input className="email-input__style" type="text" id="email" name= "email"  placeholder="Email address"/>
                            <label className="password-label__style">PASSWORD</label>
                            <input className="password-input__style" type="text" id="password" name= "password"  placeholder="Password"/>
                            <button className="home-button__style">Log In</button>
                        </form>
                    </div>

                    <div className="create-account__style">
                        <p className="create-desc__style">Don't have an account?</p>
                        <NavLink className="nav-list__item" to="/dashboard">
                            Sign up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
