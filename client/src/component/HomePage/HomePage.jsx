import React from 'react'
import {Link} from "react-router-dom"
import "../../App.scss"
import '../HomePage/HomePage.scss'


function HomePage() {
    return (
    <section className="home" >
        <div className="home-container__style">
            <h1 className="home__title">Test Your Knowledge <span className="emoji">🤔</span></h1>
            <Link to="/trivia">
                <button className="homepage__btn-style">Proceed</button>
            </Link>
        </div>
    </section>
    )
}

export default HomePage
