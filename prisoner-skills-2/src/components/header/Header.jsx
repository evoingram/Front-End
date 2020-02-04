import React from 'react'
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = () => {
   return (
    <div className="header">
        <div className="options">
            <Link className="option" to="/login">
                SIGN UP
            </Link>
            {/* <Link className="option" >
                CONTACT
            </Link> */}
        </div>
    </div>
   );
};

export default Header;