const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// allows us to post nested objects -> xtended: true
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(request, response) {
    // response.send('<h1>Hello World! Ooooff! How are ya?</h1>');
    response.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    // res.send("Yay! It worked :D");
    // console.log(req.body); //req.body is the parsed version of the HTTP request
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is:" + result);
})

app.listen(3000, function(){
    console.log('It works!');
})