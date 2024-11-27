"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
    const [videoList, setVideoList] = useState([])
    return (
        <div className='font-pop p-7 pt-24'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-2xl text-primary'>Dashboard</h1>
                <Link href={"/dashboard/create-new"}><Button>+ Create New</Button></Link>
            </div>
            {/* Empty Slot */}
            {videoList.length === 0 && <div className='w-full h-[70vh] flex items-center justify-center border-2 border-dotted mt-7'>            
            </div>

            }
        </div>
    );
};

export default Dashboard;