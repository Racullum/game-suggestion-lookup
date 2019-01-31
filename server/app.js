const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a game object from igdb
app.post('/api/games', (req,res) => {
    return fetch('https://api-v3.igdb.com/games', {
        mode: "no-cors",
        method: "post",
        body: req.body,
        headers: {
          "user-key": "a1d21661c77bb5ba89f0797f186f968e"
        }
      })
    .then(

        response => response.json()
    )
    .then(json => {
        res.json(json);
    })
    .catch(
        err => console.log(err)
    )
});


app.post('/api/covers', (req, res) => {
    return fetch('https://api-v3.igdb.com/covers', {
        mode: "no-cors",
        method: "post",
        body: req.body,
        headers: {
          "user-key": "a1d21661c77bb5ba89f0797f186f968e"
        }
      })
    .then(
        response => response.json(),

        error => console.log("An error occurred.", error)
    )
    .then(json => {
        res.json(json);
    });
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);