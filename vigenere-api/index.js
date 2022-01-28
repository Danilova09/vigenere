const express = require('express');
const password = require('./app/password');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', password);

app.listen(port, () => {
    console.log('server is listening port ' + port);
})