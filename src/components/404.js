import React from "react";

export const NotFound = () => {
    return(
        <div className = "notfound">
            <h1>404</h1>
            <p>It looks like that page doesn't exist</p>
            <p><a href="javascript:history.back()">Go back</a></p>
        </div>
    )
}
