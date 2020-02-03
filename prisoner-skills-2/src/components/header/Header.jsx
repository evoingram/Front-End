import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
   return (
    <div className="options">
        <Link className="option">
            LOG IN
        </Link>
        <Link className="option">
            CONTACT
        </Link>
    </div>
   );
};

export default Header;