import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return(
    <div className="tweetBox">
    <form>
        <div className="tweetBox_input">
                    <Avatar src="https://i.ytimg.com/vi/vNytYjl-xsY/maxresdefault.jpg" />
                    <input placeholder="What are you doing" type="text" />

                </div>
                <input
                    className="tweetBox_imageInput"
                    placeholder="Enter image url"
                    type="text"
                    />


            <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;