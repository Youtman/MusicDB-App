const express = require('express');
const axios = require('axios');
const router = express.Router();

//Get all Genres
router.get('/genre', async (req, res, next) => {
  console.log("'/test' call");
  await axios
    .get('https://api.deezer.com/genre')
    .then((response) => res.status(200).send(response.data.data))
    .catch((err) => res.send(err));
});

//Get Albums
router.get('/album', async (req, res, next) => {
  console.log("'/album' call");
  await axios
    .get('https://api.deezer.com/artist/27/top?limit=50')
    .then((response) => res.status(200).send(response.data.data))
    .catch((err) => res.send(err));
});

module.exports = router;
