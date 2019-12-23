const express = require("express");
const app = express();
const expressJsx = require("./engine-jsx");

app.engine("jsx", expressJsx);
app.set("views", "./views");
app.set("view engine", "jsx");

app.get('/', function(req, res, next){
    res.render("index", {hello:"Holi",world:"mundo"})
});

const server = app.listen(8000, function(){
    console.log(`Listening http://${server.address().port}`);
});