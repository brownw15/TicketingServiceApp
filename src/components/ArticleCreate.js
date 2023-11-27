import React, {Component} from "react";
import {MainSearchbar, GetHelp, PopularCard} from "./UserSideComponents.js";
import {ArticleEditor} from "./ArticleEditor.js";

/* This is a placeholder for styling purposes. It is not connected to the database
 * Articles should be wrapped in an article tag
 * The text inside needs to be escaped, too
*/



export class ArticleCreate extends Component {

    render() {
        return(
            <div className = "dashboardPage">
                <div className = "editor">
                    <h3>Article Editor</h3>
                    <p>Styles can be applied to your text via the content selection toolbar. Press the "publish" button once all changes have been completed. **Content must be typed then selected to manage**</p>
                    <ArticleEditor/>
                </div>
            </div>
        );
    }
}
