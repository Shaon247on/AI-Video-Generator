"use client"
import { useEffect, useState } from "react";
import Topic from "./_components/Topic";
import Style from "./_components/Style";
import Duration from "./_components/Duration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";
import { v4 as uuidv4 } from 'uuid';


const CreateNewVideo = () => {
  const [toggle, setToggle] = useState(false)
  const [fromData, setFromData] = useState([])
  const [audioSrc, setAudioSrc] = useState(null);
  console.log(fromData);

  useEffect(() => {

  }, [])
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFromData(perv => (
      {
        ...perv,
        [fieldName]: fieldValue
      }
    ))
  }
  const onCreateClickHandler = () => {
    getVideoScript()
  }
  // video script

  const getVideoScript = async () => {
    setToggle(true)
    const prompt = `Write a script to generate ${fromData.duration} video on topic :${fromData.topic} along with AI image prompt in ${fromData.style} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no plain text`
    console.log(prompt);
    const result = await axios.post('/api/get-videos-script', {
      prompt: prompt
    }).then(res => {
      console.log(res.data.result);
      handleConvertToAudio(res.data.result)
      // handleAudio()
      setToggle(false)
    })
  }

  // generate audio

  const handleConvertToAudio = async (data) => {
    setToggle(true)
    
    let prompt = ''
    const id = uuidv4()
    data.forEach(item => {
      prompt = prompt + item.contentText
    })

    console.log(prompt);
    console.log(id);



    


    if (!prompt) {
      alert('Please enter some text.');
      return;
    }

    try {
      await axios.post("/api/audio", {prompt,id})
      .then(res => console.log(res.data.result))      
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }

  }
  // const handleAudio = () => {   
  //   setAudioSrc("set audio")
  //   if (fromData.topic === "Scary Story") {
  //     setAudioSrc("https://ia600403.us.archive.org/29/items/ghost_stories_001_librivox/gs001-uncle_abrahams_romance_nesbit_py_64kb.mp3")
  //   }
  //   else if (fromData.topic === "Historical Facts") {
  //     setAudioSrc("https://ia800706.us.archive.org/16/items/37_american_poems_0908_librivox/37americanpoems_01_bradstreet_64kb.mp3")
  //   }
  //   else if (fromData.topic === "Bed Time Story") {
  //  setAudioSrc("https://ia800706.us.archive.org/4/items/bumperthewhiterabbit_1812_librivox/bumperwhiterabbit_04_walsh_64kb.mp3")

  //   }
  //   else if(fromData.topic === "Motivational"){
  //     setAudioSrc("https://ia800403.us.archive.org/29/items/ghost_stories_001_librivox/gs001-laura_saki_pe_64kb.mp3")
  //   }
  //   else if(fromData.topic === "Fun Facts"){
  //     setAudioSrc("https://ia800706.us.archive.org/16/items/37_american_poems_0908_librivox/37americanpoems_02_wheatley_64kb.mp3")
  //   }
  //   else if(fromData.topic === true){
  //     setAudioSrc("https://ia800706.us.archive.org/4/items/bumperthewhiterabbit_1812_librivox/bumperwhiterabbit_09_walsh_64kb.mp3")
  //   }
  //   generateAudioCaption()
  //   console.log(audioSrc);
  // }


  // generate audio caption


  // const generateAudioCaption = async () => {
  //   setToggle(true)
  //   console.log(audioSrc);
  //   await axios.post("/api/caption", {
  //     audioFileUrl: audioSrc
  //   }).then(res => console.log(res.data.result))
  //   setToggle(false)
  // }


  return (
    <div className="md:pt-24">
      <h2 className="font-bold text-3xl text-primary text-center">Create New</h2>
      <div className="shadow-md p-8 mt-10 md:mx-20">
        {/* topic */}
        <Topic onUserSelect={onHandleInputChange} />
        {/* style */}
        <Style onUserSelect={onHandleInputChange} />
        {/* time */}
        <Duration onUserSelect={onHandleInputChange} />

        <Button onClick={onCreateClickHandler} className="mt-10 w-full">Create Short Video</Button>
      </div>
      <CustomLoading loading={toggle} />
    </div>
  );
};

export default CreateNewVideo;