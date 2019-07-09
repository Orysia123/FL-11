let gamePlay = confirm('Do you want to play a game?');
let maxRange = 8;
let attempts = 3;
let maxPrize = 100;
let winPrize = 100;
let totalPrize = 0;
let randomNumber, userNumber, playAgain;
let two = 2;
let three = 3;
let four = 4;

if (gamePlay) {
    while (attempts >= 1) {
        randomNumber = Math.floor(Math.random() * (maxRange + 1));
        console.log(randomNumber);
        userNumber = prompt(
            'Please enter a number of pocket on which the ball could land. From 0  ' + maxRange +
            '\nAttempts left: ' + attempts-- +
            '\nTotal prize: ' + totalPrize +
            '\nPossible prize on current attempt: ' + winPrize, '');
        if (userNumber === randomNumber) {
            totalPrize = totalPrize + winPrize;
            winPrize = three * winPrize;
            maxRange += four;
            attempts = three;
            playAgain = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$.Do you want to continue?');
            if (playAgain) {
                maxPrize = two * maxPrize;
                winPrize = maxPrize;
                alert('Congratulation! Your prize is: ' + totalPrize + 'Do you want to continue?');
            } else {
                break;
            }
        } else {
            winPrize = Math.floor(winPrize / two);
        }
        if (attempts === 0) {
            alert('Thank you for a game. Your prize is: ' + totalPrize);
            gamePlay = confirm('Do you wants to play again?');
        }
    }
} else {
    alert('You did not become a millionaire, but can')
}