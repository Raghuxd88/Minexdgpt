import express from "express";
import fetch from "node-fetch";

const app = express();

// ✅ API Proxy Route
app.get("/chat", async (req, res) => {
  try {
    const prompt = req.query.prompt;
    const r = await fetch(`https://chatgpt-4.anshppt19.workers.dev/?prompt=${encodeURIComponent(prompt)}`);
    const data = await r.json();

    // CORS allow
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.json({ message: "⚠️ Error: " + err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
