var button1 = Math.floor(Math.random() * 13);
var button2 = Math.floor(Math.random() * 13);
var button3 = Math.floor(Math.random() * 13);
var button4 = Math.floor(Math.random() * 13);



var total = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
var runningTotal = 0;
var wins = 0;
var losses = 0;


$(document).ready(function () {

    // BUTTON ONE

    $("#button1").click(function () {
        var but1 = runningTotal += button1;
        $('#bucket').text('Running Total: ' + but1);
        if (runningTotal === total) {
            alert('You Win! Congrats! You hit the target amount!');
            var win1 = wins += 1;
            $('#wins').text('Wins: ' + win1);


        }
        if (runningTotal > total) {
            alert('You Lose! Game Over.. Your total is ' + runningTotal + '. You were supposed to get ' + total + '.');
            var losses1 = losses += 1;
            $('#losses').text('Losses: ' + losses1);

        }

    });

    // BUTTON TWO

    $("#button2").click(function () {
        var but2 = runningTotal += button2;
        $('#bucket').text('Running Total: ' + but2);
        if (runningTotal === total) {
            alert('You Win! Congrats! You hit the target amount!');
            var win1 = wins += 1;
            $('#wins').text('Wins: ' + win1);
        }
        if (runningTotal > total) {
            alert('You Lose! Game Over.. Your total is ' + runningTotal + '. You were supposed to get ' + total + '.');
            var losses1 = losses += 1;
            $('#losses').text('Losses: ' + losses1);
        }
    });

    // BUTTON THREE

    $("#button3").click(function () {
        var but3 = runningTotal += button3;
        $('#bucket').text('Running Total: ' + but3);
        if (runningTotal === total) {
            alert('You Win! Congrats! You hit the target amount!');
            var win1 = wins += 1;
            $('#wins').text('Wins: ' + win1);
        }
        if (runningTotal > total) {
            alert('You Lose! Game Over.. Your total is ' + runningTotal + '. You were supposed to get ' + total + '.');
            var losses1 = losses += 1;
            $('#losses').text('Losses: ' + losses1);
        }
    });

    // BUTTON FOUR

    $("#button4").click(function () {
        var but4 = runningTotal += button4;
        $('#bucket').text('Running Total: ' + but4);
        if (runningTotal === total) {
            alert('You Win! Congrats! You hit the target amount!');
            var win1 = wins += 1;
            $('#wins').text('Wins: ' + win1);
        }
        if (runningTotal > total) {
            alert('You Lose! Game Over.. Your total is ' + runningTotal + '. You were supposed to get ' + total + '.');
            var losses1 = losses += 1;
            $('#losses').text('Losses: ' + losses1);

        }
    });

    // RESTART BUTTON

    $("#restartButton").click(function () {
        runningTotal = 0;
        var total = newNumber();
        $("#totalScore").text('Total Score: ' + total);
        $("#bucket").text('Running Total: ' + runningTotal);
    });

    $('#totalScore').append(total);
    $('#runningTotal').append(runningTotal);
});

function newValues() {
    var newVal = Math.floor(Math.random() * 13);
    return newVal
}


function newNumber() {
    var newNum = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
    return newNum
}

function loser() {
    if (runningTotal > total) {
        alert('You Lose! Game Over..');
    }
}
function winner() {
    if (runningTotal === total);
    alert('You Win! Congrats!')
}


