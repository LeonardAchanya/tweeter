import React, { Component } from 'react';

import './Twitter.css';

import TweetInput from './TweetInput/TweetInput';
import TweetButton from './TweetButton/TweetButton';

class Twitter extends Component {

    state = {
        tweetInput: null,
        tweetCount: 0,
        tweetLimit: 10,
        limitReached: "red"
    };

    tweetClicked = () => {
        console.log("tweeted");
    };

    tweetChange = e => {
        this.setState(
            {
                tweetInput: e.target.value
            },
            () => this.tweetCount()
        );
    };
    
    tweetCount = () => {
        let tweet = this.state.tweetInput;
        let count = tweet.length;
        this.setState({
            tweetCount: count
        });
    };

    render() {
        return (
            <>
                <h2>Welcome to Tweeter</h2>
                <div className="twitter">
                    <TweetInput details={this.state} tweetChange={this.tweetChange} />
                    <TweetButton submit={this.tweetClicked} />
                </div>
            </>
        )
    }
}

export default Twitter;