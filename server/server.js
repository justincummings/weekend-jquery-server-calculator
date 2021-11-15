const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const expressionsRan = [];


app.use(express.static('./server/public'));


app.post('/result', (req, res) => {
    console.log('in route for /result', req.body);
    expressionsRan.push(req.body);
    //req.body is the same as the "data" object in the ajax call
    const answer = doMath (req.body.firstNum, req.body.operator, req.body.secondNum);
    res.json({
        answer: answer,
    expressionsRan: expressionsRan});
});

const doMath = (firstNum, operator, secondNum) => {
    if (operator === "add") {
        return Number(firstNum) + Number(secondNum)
    }
    if (operator  === "subtract") {
        return Number(firstNum) - Number(secondNum)
    }
    if (operator === "multiply") {
        return Number(firstNum) * Number(secondNum)
        //multiply not working
    }
    if (operator === "divide") {
        return Number(firstNum) / Number(secondNum)
    }
}


app.listen(PORT, function(){
    console.log('server is up');
});
