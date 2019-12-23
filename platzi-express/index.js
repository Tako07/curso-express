const express = require('express')
const app = express();

app.get('/', function(req, res, next){
    res.send({hello: "world"});
});

app.get('/info', function(req, res, next){
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

const server = app.listen(8000, function(){
    console.log(`listening http://localhost:${server.address().port}`);
});