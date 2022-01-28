const express = require('express');
const {Vigenere} = require('caesar-salad');
const router = express.Router();

router.post('/encode', (request, response) => {
    const encodedMessage = Vigenere.Cipher('password').crypt(request.body.message);
    const body = {
        encoded: encodedMessage
    }
    response.send(body);
});

router.post('/decode', (request, response) => {
    const decodedMessage = Vigenere.Decipher('password').crypt(request.body.message);
    const body = {
        decoded: decodedMessage
    }
    response.send(body);
});

module.exports = router;