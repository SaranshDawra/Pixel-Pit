import React, { Component } from "react";
import ItemNotFoundImg from "../../assets/itemnotfound.svg";
import classes from "./ImageNotFound.module.css";

class ImageNotFound extends Component {
    render() {
        return (
            <div className={classes.ImageNotFound}>
                <h1 className={classes.Title}>It Looks like you are lost</h1>
                <img
                    src={ItemNotFoundImg}
                    alt="Item Not Found"
                    className={classes.Image}
                />
                <div className={classes.Message}>
                    <h3>
                        Well, that's not the one you are searching for.
                        <br />
                        Let's Try again.
                    </h3>
                </div>
            </div>
        );
    }
}

export default ImageNotFound;
