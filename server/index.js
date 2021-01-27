const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

const PORT = 3005;

app.get('/', (req, res) => {
  res.send(200);
})

app.listen(PORT, () => console.log(`Proxy server is listening on port: ${PORT}`))