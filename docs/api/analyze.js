export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, systemPrompt } = req.body;

    if (!text || !systemPrompt) {
      return res.status(400).json({ error: "Missing text or systemPrompt" });
    }

    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return res.status(openaiResponse.status).json({
        error: data.error?.message || "OpenAI API error"
      });
    }

    const resultText = data.choices[0].message.content;

    return res.status(200).json({ result: resultText });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
