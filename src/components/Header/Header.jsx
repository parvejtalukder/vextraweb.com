import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import Logo from '../Logo/Logo';
import OneButton from '../../utils/Button/OneButton';


const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            if(window.screenY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    },[])

    const links = 
        <>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#004AAD] font-bold transition-all" : "hover:text-[#004AAD] transition-all"}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#004AAD] font-bold transition-all" : "hover:text-[#004AAD] transition-all"}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#004AAD] font-bold transition-all" : "hover:text-[#004AAD] transition-all"}>About</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? "text-[#004AAD] font-bold transition-all" : "hover:text-[#004AAD] transition-all"}>Pricing</NavLink>
        </>;


    return (
            <div className={`navbar bg-base-100 shadow-sm lg:rounded-4xl lg:px-5 lg:top-1 ${scroll ? "bg-base-100/95 backdrop-blur-md" : "bg-base-100/95"}`}>
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
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
                <OneButton text={"Contact Us"}></OneButton>
              </div>
            </div>
    );
};

export default Header;