import React, { Component } from "react";
import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

class Search extends Component {

    render() {
        return (
            <div className={classes.Hero}>
                <div className={classes.Overlay}></div>
                <div className={classes.Top}>
                    <h1>Stunning free stock images</h1>
                    <h2>High quality stock images and illustrations shared by our talented community</h2>
                </div>
                <div className={classes.Form}>
                    <form onSubmit={this.props.submit}>
                        <span className={classes.Icon}>
                            <BsSearch />
                        </span>
                        <input
                            value={this.props.value}
                            onChange={this.props.changed}
                            className={classes.Input}
                            placeholder="Search Free Images"
                        />
                        <p className={classes.Popular}>
                            Popular Images: nature, wallpaper, business, food,
                            computer, summer, flowers, love, dog, flower, cat,
                            beach
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;
