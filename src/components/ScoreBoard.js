import React from 'react'

const ScoreBoard = ({ score }) => {
    return (
        <div className='scoreboard' style={{marginLeft:"10px"}}>
            <h2>{score}</h2>
        </div>
    )
}

export default ScoreBoard