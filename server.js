const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}

// app.use(express.static(__dirname + '/'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.use(function (req, res) {
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(port);