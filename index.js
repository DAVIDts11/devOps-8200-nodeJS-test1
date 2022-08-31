
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("WELCOME");
        res.end();
})

// app.get('/isPrime/:number', function (req, res) {
//     res.status(200).send(primes.isPrime(req.params.number));
// })



exports.stop = function () {
    server.close();
}

const server = app.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});