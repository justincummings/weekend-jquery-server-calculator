$(document).ready(onReady);

let operator;

function onReady() {
$('#result').on('click', doMath)
$('#add').on('click', handleOperator)
}

function doMath(){
    console.log('in doMath');
    let expression = {
        firstNum : $('#firstNum').val(),
        operator : operator,
        secondNum: $('#secondNum').val(),
        // result: 
    }

    $.ajax({
        method: 'POST',
        url: '/result',
        data: expression,
    }).then((response) => {
        console.log('server has responded', response);
      }).catch((error) => {
        console.log('fix it dummy', error);
      })
}

function handleOperator (event) {
    console.log(event.target.id)
    // if () {
// if event.target.id is equal to "whateverid" of the button,
// set operator 
    // }
};




