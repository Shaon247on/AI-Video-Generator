"use client"
import Image from "next/image";
import { useState } from "react";


const Style = ({ onUserSelect }) => {
    const [selected, setSelected] = useState()
    const styleOptions = [
        {
            name: 'Realistic',
            image: '/realistic.png'
        },
        {
            name: 'Cartoon',
            image: '/cartoon.png'
        },
        {
            name: 'Comic',
            image: '/comic.png'
        },
        {
            name: 'WaterColor',
            image: '/water-color.png'
        },
        {
            name: 'GTA',
            image: '/gta.png'
        },
    ]

    return (
        <div className="mt-7">
            <h2 className='font-semibold text-xl text-primary'>Style</h2>
            <p className='text-gray-500'>Select Your Video Style:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
                {
                    styleOptions.map((style, index) =>
                        <div onClick={() => {
                            setSelected(style.name)
                            onUserSelect('style', style.name)
                        }
                        } key={index} className={`relative hover:scale-105 duration-300 cursor-pointer
                ${selected === style.name && "border-4 border-primary rounded-xl duration-100"}
                `}>
                            <Image src={style.image} alt={`style-${index + 1}`} width={100} height={100}
                                className="h-40 object-cover rounded-lg w-full" />
                            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">{style.name}</h2>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Style;