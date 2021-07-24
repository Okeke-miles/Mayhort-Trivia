import React from 'react'
import {Link} from "react-router-dom"
import "../ScorePage/ScorePage.scss"

function ScorePage({score, playAgain}) {
    return (
        <div className="score__board">
            <h1 className="score__card">Your score is {score}!!! </h1>
            <Link to="/">
            <button className="playagain__button" onClick={playAgain}>Play again!</button>
            </Link>
        </div>
    )
}

export default ScorePage
