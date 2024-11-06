import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center justify-between px-4 py-3 shadow-md fixed w-full bg-white'>
            <div className='flex justify-center items-center'>
                <Image src={'/Alexander.png'} alt='logo' width={50} height={50} className='rounded-full' />
                <h2 className='font-open text-2xl font-bold'>Alexander</h2>
            </div>
            <div className='flex items-center gap-4'>
                <UserButton/>
                <Button variant="outline">Dashboard</Button>
            </div>
        </div>
    );
};

export default Header;