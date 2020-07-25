import React, { Component } from "react";
import FileSaver from "file-saver";
import classes from "./ImageBox.module.css";
import { FiDownload } from "react-icons/fi";

class ImageBox extends Component {
    downloadHandler = (url, filename) => {
        FileSaver.saveAs(url, filename);
    };

    render() {
        return (
            <div className={classes.ImageBox}>
                <ul className={classes.List}>
                    {this.props.items.map((item) => {
                        const tag = item.tags.split(",");
                        return (
                            <li key={item.id} className={classes.ListEl}>
                                <img
                                    className={classes.Image}
                                    width={item.webformatWidth / 2}
                                    height={item.webformatHeight}
                                    src={item.webformatURL}
                                    alt={tag[0]}
                                />
                                <div className={classes.ImageBoxIcon}>
                                    <span
                                        onClick={() =>
                                            this.downloadHandler(
                                                item.largeImageURL,
                                                tag[0],
                                            )
                                        }
                                        className={classes.Download}
                                    >
                                        <FiDownload className={classes.Icon} />
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ImageBox;
