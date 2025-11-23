import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ YouTube Automation is running!");
});

// Har 1 min mein automation task
setInterval(async () => {
  try {
    console.log("⏳ Running automation task...");

    const channelId = "https://youtube.com/@trendz15?si=oh-KPMwYp3b0Xko2"; // 👈 Apna channel ID daalo
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`;

    const res = await axios.get(url);
    const stats = res.data.items[0].statistics;
    console.log(`📺 Subscribers: ${stats.subscriberCount}, Views: ${stats.viewCount}`);
  } catch (err) {
    console.error("❌ YouTube API Error:", err.message);
  }
}, 60000);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
