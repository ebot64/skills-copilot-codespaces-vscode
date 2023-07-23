// create web server 
// 1. create a web server object
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 2. create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 3. start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.get('/api/comments', (req, res) => {
    res.send(comments);
});
app.post('/api/comments', (req, res) => {
    const { body } = req;
    const { id, author, text } = body;
    if (!author || !text) {
        return res.status(400).json({
            error: 'author and text are required'
        });
    }
    const newComment = {
        id,
        author,
        text
    };
    comments.push(newComment);
    res.send(newComment);
});
app.get('/api/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id);
    if (!comment) {
        return res.status(404).json({
            error: 'comment not found'
        });
    }
    res.send(comment);
});
app.delete('/api/comments/:id', (req, res) => {
    const { id } = req.params;
    const index = comments.findIndex(c => c.id == id);
    if (index === -1) {
        return res.status(404).json({
            error: 'comment not found'
        });
    }
    comments.splice(index, 1);
    res.sendStatus(204);
});
app.put('/api/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id);
    if (!comment) {
        return res.status(404).json({
            error: 'comment not found'
        });
    }
    const { body } = req;
    const { author, text } = body;
    if (!author || !text) {
        return res.status(400).json({
            error: 'author and text are required'
        });
    }
    comment.author =

=======
Suggestion 2

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

// this is the server that is used to create the database and add comments
// it is not

=======
Suggestion 3

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const Post = require('./models/post');
const cors = require('cors');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/comments');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

=======
Suggestion 4

// 1. load express module
const express = require('express')
// 2. create express server
const app = express()
const port = 3000

// 3. create route
// 3.1. get all comments
app.get('/comments', (req, res) => {
    res.send('get all comments')
})
// 3.2. get comment by id
app.get('/comments/:id', (req, res) => {
    res.send('get comment by id')
})
// 3.3. create comment
app.post('/comments', (req, res) => {
    res.send('create comment')
})
// 3.4. update comment
app.put('/comments/:id', (req, res) => {
    res.send('update comment')
})
// 3.5. delete comment
app.delete('/comments/:id', (req, res) => {
    res.send('delete comment')
})

// 4. start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

=======
Suggestion 5

var express = require("express");

// create router object
var router = express.Router();

// export router
module.exports = router;

// route for our homepage
router.get("/", function(req, res) {
    res.send("Hello World");
});

// route for about page
router.get("/about", function(req, res) {
    res.send("Hello about page");
});

// route for contact page
router.get("/contact", function(req, res) {
    res.send("Hello contact page");
});

// route for profile page
router.get("/profile", function(req, res) {
    res.send("Hello profile page");
});

// route for our homepage
router.get("/hello/:who", function(req, res) {
    res.send("Hello " + req.params.who);
});

// route for our homepage
router.get("/api", function(req, res) {
    res.json({
        firstname: "John",
        lastname: "Doe"
    });
});

=======
Suggestion 6

// start server: node comments.js
// run in browser: http://localhost:3000

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
	switch(req.method){
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk){
				item += chunk;
			});
			req.on('end', function(){
				items.push(item);
				res.end('OK\n');
			});
			break;
		case 'GET':
			var body = items.map(function(item, i){
				return i + ') ' + item;
			}).join('\n');
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(body);
			break;
		case 'DELETE':
			var path = url.parse(req.url).pathname;
			var i = parseInt(path.slice(1), 10);

			if(isNaN(i)){
				res.statusCode = 400;
				res.end('Invalid item id');
			}else if(!items[i]){
				res.statusCode = 404;
				res.end('Item not found');
			}else{
				items.splice(i, 1);
				res.end('OK\n');
			}
			break;
	}
});

server.listen(3000);

=======
Suggestion 7

// create a web server that can listen to request from client 
// and send back response to client 
// create a web server object 
const express = require('express');
const app = express();
const port = 3000;
// create a route 
// route is a section of express application that is associated with a path 
// when a client makes a request to a path, the route will execute 
// app.get(path, callback)
// path is the path that client makes request to 
// callback is the function that will be executed when client makes request to path 
app.get('/', (req, res) => {
    console.log('request to /');
    res.send('hello world');
});
app.get('/greeting', (req, res) => {
    console.log('request to /greeting');
    res.send('hello there');
});
app.get('/greeting/:name', (req, res) => {
    console.log('request to /greeting/:name');
    const name = req.params.name;
    res.send(`hello ${name}`);
});
app.get('/greeting/:name/:message', (req, res) => {
    console.log('request to /greeting/:name/:message');
    const name = req.params.name;
    const message = req.params.message;
    res.send(`hello ${name} ${message}`);
});
// start the server 
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

=======
Suggestion 8

const express = require('express');
const app = express();
// set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// set up ejs
app.set('view engine', 'ejs');
// set up mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
// set up schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
const Comment = mongoose.model('Comment', commentSchema);
// set up routes
app.get('/', (req, res) => {
    res.redirect('/comments');
});
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { comments: comments });
        }
    });
});
app.get('/comments/new', (req, res) => {
    res.render('new');
});
app.post('/comments', (req, res) => {
    Comment.create(req.body.comment, (err, newComment) => {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/comments');
        }
    });
});
// set up port
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
