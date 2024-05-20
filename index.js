const express = require('express')
const app = express()
const userData = require('./MOCK_DATA.json')
const cors = require("cors");

app.use(cors());    

app.get('/users', function (req, res) {
  res.send(userData)
})
// console.log(userData);

app.listen(3000);
