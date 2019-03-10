import React from 'react';
import './TweetInput.css';

const TweetInput = (props) => {
    let red = props.details.tweetCount > props.details.tweetLimit ? props.details.limitReached : "black";
    let completionPercent = props.details.tweetCount * (100 / props.details.tweetLimit);
    let colorOpacity = completionPercent / 100;
    let borderStyle = {
        border: `5px solid rgba(255,0,0,${colorOpacity})`,
        transition: "all 1s"
    };
    return (
        <>
            <textarea style={borderStyle} rows="4" cols="50" onChange={props.tweetChange} />
            <p>
                <span style={{color:`${red}`}}>{props.details.tweetCount}</span>/240
            </p>
        </>
    )
}

export default TweetInput;