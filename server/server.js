const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('app running on PORT', PORT)
})






app.use(express.static('server/public'));