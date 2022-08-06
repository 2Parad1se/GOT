import './header.css'
import React from "react";

const Header = () => {
    return (
        <section className="header">
            <div> Game of The Throne DB</div>
            <div className="header_links">
                <a href="#" className="header_link">Characters</a>
                <a href="#" className="header_link">Houses</a>
                <a href="#" className="header_link">Books</a>
            </div>
        </section>
    )
}

export default Header;