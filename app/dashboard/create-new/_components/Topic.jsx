"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"



const Topic = ({onUserSelect}) => {
    const options =['Custom Prompt', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational','Fun Facts']
    const [selectedOption, setSelectedOption] = useState()
    return (
        <div>
            <h2 className='font-semibold text-xl text-primary'>Content</h2>
            <p className='text-gray-500'>Topic of the video:</p>
            <Select onValueChange={(value)=>{
                value!="Custom Prompt"&&onUserSelect('topic', value)
                setSelectedOption(value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) =><SelectItem key={index}  value={option}>{option}</SelectItem>)}
                </SelectContent>
            </Select>
            {selectedOption === "Custom Prompt"&& 
            <Textarea
            onChange={(e)=>onUserSelect('topic',e.target.value)}
            className="mt-3" placeholder="White Your custom Prompt"/>
            }


        </div>
    );
};

export default Topic;