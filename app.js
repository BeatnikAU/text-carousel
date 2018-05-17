var CONFIG = require("./config.json");
var fs = require("fs");
var express = require("express");
var app = express();
var labels = [];
var delay = 0;
var CSStrans = ``;
var CSSsize = ``;
var CSSpos = ``;
var CSSdeco = ``;
var CSStext = ``;

// Setup express environment variables
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Initialise user configuration options
function setUserOptions (trans, deco) {

  // transitions
  if (trans === "swipeUp" || trans === "swipeDown") {
    CSSsize = `\n  height: 0px\n`;
    CSStrans = `\n  @keyframes cycleLabels {\n  0%, 100% {height: 0px;}\n  7%, 93% {height: 50px;}\n}`
    if (trans === "swipeUp") {
      CSSpos = `\n  text-align: center;`
    }
    else if (trans === "swipeDown") {
      CSSpos = `\n  position: absolute;\n  text-align: center;\n  top: 0;\n  left auto;\n  right: auto;`
    }
  }

  else if (trans === "swipeLeft" || trans === "swipeRight") {
    console.log("Swipe Left and Swipe Right not supported yet")
  };

  // text decoration
  if (deco === "glow") {
    console.log(`text decoration set to ${deco}`);
    CSSdeco = `\n  text-shadow: 1px 0 ${CONFIG.text.decoration.size}px ${CONFIG.text.decoration.colour}, -1px 0 ${CONFIG.text.decoration.size}px ${CONFIG.text.decoration.colour}, 0 -1px ${CONFIG.text.decoration.size}px ${CONFIG.text.decoration.colour}, 0 1px ${CONFIG.text.decoration.size}px ${CONFIG.text.decoration.colour};`
  }
  else if (deco === "outline") {
    CSSdeco = `\n  -webkit-text-stroke: ${CONFIG.text.decoration.size}px ${CONFIG.text.decoration.colour};`
  };

  if (CONFIG.text.bold === "yes") {
    CSStext = CSStext + `\n  font-weight: bold;`
  };

  if (CONFIG.text.italic === "yes") {
    CSStext = CSStext + `\n  font-style: italic;`
  };
};

setUserOptions(CONFIG.transition.type, CONFIG.text.decoration.type, CONFIG.text.wrap);

var style = `<style>\n#text {\n  margin: auto;\n  overflow: hidden;\n  font-family: ${CONFIG.text.font};\n  font-size: ${CONFIG.text.size}px;\n  border-bottom: ${CONFIG.text.size * 0.2}px;\n  color: ${CONFIG.text.colour};${CSStext}${CSSdeco}${CSSpos}${CSSsize}}\n${CSStrans}\n</style>`;

// Express Route - generate divs and render page
app.get('/', function(req, res) {

  labels = [];
  body = ``;
  delay = 0;

  function setLabels (file, cb) {
    setTimeout(() => {
      fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
          console.log(`error with ${file}: ${err}`);
        }
        body = body + `    <div id="text" style="animation: cycleLabels ${CONFIG.transition.time}s ${delay}s 1 ease-in-out alternate;">\n      ${data.toUpperCase()}    </div>\n`;
        delay = delay + CONFIG.transition.time;
      });
      setTimeout(() => {cb()}, 50);
    }, 50);
  };

  let requests = CONFIG.files.reduce((promiseChain, file) => {
      return promiseChain.then(() => new Promise((resolve) => {
        setLabels(file, resolve);
      }));
  }, Promise.resolve());

// Add or remove lines to match the amount of labels you want
  requests.then(() => res.render('carousel', {
    refresh: delay,
    style: style,
    body: body
  }));
  requests.then(() => console.log('rendered ' + requests));
});

//start the web app on port 3000
app.listen(3000, function(){
  console.log("Running on URL http://localhost:3000/")
});
