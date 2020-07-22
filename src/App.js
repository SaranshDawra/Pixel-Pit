import React, { Component } from "react";
import Search from "./components/Search/Search";
import ImageBox from "./components/ImageBox/ImageBox";
import classes from "./App.module.css";
import axios from "axios";
import { API_KEY } from "./api";

class App extends Component {
    state = {
        value: "",
        items: [],
        query: "",
        isSubmit: false,
    };

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                query: prevState.value,
                isSubmit: true,
            };
        });
    };

    componentDidUpdate() {
        if (this.state.isSubmit) {
            axios
                .get(
                    `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.query}&image_type=photo&per_page=31`
                )
                .then((result) => {
                    // console.log("Result Array: ", result.data);
                    if (result.data.hits.length !== 0) {
                        this.setState({
                            items: result.data.hits,
                        });
                    } else {
                        alert("Sorry No Item Found");
                    }
                })
                .catch((err) => console.log(err));
            this.setState({
                isSubmit: false,
            });
        }
    }

    componentDidMount() {
        axios
            .get(
                `https://pixabay.com/api/?key=${API_KEY}&q=dog&image_type=photo&per_page=31`
            )
            .then((result) => {
                console.log(result.data);
                this.setState({
                    items: result.data.hits,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={classes.App}>
                <Search
                    submit={this.onSubmitHandler}
                    changed={this.handleInputChange}
                    value={this.state.value}
                />
                <ImageBox items={this.state.items}/>
            </div>
        );
    }
}

export default App;
