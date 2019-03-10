import React from 'react';

import './TweetButton.css';

const TweetButton =(props)=>{
    return(
        <button className="btn tweet" onClick={props.submit}>tweet</button>
    )
}

export default TweetButton;