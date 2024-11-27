import { NextResponse } from "next/server";
const { createClient } = require("@deepgram/sdk");
const fs = require("fs");

const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API);

export async function POST(req) {

    const { prompt,id } = await req.json();
    const text = prompt

    if (!text) {
        return res.status(400).json({ error: 'Prompt is required' });
    }
    console.log("Text prompt:",text);
    try {
        const response = await deepgram.speak.request(
            { text },
            {
                model: "aura-asteria-en",
                encoding: "linear16",
                container: "wav",
                sample_rate:48000
            }
        );

        const stream = await response.getStream();
        const headers = await response.getHeaders();

        if (stream) {

            const buffer = await getAudioBuffer(stream);

            fs.writeFile(`${id}.wav`, buffer, (err) => {
                if (err) {
                    console.error("Error writing audio to file:", err);
                } else {
                    console.log("Audio file written to output.wav");
                }
            });
        } else {
            console.error("Error generating audio:", stream);
        }

        if (headers) {
            console.log("Headers:", headers);
        }


        return NextResponse.json({ 'result': 'Success' })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ 'error': error })
    }
}

const getAudioBuffer = async (response) => {
    const reader = response.getReader();
    const chunks = [];

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
    }

    const dataArray = chunks.reduce(
        (acc, chunk) => Uint8Array.from([...acc, ...chunk]),
        new Uint8Array(0)
    );

    return Buffer.from(dataArray.buffer);
};
