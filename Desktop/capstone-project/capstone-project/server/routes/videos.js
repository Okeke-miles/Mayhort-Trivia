const express = require("express");
const router = express.Router();
const videoList = require("../data/videos.json")


router.get('/', (_req, res) => {
    res.status(200).json(videoList);
})

module.exports = router;