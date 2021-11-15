$(document).ready(onReady);


function onReady() {
$('#result').on('click', doMath)
$('#add').on('click', handleOperator)
$('#subtract').on('click', handleOperator)
$('#multiply').on('click', handleOperator)
$('#divide').on('click', handleOperator)
}
//add click handlers for all operator button presses

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
        $('#history').text(JSON.stringify(response.expressionsRan, null, 2))
    }).catch((error) => {
        console.log('fix it dummy', error);
    })
}

function handleOperator (event) {
    console.log(event.target.id)
    operator = event.target.id
};





