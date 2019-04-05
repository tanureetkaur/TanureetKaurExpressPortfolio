let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;
