const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data/resources.json')

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/resources', (req, res) => {
  res.json(data)
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
