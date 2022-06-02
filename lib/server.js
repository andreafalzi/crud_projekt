// Requires
const express = require('express');
const path = require('path');

// Constants.
const expressServer = express();

// Express server use(s)
expressServer.use(express.json());
expressServer.use(express.static('client'));

// Server Module.
const server = {};

// Route til vores Klient forside.
expressServer.get('/', (req, res) => {
  
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.resolve(__dirname, '../client/index.html'))

})

// Route til at hente alle brugere.
expressServer.get('/users/all', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send({"response" : "ok"});

})

// Route to register/post new user.
expressServer.post('/users/register', (req, res) => {

    console.log(req.body)

    res.setHeader('Content-Type', 'application/json');
    res.status(503);
    res.send({"response" : "ok"});

})

// Starting Express server, making it listen for requests.
server.run = () => {

    console.log('Starter server')

    expressServer.listen(3000, () => {

        console.log('Server er startet, lytter på port 3000');

    })
}

// Exporting our server module object.
module.exports = server;