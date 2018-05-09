var fs = require("fs");
var express = require("express");
var app = express();

// Hardcoded Labels - add the full path to each label to include separated by commas
var paths = [
  'c:/path/to/latest_follower.txt'
  ,'c:/path/to/latest_subscriber.txt'
  ,'c:/path/to/latest_cheer'
  ,'c:/path/to/latest_donation.txt'
];
var labels = [];

//Setup express environment variables
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Express Route - generate labels and render page
app.get('/', function(req, res) {
  labels = [];
  function setLabels (path, cb) {
    setTimeout(() => {
      fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          console.log('error with ' + path + ': ' + err);
        }
        labels.push(data.toUpperCase());
      });
      setTimeout(() => {cb()}, 50);
    }, 50);
  };

  let requests = paths.reduce((promiseChain, path) => {
      return promiseChain.then(() => new Promise((resolve) => {
        setLabels(path, resolve);
      }));
  }, Promise.resolve());

// Add or remove lines to match the amount of labels you want
  requests.then(() => res.render('carousel', {
    label1: labels[0],
    label2: labels[1],
    label3: labels[2],
    label4: labels[3]
  }));
  requests.then(() => console.log('rendered ' + requests));
});

//start the web app on port 3000
app.listen(3000, function(){
  console.log("Running on URL http://localhost:3000/")
});
