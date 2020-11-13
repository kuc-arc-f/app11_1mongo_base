var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource-1234');
  res.render('tasks/index', {});
});
//
router.get('/new', function(req, res, next) {
    res.render('tasks/new', {});
  });
//
router.get('/show/:id', function(req, res) {
console.log(req.params.id  );
    res.render('tasks/show', {"params_id": req.params.id });
});
//
router.get('/edit/:id', function(req, res) {
  console.log(req.params.id  );
      res.render('tasks/edit', {"params_id": req.params.id });
});

router.get('/test', function(req, res, next) {
    res.render('tasks/test', {});
  });
  
module.exports = router;
