import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>

            <nav className='navbar'>
                <Link to='/home'>Home</Link>
                <Link to='/orderReview'>Review</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};
export default Navbar;