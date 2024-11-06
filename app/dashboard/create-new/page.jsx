"use client"
import { useState } from "react";
import Topic from "./_components/Topic";
import Style from "./_components/Style";
import Duration from "./_components/Duration";
import { Button } from "@/components/ui/button";
import axios from "axios";

const CreateNewVideo = () => {
    const [fromData, setFromData]= useState([])
    console.log(fromData);
    const onHandleInputChange=(fieldName, fieldValue)=>{
        console.log(fieldName, fieldValue);
        setFromData(perv=>(
          {
            ...perv,
            [fieldName]:fieldValue
          }
        ))
    }
    const onCreateClickHandler =()=>{
      getVideoScript()
    }
    // video script

    const getVideoScript =async ()=>{
      const prompt = `Write a script to generate ${fromData.duration} video on topic :${fromData.topic} along with AI image prompt in ${fromData.style} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no plain text`

      console.log(prompt);
       const result = await axios.post('/api/get-videos-script', {
        prompt:prompt
       }).then(res=>{
        console.log(res.data);
       })
    }
    return (
        <div className="md:pt-24">
          <h2 className="font-bold text-3xl text-primary text-center">Create New</h2>
          <div className="shadow-md p-8 mt-10 md:mx-20">
            {/* topic */}
            <Topic onUserSelect={onHandleInputChange}/>
            {/* style */}
            <Style onUserSelect={onHandleInputChange}/>
            {/* time */}
            <Duration onUserSelect={onHandleInputChange}/>
            <Button onClick={onCreateClickHandler} className="mt-10 w-full">Create Short Video</Button>
          </div>
        </div>
    );
};

export default CreateNewVideo;