import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const EmptySlot = () => {
    return (
        <div className='p-5 flex items-center flex-col mt-10 gap-4'>
            <h2 className='text-3xl font-semibold font-open'>NO VIDEO HAS BEEN CREATED</h2>
            <Link href={'/dashboard/create-new'}><Button>Create New Short Video</Button></Link>
        </div>
    );
};

export default EmptySlot;