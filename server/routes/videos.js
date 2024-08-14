import express from "express";
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
  deleteVideo
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo);

// Update a video
router.put("/:id", verifyToken, updateVideo);

// Delete a video
router.delete("/:id", verifyToken, deleteVideo);

// Get a video by ID
router.get("/find/:id", getVideo);

// Increase view count
router.put("/view/:id", addView);

// Get trending videos
router.get("/trend", trend);

// Get random videos
router.get("/random", random);

// Get subscribed channels' videos
router.get("/sub", verifyToken, sub);

// Get videos by tags
router.get("/tags", getByTag);

// Search videos by title
router.get("/search", search);

export default router;
