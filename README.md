# Text Carousel / Text Slideshow

This is a basic app for generating a local web page with cycling text, pulled from different text file sources, to be used as a browser source in streaming applications such as OBS. Currently, this is intended to be used alongside applications that will generate text files with data from Twitch (eg, StreamLabels by StreamLabs and Muxy Ticker by Muxy).

## Getting Started

This is currently a basic prototype but should (hopefully) be fairly simple to setup and to customise. Please follow these steps to try the app out and feel free to send feedback.

## Prerequisites

* [NodeJS](https://nodejs.org)
* [Stream Labels](https://streamlabs.com/dashboard#/streamlabels) or similar to generate text files
* (optional) A decent text editor such as Notepad++ or Atom

## Installation

### Download the App

[text-carousel.zip](https://github.com/BeatnikAU/text-carousel/archive/master.zip)

Download the above zip file and extract.

### Update your Labels

All customisation can be made in the file `config.json`.

**PLEASE NOTE** Windows users will need to change all backslashes (\\) to forward slash (/) for the file paths.

1. Right click the `config.json` file and click edit, or open it your favourite text editor
2. Add the full file path for each text file you want included (making sure to replace backslash with forward slash)
3. Set your preferred options for text options (see Configuration section for current options)
4. Save and close the file

### Install Dependencies

#### Automated (Windows)

* Double click the included `install.bat`

#### Manual

* Open command prompt or terminal
* Change directory to the folder you extracted the zip file to
* Run the following command to install all dependencies
 `npm install`

### Run App

#### Automated (Windows)

* Double click the included `start.bat` file (or create a shortcut to it elsewhere)

#### Manual

* Change directory to the folder you extracted the zip file to
* Run the following command to start the app
 `node app.js`
* This should display the URL to use for testing and adding to OBS / Xsplit

## Configuration

### Text Options

* **Font** - A good starting list can be found [here](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
* **Size** - Set in pixels
* **Bold** - Yes or No
* **Italic** - Yes or No
* **Colour** - This can be a hex value (eg, "#000000"), or a named colour (eg, "green")

### Decoration Options

* **Type** - Either "glow" or "outline"
* **Size** - This will set the size of the glow or outline
* **Colour** - This can be a hex value (eg, "#000000"), or a named colour (eg, "green")

### Transition Options

* **Type** - This can be either "swipeUp" or "swipeDown". This is still in progress. Up is centred text and down is left aligned text
* **Time** - This is the amount of time in seconds that each text file is displayed for

## Next Features

- [x] Implement config file for all user defined variables
- [x] Simplify the method of setting files to read
- [x] Implement predefined text styling to be used through config file options
- [ ] Improve predefined text styling options
- [ ] Implement optional label prefixes and suffixes
- [ ] Create a configuration interface
- [ ] Use Twitch API to obtain information rather than relying on 3rd party application for text files
- [ ] Think of the next things to do
