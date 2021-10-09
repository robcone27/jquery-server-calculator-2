$(document).ready(handleReady);

function handleReady() {
    console.log('jq running');
}

console.log('js')

function addNumbers(num0, num1) {
    let answer = num0 + num1;
    return answer;
}

console.log(addNumbers(6, 2))

// add new player 
function addNumber() {
    $.ajax({
        method: 'POST',
        url: '/adding',
        data: {
            inputOne: $(`#inputOne`).val(),
            inputTwo: $(`#inputTwo`).val(),
        }

    }).then(function (response) {
        console.log('success post', response);
        $(`#answerReturn`).empty();
        // getPlayerData();        <------------neeed to look into this function 
        $(`#inputOne`).val(``);
        $(`#inputTwo`).val(``);
    }).catch(function (response) {

    })
};

// get player data from the server
function getPlayerData() {
    $.ajax({
        type: 'GET',
        url: '/adding'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let player = response[i];
            $('#answerReturn').append(`
                <tr>
                    <td>${player.firstName}</td>
                    <td>${player.lastName}</td>
                    <td>${player.born}</td>
                </tr>
            `);
        }
    });
}