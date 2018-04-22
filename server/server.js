const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const calculatorNumber = require('./modules/calculator-number')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/calculator-history', calculatorNumber.getHistory)

app.post('/calculator-number', calculatorNumber.inputHistory)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})