// create web server
var express = require('express');
var router = express.Router();

// create a route for the app
router.get('/comments', function(req, res) {
    res.send('GET route on comments.');
});

router.post('/comments', function(req, res) {
    res.send('POST route on comments.');
});

// export the router
module.exports = router;