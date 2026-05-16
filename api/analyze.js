export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Vercel ไม่พบ GEMINI_API_KEY ใน Environment Variables"
    });
  }

  try {
    const { text, systemPrompt } = req.body;

    if (!text || !systemPrompt) {
      return res.status(400).json({
        error: "Missing text or systemPrompt"
      });
    }

    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemma-4-31b-it:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents: [
          {
            parts: [{ text: text }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2000
        }
      })
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return res.status(geminiResponse.status).json({
        error: data.error?.message || "Gemini API error"
      });
    }

    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!resultText) {
      return res.status(500).json({
        error: "Gemini ตอบกลับมา แต่ไม่มีข้อความ result"
      });
    }

    return res.status(200).json({
      result: resultText
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message || "Server error"
    });
  }
}
