import React, {useState, useEffect} from 'react'
import axios from "axios"
import Question from "../Question/Question"
import ScorePage from "../ScorePage/ScorePage"
import {Redirect} from "react-router-dom"
import "../MainPage/MainPage.scss"


function MainPage(){

    const [question, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(res => res.data)
        .then(data => {
          setQuestions(data.results)
          })
    }, [])

    const handleAnswer = (answer) => {
        const newIndex = currentIndex +1;
        setCurrentIndex(newIndex);
        if(answer===question[currentIndex].correct_answer){
            setScore(score + 1);
        }
        if(newIndex >= question.length){
            setGameEnded(true)
        }
    }

    if (gameEnded===true){
        <Redirect from="/trivia" to="/result"/>
    }
       
    return gameEnded ? (
 
        <ScorePage score={score}/> 
      
        ):(
            question.length > 0 ? (
        
        <div className="container">
          
           <Question 
           data ={question[currentIndex]} handleAnswer={handleAnswer}/>
           
        </div>
    ) : 
        <h2 className="loading__style">Loading</h2>
    
    )
}


export default MainPage
