import React, { Component } from "react";
import classes from "./ImageBox.module.css";

class ImageBox extends Component {
    render() {
        return (
            <div className={classes.ImageBox}>
                <ul className={classes.List}>
                    {this.props.items.map((item) => {
                        const tag = item.tags.split(',');
                        return (
                            <li key={item.id} className={classes.ListEl}>
                                <img
                                    className={classes.Image}
                                    width={item.webformatWidth / 2}
                                    height={item.webformatHeight}
                                    src={item.webformatURL}
                                    alt={tag[0]}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ImageBox;
