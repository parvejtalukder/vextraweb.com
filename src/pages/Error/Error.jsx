import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-midnight text-white px-5 text-center">
            <h1 className="text-7xl font-bold text-[#3391e7]">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="mt-2 mb-6 text-white/60">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/" className="px-6 py-2 bg-[#3391e7] text-white rounded-full hover:opacity-80 transition">
                    Go Home
                </Link>
                <Link to="/contact" className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition">
                    Contact Us
                </Link>
                <Link to="/free-consultation" className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition">
                    Free Consultation
                </Link>
            </div>
            <p className="mt-8 text-sm text-white/40">
                Looks like you took a wrong turn in the internet jungle!
            </p>
        </div>
    );
};

export default Error;