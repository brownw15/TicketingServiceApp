import React, {Component} from "react";
import {ArticleList, PopularList} from "./ArticleList.js";
import {MainSearchbar, CategoryCard, PopularCard, GetHelp} from "./UserSideComponents.js";
import iconHardware from "../images/icons/hardware.svg";
import iconSoftware from "../images/icons/software.svg";
import iconNetwork from "../images/icons/network.svg";
import iconAccount from "../images/icons/account.svg";

const placeholderText = "A non-SSO Zoom account with email and password sign-in. If you sign in to zoom through a 3rd-party platform such as Facebook";

export const LandingPage = () => {
    return (
        <div className="userPage"> {/* All non-dashboard pages should use pageContent for grid purposes */}
            <MainSearchbar />
            {/* The categories */}
            <div className="pageContent">
                <section className = "category">
                    <h3>Or browse by category</h3>
                    <CategoryCard href="/search?query=Hardware" title="Hardware" image={iconHardware}/>
                    <CategoryCard href="/search?query=Software" title="Software" image={iconSoftware}/>
                    <CategoryCard href="/search?query=Network" title="Network" image={iconNetwork}/>
                    <CategoryCard href="/search?query=Account" title="Account" image={iconAccount}/>
                </section> 
                {/* And last but not least, the popular articles section */}
                <section className = "popular">
                    <h3>Popular Solutions</h3>
                    <PopularList/>
                </section>
                <GetHelp />
            </div>
        </div>
    );
}
