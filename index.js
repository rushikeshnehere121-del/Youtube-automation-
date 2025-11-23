import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ YouTube Automation is running!");
});

// Har 1 minute pe kaam karega
setInterval(async () => {
  try {
    console.log("⏳ Running automation task...");
    // YouTube API ya koi aur logic yahan laga lo
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}, 60000);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

