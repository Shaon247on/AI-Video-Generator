import React from 'react';
import Header from './_components/Header';
import SideNav from './_components/SideNav';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='hidden md:block h-screen bg-white fixed mt-[74px]'>
                <SideNav />
            </div>
            <div>
                <Header />
                <div className='md:ml-64'>
                {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;