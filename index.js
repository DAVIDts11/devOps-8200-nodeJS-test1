
const express = require('express');
const app = express();
const port = 3000;
const p2 = require("./power2");
const fs = require('fs');

app.get('/', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("WELCOME");
        res.end();
})

app.get('/power2/:number', function (req, res) {
    res.status(200).send(p2.power2(req.params.number).toString());
})



exports.stop = function () {
    server.close();
}

const server = app.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});