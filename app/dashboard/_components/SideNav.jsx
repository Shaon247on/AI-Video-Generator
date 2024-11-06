"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideNav = () => {
    const path = usePathname()
    console.log(path);
    const menuOption = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: 'Create New',
            path: '/dashboard/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/dashboard/upgrade',
            icon: ShieldPlus
        },
        {
            id: 4,
            name: 'Account',
            path: '/dashboard//account',
            icon: CircleUser
        },
    ]
    return (
        <div className='w-64 h-screen shadow-md p-5'>
            <div>
                {menuOption.map(item => 
                    <Link key={item.id} href={item.path}>
                        <div  className={`flex items-center justify-start gap-3 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-md
                        ${path === item.path && "bg-primary text-white"}    
                            `}>
                        <item.icon/>
                        <h1 className='font-semibold'>{item.name}</h1>
                    </div>
                    </Link>
                )}
            </div>
        </div>

    );
};

export default SideNav;