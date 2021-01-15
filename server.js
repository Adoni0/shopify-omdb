const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });

  app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
  });
  
  app.listen(port, () => {
    console.log(`🌎 ==> API server now on port ${port}!`);
  });