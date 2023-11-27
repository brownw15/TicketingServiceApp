import React, {Component} from "react";
import {Link} from "react-router-dom";

//A component for creating the main searchbar
export const MainSearchbar = (props) => {
    return(
        <section className = "search">
            <form method="get" action="/search">
                <input type="search" id="mainSearchbar" name="query" placeholder="What can we help you with?" required/>
                <input type="submit" value="Search" />
            </form>
        </section>
    );
}

//Creates the bottom help buttons
export const GetHelp = () => {
    return(
        <section className="help">
            <h3>Can't find what you're looking for?</h3>
            <form method="get" action="/create">
                <input type="submit" value="Submit a help ticket" />
            </form>
            <p>Or call <a href="tel:866-456-411">(866) 456-4111</a></p> {/*Phone number for RV help desk*/}
        </section>
    );
}

//A component for creating category cards.
export class CategoryCard extends Component {
    render() {
        return(
            <Link to={this.props.href}>
                <div className="card--category">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.image} />
                </div>
            </Link>
        );
    }
}

//A component for creating the popular solutions cards
//This is a placeholder, needs to tie into the solution database somehow
export class PopularCard extends Component {
    render() {
        return(
            <div className="card--popular">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <Link to={this.props.href}>Read more</Link>
            </div>
        );
    }
}

export class Result extends Component {
    render(){
        return(
            <div className="searchResult">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <Link to={this.props.href}>Read more</Link>
            </div>
        );
    }
}
