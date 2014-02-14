var express = require('express'),
    app = express()

// general data about the available languages

var languages = require('./content.json')

// localhost:4000 introduces api

app.get('/', function (req, res) {
    var returnString = 'Hi there, for raw data on the languages we currently display, please use /languages.'
    res.send(returnString)
})

// localhost:4000/languages returns stringified data

app.get('/languages', function (req, res){

    var speaker = req.query.speaker,
        language = req.query.language,
        videoURL = req.query.videoURL,
        callback = req.query.callback

    var returnArray = []

    languages.forEach(function(data){

            var qualified = true

            if (speaker && data.speaker !== speaker) {
                qualified = false
            }

            if (language && data.language !== language) {
                qualified = false
            }

            if (videoURL && data.videoURL !== videoURL) {
                qualified = false
            }

            if (qualified) {
                returnArray.push(data)
            }

        })


    if (callback){
        res.send(callback + '(' + JSON.stringify(returnArray) + ')')
    } else {
        res.send(returnArray)
    }

    //res.send(callback + '(' + JSON.stringify(languages) + ')')
})

// run node server.js in terminal

app.listen(4000)

// terminal will return this message if the server is running. go to localhost:4000 for a look at the data

console.log('content running!')
