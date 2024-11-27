import { AssemblyAI } from 'assemblyai'
import { NextResponse } from 'next/server'

export async function POST(req) {
    const { audioFileUrl } = await req.json()
    try {
        const client = new AssemblyAI({
            apiKey: process.env.NEXT_PUBLIC_CAPTION_API
        })
    
        const audioUrl =
            'https://assembly.ai/sports_injuries.mp3'
    
        const config = {
            audio_url: audioUrl
        }
    
    
        const transcript = await client.transcripts.transcribe(config)
        console.log(transcript.words)
        return NextResponse.json({'result': transcript.words})
    } catch (error) {
        return NextResponse.json({'error':error})
    }


}