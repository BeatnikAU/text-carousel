# Text Carousel

This is a basic app for generating a local web page with cycling text, pulled from different text file sources, to be used as a browser source in streaming applications such as OBS. Currently, this is intended to be used alongside applications that will generate text files with data from Twitch (eg, StreamLabels by StreamLabs and Muxy Ticker by Muxy).

## Getting Started

This is currently a basic prototype but should (hopefully) be fairly simple to setup and to customise if you have some html/css knowledge. Please follow these steps to try the app out and feel free to send feedback.

## Prerequisites

* [NodeJS](https://nodejs.org)
* [Stream Labels](https://streamlabs.com/dashboard#/streamlabels) or similar to generate text files
* A decent text editor such as Notepad++ or Atom

## Installation

### Download the App

[text-carousel.zip](https://github.com/BeatnikAU/text-carousel/archive/master.zip)

Download the above zip file and extract.

### Update your Labels

* Edit 'app.js' and replace the listed paths (starting line 7) with the full path to the text files you want to display
* While editing 'app.js', add or remove the labels around line 40 to match the amount of labels you want to display
* Edit './public/carousel.css' and update text styling in body and adjust the height in @keyframes to accommodate changes to text size
* While editing 'carousel.css', add or remove label elements to match the number of text files you want to display
* Edit './views/carousel.ejs' and add or remove <div> lines to match the amount of text files you want to display
* While editing 'carousel.ejs', change the number after content= to be the amount of seconds for all labels to display

### Install Dependencies

* Open command prompt or terminal
* Change directory to the folder you extracted the zip file to
* Run the following command to install all dependencies
 `npm install`

### Run App

#### Automated

* Double click the included `start.bat` file (or create a shortcut to it elsewhere)

#### Manual

* Change directory to the folder you extracted the zip file to
* Run the following command to start the app
 `node app.js`
* This should display the URL to use for testing and adding to OBS / Xsplit

## Next Features

- [ ] Implement config file for all user defined variables
- [ ] Implement an easier method of setting files to read
- [ ] Implement predefined text styling to be used through config file options
- [ ] Implement optional label prefixes and suffixes
- [ ] Create a configuration interface
- [ ] Use Twitch API to obtain information rather than relying on 3rd party application for text files
- [ ] Think of the next things to do
