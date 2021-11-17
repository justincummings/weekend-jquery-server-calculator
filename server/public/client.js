$(document).ready(onReady);

let operator = 'add';

function onReady() {
$('#result').on('click', doMath)
$('#add').on('click', handleOperator)
$('#subtract').on('click', handleOperator)
$('#multipy').on('click', handleOperator)
$('#divide').on('click', handleOperator)
$('#clear').on('click', clearInputs)
}

function doMath(){
    console.log('in doMath');
    let expression = {
        firstNum : $('#firstNum').val(),
        operator : operator, 
        secondNum: $('#secondNum').val()
    }

    $.ajax({
        method: 'POST',
        url: 'http://localhost:5000/result',
        data: expression,
    }).then((response) => {
        console.log('server has responded', response);
        $('#answer').text(response.answer)
        console.log('#history',response.expressionsRan)
        $('#history').text(JSON.stringify(response.expressionsRan, null, 2))
    }).catch((error) => {
        console.log('fix it dummy', error);
    })
}

function handleOperator (event) {
    console.log(event.target.id);
    operator = event.target.id;
    // if () {
// if event.target.id is equal to "whateverid" of the button,
// set operator 
    // }
};

function clearInputs () {
    console.log("clearInputs clicked");
    $('#firstNum').val('');
    $('#secondNum').val('');    
}





