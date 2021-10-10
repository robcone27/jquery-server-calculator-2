$(document).ready(handleReady);

function handleReady() {
    console.log('jq running');
    getAddData();
    $(`#equalButton`).on(`click`, addNumber);
    $(`#addButton`).on(`click`, addBtn);
    $(`#minusButton`).on(`click`, minusBtn);
    $(`#divideButton`).on(`click`, divideBtn);
    $(`#multiplyButton`).on(`click`, multiplyBtn);
}
let operator = '';

function addBtn() {
    operator = '+'
}
function minusBtn() {
    operator = '-'
}
function multiplyBtn() {
    operator = '*'
}
function divideBtn() {
    operator = '/'
}



function calc(num0, num1) {
    let answer = num0 + num1;
    return answer;
}

// console.log(addNumbers(6, 2))

// add new player 
function addNumber() {
    $.ajax({
        method: 'POST',
        url: '/adding',
        data: {
            inputOne: $(`#inputOne`).val(),
            inputTwo: $(`#inputTwo`).val(),
            operator: operator,
        }

    }).then(function (response) {
        console.log('success post', response);
        $(`#answerReturn`).empty();
        getAddData();
        $(`#inputOne`).val(``);
        $(`#inputTwo`).val(``);
    }).catch(function (response) {

    })
};

// get player data from the server
function getAddData() {
    $.ajax({
        method: 'GET',
        url: '/adding'
    }).then(function (response) {
        console.log('success', response);
        // append data to the DOM
        renderHistory(response);
    }).catch(function (response) {
        alert('request failed')
    })
}


function renderHistory(res) {
    $(`.historyOfEquations`).empty();
    $(`#equation`).empty();

    for (let number of res) {
        $(`#equation`).append(`
        <li>
        ${number.inputOne} ${number.operator} ${number.inputTwo} = ${number.total}
        </li>`)
        $(`.answer`).html(`
        <h2>${number.total}</h2>
        `)

    }
}