import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
      <div className='col-span-1'>
        <Image src={'/login.jpg'}
        alt='login' width={400} height={400} className='w-[90%] object-contain'/>
      </div>
      <div className='col-span-1 flex items-center justify-center h-screen'><SignIn /></div>
    </div>
  )
}