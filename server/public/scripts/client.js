console.log('JS works');

$(document).ready(onReady);

function onReady() {
    console.log('JQ ready');

    getHistory();

    $('#equalButton').on('click', calculateNumber)
    $('#clearButton').on('click', clearHistory);
}

function clearHistory() {
    $('#historyList').empty();
}

function calculateNumber() {

    let input1 = Number($('#value1').val());
    let input2 = Number($('#value2').val());
    let arithmeticButton = $('#arithmeticButton').val();
    let result = $('#result');

    $.ajax({
        type: 'POST',
        url: '/calculator-number',
        data: {
            x: input1,
            y: input2,
            type: arithmeticButton
        }
    }).then(function (response) {
        console.log(response);
        $('#result').val(response);
        $('#historyList').prepend('<li>' + input1 + ' ' + arithmeticButton + ' ' + input2 + ' = ' + response + '</li>');
        $('input').val('')
    });
}

function getHistory() {

    $.ajax({
        method: 'GET',
        url: '/calculator-history'
    })
        .then(function (response) {
            console.log(response);
            let $historyList = $('#historyList');
            response.forEach(element => {
                $historyList.append(element);
            });
            
        })
}

