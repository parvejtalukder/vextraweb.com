import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const RootLayout = () => {
    return (
        <div className='relative max-w-6xl mx-auto text-white'>
            <ScrollRestoration />
            <header className='lg:pt-1 sticky top-0 z-50'>
                <Header></Header>
            </header>
            <main className='pb-6'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;