//Initially assigning the rolls to 0 after each roll this variable will increment or decrement
let rolls = 0;

        //Creating a function named rollDice
        function rollDice() {
            const player1Dice = document.getElementById('player1Dice');
            const player2Dice = document.getElementById('player2Dice');
            const player1Score = document.getElementById('player1Score');
            const player2Score = document.getElementById('player2Score');
            const winner = document.getElementById('winner');

           //Generate the random numbers for the dice between 1 to 6
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;

            // Updating the background image according to the rolling
            player1Dice.style.backgroundImage = `url('dice${dice1}.png')`;
            player2Dice.style.backgroundImage = `url('dice${dice2}.png')`;

            // Calculating the score difference 
            const scoreDifference = Math.abs(dice1 - dice2);

            //Using an if statement to decide the scores according to the result of the rolling
            if (dice1 > dice2) {
                player1Score.innerText = parseInt(player1Score.innerText) + 1;
            } else if (dice2 > dice1) {
                player2Score.innerText = parseInt(player2Score.innerText) + 1;
            }
     
     
            // Declaring the winner of the game after the dice is rolled 20 times
            rolls++;
            if (rolls === 10) {
            if (player1Score.innerText > player2Score.innerText) {
             winner.innerText = 'Player 1 wins!';
          } else if (player2Score.innerText > player1Score.innerText) {
             winner.innerText = 'Player 2 wins!';
           } else {
             winner.innerText = 'It\'s a tie!';
         }
     }
 }
