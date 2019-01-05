var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

// POST method route
router.post('/', function (req, res) {
  console.log(req.body);
  
  res.send('POST request to the homepage')
})


module.exports = router;
