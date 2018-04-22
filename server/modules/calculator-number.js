let history = [];
function inputHistory(req, res) {
    console.log(req.body);
    let x = parseInt(req.body.x);
    let y = parseInt(req.body.y);
    let operation = req.body.type;
    let result;

    if (operation === '+') {
        result = x + y;
    } else if (operation === '-') {
        result = x - y;
    } else if (operation === '*') {
        result = x * y;
    } else {
        result = x / y;
    }

    history.push('<li>' + x + ' ' + operation + ' ' + y + ' = ' + result + '</li>');
    res.send(result + '');
}


function getHistory(req, res) {
    res.send(history);
}
module.exports = {
    inputHistory: inputHistory,
    getHistory: getHistory
};