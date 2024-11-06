const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "write a script to generate 30 seconds video on topic: interesting historical story along with ai image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and contentText as field" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Rome, with vendors selling goods and people walking by, focus on a man with a scroll in his hand, looking perplexed.\",\n    \"contentText\": \"In ancient Rome, a man named Gaius Plinius Secundus, better known as Pliny the Elder, was a scholar with an insatiable thirst for knowledge. He was fascinated by the natural world, and spent his life studying everything from plants and animals to minerals and stars.\"\n  },\n  {\n    \"imagePrompt\": \"A dramatic depiction of the eruption of Mount Vesuvius, with ash and smoke billowing into the sky, people running in panic, focus on a man trying to save his scrolls.\",\n    \"contentText\": \"One fateful day, Mount Vesuvius, a volcano near Pompeii, erupted with devastating force. Pliny, who was stationed at the Roman fleet nearby, witnessed the catastrophe firsthand.\"\n  },\n  {\n    \"imagePrompt\": \"Pliny the Elder on a ship, looking out at the erupting volcano with a mixture of awe and fear.\",\n    \"contentText\": \"He was determined to get a closer look at the eruption, and set sail towards the volcano. His curiosity, however, proved fatal.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up shot of Pliny's hand gripping a scroll, then a close-up shot of a scroll being consumed by flames.\",\n    \"contentText\": \"He was overcome by the toxic fumes and died, likely from a heart attack, leaving behind a wealth of knowledge documented in his scrolls.\"\n  },\n  {\n    \"imagePrompt\": \"A panoramic shot of Pompeii ruins, with the majestic Mount Vesuvius in the background,  showing the impact of the eruption on the ancient city.\",\n    \"contentText\": \"Pliny's story serves as a stark reminder of the power of nature and the fragility of human life. His writings about the natural world continue to fascinate and inspire scholars today.\"\n  }\n]\n``` \n\n**Notes:**\n\n* This JSON data provides image prompts and content text for a 30-second video. \n* The image prompts are designed to be realistic and evoke a sense of history.\n* The content text provides a brief overview of Pliny the Elder's life and the tragic events surrounding the eruption of Mount Vesuvius. \n* You can use these prompts with AI image generation tools like Midjourney, DALL-E, or Stable Diffusion to create visuals for the video. \n* You'll need to add music and transitions to complete your video. \n\n**To create the video:**\n\n1. **Generate the images:** Use the image prompts to create the images with an AI image generation tool.\n2. **Edit the images:**  Crop, resize, and enhance the images as needed.\n3. **Add the text:**  Create text overlays with the provided content text, ensuring they're legible and visually appealing.\n4. **Combine the elements:** Use a video editing software to arrange the images and text, add transitions, music, and sound effects. \n\nThis approach will help you create a compelling 30-second video about Pliny the Elder and the eruption of Mount Vesuvius. \n" },
            ],
        },
    ],
});
