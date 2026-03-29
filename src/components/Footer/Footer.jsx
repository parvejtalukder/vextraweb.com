import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <section className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 rounded-t-2xl">
              <nav>
                <h6 className="footer-title text-[#004AAD] font-bold">Services</h6>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">E-commerce Solutions</a>
                <a className="link link-hover">Maintenance & Support</a>
                <a className="link link-hover">Cloud & DevOps Services</a>
              </nav>
              <nav>
                <h6 className="footer-title text-[#004AAD] font-bold">Company</h6>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact us</a>
                <a className="link link-hover">Our Updates</a>
              </nav>
              <nav>
                <h6 className="footer-title text-[#004AAD] font-bold">Legal</h6>
                <a className="link link-hover">Disclaimer</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </section>
            <section className="footer sm:footer-horizontal footer-center bg-[#004AAD] text-base-content p-4">
              <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <Link to={"/"}>VextraWeb</Link></p>
              </aside>
            </section>
        </div>
    );
};

export default Footer;