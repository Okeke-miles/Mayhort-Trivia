import React from 'react'
import "../../App.scss"
import "../Question/Question.scss"

function Question({ handleAnswer, data:{correct_answer, incorrect_answers, question}}) {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5);
   
    return (
        
        <div className="question__component">
            <h1 className="title">MAYHORT TRIVIA</h1>
            <h2 className="question__style" dangerouslySetInnerHTML={{__html: question}}/>
            <div className="button__container">
                {shuffledAnswer.map(answer =>(
                    <button className= "answer__style"
                    onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                ))}
            </div>
        </div>
    )
}

export default Question
