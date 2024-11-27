import { Speechify } from "@speechify/api-sdk";

const speechify = new Speechify({
  apiKey: process.env.SPEECHIFY_API_KEY,  // Store your API key in an environment variable
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const tokenResponse = await speechify.accessTokenIssue("audio:all");
      res.status(200).json(tokenResponse);
    } catch (error) {
      res.status(500).json({ error: 'Token generation failed' });
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
