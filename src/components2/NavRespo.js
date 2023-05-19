import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Badge from '@mui/material/Badge';

function NavRespo() {
    const myCart = useSelector(store => store.cart)
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggle");

    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')

        // Toggleicon

        toggleIcon === 'nav_toggle' ? setToggleIcon('nav_toggle toggle') : setToggleIcon('nav_toggle')
    }

    return (
        <div className='nav2'>
            <h3 className="nav_brand">Sounds</h3>
            <ul className={active}>
                <li className='nav_item'> <Link to='/' href='#' className='nav_link'>Home</Link></li>
                <li className='nav_item'> <Link to='/shop' href='#' className='nav_link'>Shop</Link></li>
                <li className='nav_item'> <Link to='/blog' href='#' className='nav_link'>Blog</Link></li>
                <li className='nav_item'> <Link to='/about' href='#' className='nav_link'>About</Link></li>
                <li className='nav_item'> <Link to='/contact' href='#' className='nav_link'>Contact</Link></li>
                <li className='nav_item' id='chart'> <Link to='/cart'><FaShoppingCart />
                    <Badge badgeContent={myCart.length} color="primary">
                    </Badge></Link></li>
            </ul>


            <div id="mobile">
                <Link to='/cart'><FaShoppingCart />
                    <Badge badgeContent={myCart.length} color="primary">
                    </Badge></Link>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </div>
    )
}

export default NavRespo
