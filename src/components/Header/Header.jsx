import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../Logo/Logo';
import TwoButton from '../../utils/Button/TwoButton';


const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    },[])

    const linkClass = ({ isActive }) => isActive ? "text-[#3391e7] font-bold" : "hover:text-[#3391e7] duration-300 transition-colors";

    const links = 
        <>
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
        </>;


    return (
            <div className={`navbar bg-surface shadow-sm lg:rounded-[50px] backdrop-blur-xl lg:px-5 lg:top-2 border border-white/5 ${scroll ? "shadow-[0_8px_30px_-12px_rgba(51,145,231,0.4)]" : ""}`}>
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-surface rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                    <li>
                      <NavLink to="/contact" className="hover:text-[#3391e7] transition-colors">Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <NavLink to={"/"}><Logo></Logo></NavLink>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-around gap-3 text-lg">
                  {links}
                </ul>
              </div>
              <div className="navbar-end">
                <Link to={"/contact"}>
                  <TwoButton text={"Hire Us"}></TwoButton>
                </Link>
              </div>
            </div>
    );
};

export default Header;