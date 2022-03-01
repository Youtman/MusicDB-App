const express = require('express');
const axios = require('axios');
const router = express.Router();

//Post Method
router.post('/post', (req, res) => {
  res.send('Post API');
});

//Get all Method
router.get('/all-music', async (req, res, next) => {
  console.log("'/test' call");
  await axios
    //  .get('https://api.deezer.com/artist/27/top')
    .get('https://api.deezer.com/genre')
    .then((response) => res.status(200).send(response.data.data))
    .catch((err) => res.send(err));
});

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
  //   res.send('Get by ID API');
  res.send(req.params.id);
});

//Update by ID Method
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API');
});

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API');
});

module.exports = router;
