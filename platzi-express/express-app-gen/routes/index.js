var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', function(req, res, next){
  res.send({
    info:{  
        name:"Gerardo Takeshi",
        last_name:"Nakamura Ramírez",
        email:"g.t.n.ramirez@gmail.com",
        phone:"434019094",
        age:"22"
    }
  });
});

module.exports = router;
