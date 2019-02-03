const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

dotenv.load();
app.use(bodyParser.text());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

// An api endpoint that returns a game object from igdb
app.post('/api/games', (req,res) => {
    return fetch(process.env.REACT_APP_API_URL + '/games', {
        mode: "no-cors",
        method: "post",
        body: req.body,
        headers: {
          "user-key": process.env.REACT_APP_API_KEY
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

// An api endpoint that returns a url to access a cover art image
app.post('/api/covers', (req, res) => {
    return fetch(process.env.REACT_APP_API_URL + '/covers', {
        mode: "no-cors",
        method: "post",
        body: req.body,
        headers: {
          "user-key": process.env.REACT_APP_API_KEY
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

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);