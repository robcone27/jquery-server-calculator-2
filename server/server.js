const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 5000;

let addNumberArray = [];

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('app running on PORT', PORT)
})

app.get('/adding', (req, res) => {
    res.send(addNumberArray);
});

app.post('/adding', (req, res) => {
    console.log('this is req.body', req.body);
    total(req.body);
    res.sendStatus(201);

})



app.use(express.static('server/public'));

function total(response) {
    switch (response.operator) {
        case '+':
            response.total = Number(response.num1) + Number(response.num1)
            break;
        case '-':
            response.total = Number(response.num1) - Number(response.num1)
            break;
        case '*':
            response.total = Number(response.num1) * Number(response.num1)
            break;
        case '/':
            response.total = Number(response.num1) / Number(response.num1)
            break;
    }
    addNumberArray.push(response)
    console.log('calculator', response);
}