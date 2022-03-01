const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const proxy = require('node-global-proxy').default;

// proxy.setConfig({
//   http: 'http://localhost:5000',
//   https: 'https://localhost:5000',
// });
// proxy.start();

require('dotenv').config();
const port = 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

const routes = require('./src/routes/routes');

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
