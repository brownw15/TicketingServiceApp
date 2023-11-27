import React from "react";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <p>Red Ventures Help Desk</p>
            <p><Link to="/landing">Search the Knowledge Base</Link></p>
            <p><Link to="/create">Submit a help ticket</Link></p>
            <p><Link to="/dashboard">Go to my dashboard</Link></p>
            <p>&copy; Red Ventures {new Date().getFullYear()}</p>
        </footer>
    )
}
