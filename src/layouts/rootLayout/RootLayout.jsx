import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const RootLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <header className='lg:pt-4 sticky top-0 z-50'>
                <Header></Header>
            </header>
            <main className='py-5'>
                <Outlet></Outlet>
            </main>
            <footer className='pb-4'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;