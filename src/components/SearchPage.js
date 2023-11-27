import React, {Component} from "react";
import {MainSearchbar, GetHelp, Result} from "./UserSideComponents.js";
import {ArticleList} from "./ArticleList.js";
import { Link } from 'react-router-dom';

export const SearchPage = (props) => {
    //Placeholders!!!
    //Replace this with something that searches the database and returns an array/object with the results
    const title = "Placeholder"
    const text = "A non-SSO Zoom account with email and password sign-in. If you sign in to zoom through a 3rd-party platform such as Facebook"
    const results = 8;

    let params = new URLSearchParams(props.location.search);
    const lastSearch = params.get("query");

    return(
        <div className = "userPage">
            <MainSearchbar/>
            <div className = "pageContent">
                {/* This should be replaced with a loop that goes through the database for results*/}
                <section>
                    {/*<p>{results} results for "{lastSearch}"</p>*/}
                    <ArticleList/>
                </section>
                <GetHelp />
            </div>
        </div>
    );
}

    //<ArticleList/>