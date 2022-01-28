const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;
const port = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/encode', (request, response) => {
    const encodedMessage = Vigenere.Cipher('password').crypt(request.body.message);
    const body = {
        encoded: encodedMessage
    }
    response.send(body);
});

app.post('/decode', (request, response) => {
    const decodedMessage = Vigenere.Decipher('password').crypt(request.body.message);
    const body = {
        encoded: decodedMessage
    }
    response.send(body);
});

app.listen(port, () => {
    console.log('server is listening port ' + port);
})