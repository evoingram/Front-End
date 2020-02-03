import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
   return (
    <div className="options">
        <Link className="option" to="/login">
            LOG IN
        </Link>
        {/* <Link className="option" >
            CONTACT
        </Link> */}
    </div>
   );
};

export default Header;