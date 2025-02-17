const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB 연결
connectDB();

app.get('/', (req, res) => {
  res.send('Health Platform API');
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});

module.exports = app;
