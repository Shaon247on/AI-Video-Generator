"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

const Duration = ({onUserSelect}) => {
    const [selectedOption, setSelectedOption] = useState()
    return (
        <div className="mt-7">
            <h2 className='font-semibold text-xl text-primary'>Duration</h2>
            <p className='text-gray-500'>Select Your Video Duration or Length:</p>
            <Select onValueChange={(value) => {
                value != "Custom Prompt" && onUserSelect('duration', value)
                setSelectedOption(value) 
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="30 Seconds">30</SelectItem>
                    <SelectItem value="45 Seconds">45</SelectItem>
                    <SelectItem value="60 Seconds">60</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Duration;