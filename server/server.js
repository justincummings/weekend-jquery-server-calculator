const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const expressions = [];


app.use(express.static('./server/public'));

// app.get('/result', (req, res) => {
//     console.log('in get route for calculator result');
//     res.send();
// });

app.post('/result', (req, res) => {
    console.log('in route for /result', req.body);
    expressions.push(req.body);
    res.send(200);
});

app.listen(PORT, function(){
    console.log('server is up');
});
