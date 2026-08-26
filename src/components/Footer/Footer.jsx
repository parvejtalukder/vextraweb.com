import React from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';
import { COMPANY } from '../../lib/site';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div>
            <section className="grid gap-10 border-t border-white/10 py-14 px-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <Logo />
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                        {COMPANY.description}
                    </p>
                    <ul className="mt-4 space-y-1 text-sm">
                        <li>
                            <a href={`mailto:${COMPANY.email}`} className="link link-hover hover:text-[#3391e7]">
                                {COMPANY.email}
                            </a>
                        </li>
                        <li>
                            <a href={COMPANY.phoneHref} className="link link-hover hover:text-[#3391e7]">
                                {COMPANY.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a
                                href={COMPANY.whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link link-hover hover:text-[#3391e7]"
                            >
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <ul>
                    <li><h6 className="footer-title text-[#3391e7] text-lg font-semibold">Services</h6></li>
                    <li><Link className="link link-hover" to="/services">Web Application Development</Link></li>
                    <li><Link className="link link-hover" to="/services">E-commerce Solutions</Link></li>
                    <li><Link className="link link-hover" to="/services">Content & Media Platforms</Link></li>
                    <li><Link className="link link-hover" to="/services">UI/UX & Digital Strategy</Link></li>
                </ul>

                {/* Company */}
                <ul>
                    <li><h6 className="footer-title text-[#3391e7] text-lg font-semibold">Company</h6></li>
                    <li><Link className="link link-hover" to="/services">Services</Link></li>
                    <li><Link className="link link-hover" to="/about">About us</Link></li>
                    <li><Link className="link link-hover" to="/pricing">Pricing</Link></li>
                    <li><Link className="link link-hover" to="/contact">Contact us</Link></li>
                    <li><Link className="link link-hover" to="/free-consultation">Free Consultation</Link></li>
                </ul>

                {/* Legal */}
                <ul>
                    <li><h6 className="footer-title text-[#3391e7] text-lg font-semibold">Legal</h6></li>
                    <li><Link className="link link-hover" to="/disclaimer">Disclaimer</Link></li>
                    <li><Link className="link link-hover" to="/terms-of-use">Terms of use</Link></li>
                    <li><Link className="link link-hover" to="/privacy-policy">Privacy policy</Link></li>
                    <li><Link className="link link-hover" to="/cookie-policy">Cookie policy</Link></li>
                </ul>
            </section>
            <section className="border-t border-white/10 py-6 px-6 flex flex-col items-center gap-1 text-center">
                <p className="text-sm text-white/60">
                    Copyright © {year} All rights reserved ·{" "}
                    <Link to="/" className="font-semibold text-[#3391e7] hover:underline">
                        VextraWeb
                    </Link>
                </p>
            </section>
        </div>
    );
};

export default Footer;