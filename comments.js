// create web server 

// this is the server that is used to create the database and add comments
// it is not used in the current version of the app
// it is here for future development
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./commentModel');
var cors = require('cors');
var path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to the database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// create a schema for the comments
// this is the structure of the comments in the database
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    created_at: { type: Date, default: Date.now }
});

// create a model for the comments
// this is the model that is used to create the comments in the database
var Comment = mongoose.model('Comment', commentSchema);

// this is the server that is used to create the database and add comments
// it is not used in the current version of the app
// it is here for future development
app.post('/comment', function (req, res) {
    // create a new comment
    var newComment = new Comment(req.body);
    newComment.save(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            // send the new comment back to the client
            res.json(result);
        }
    });
});

// this is the server that is used to create the database and add comments
// it is not used in the current version of the app
// it is here for future development
app.get('/comments', function (req, res) {
    Comment.find({}, function (err, results) {
        res.json(results);
    });
});

// this is the server that is used to create the database and add comments
// it is not used in the current version of the app
// it is here for future development
app.get('/comments/:id', function (req, res) {
    Comment.find({ _id: req.params.id }, function (err, result) {
        res.json(result);
    });
});