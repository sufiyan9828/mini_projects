const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    }


    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';
      if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Loss:${score.losses} Tie: ${score.ties}`;
    }

    function updateResultElement(result) {
      document.querySelector('.js-result').innerHTML = `${result}`;
    }

    function updateMoveElement(playerMove,computerMove) {
      document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    }

    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';
      if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie!!';
        } else if (computerMove === 'paper') {
          result = 'you Lose';
        } else if (computerMove === 'scissors') {
          result = 'you Win';
        }
      } else if (playerMove === 'paper') {

        if (computerMove === 'paper') {
          result = 'Tie!!';
        } else if (computerMove === 'rock') {
          result = 'you Lose';
        } else if (computerMove === 'scissors') {
          result = 'you Win';
        }

      } else if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
          result = 'Tie!!';
        } else if (computerMove === 'rock') {
          result = 'you Lose';
        } else if (computerMove === 'paper') {
          result = 'you Win';
        }
      }

      if (result === 'you Win') {
        score.wins += 1;
      } else if (result === 'you Lose') {
        score.losses += 1;
      } else if (result === 'Tie!!') {
        score.ties += 1;
      }

      console.log(localStorage.setItem('score', JSON.stringify(score)));

      updateResultElement(result);
      updateMoveElement(playerMove,computerMove);
      updateScoreElement();

    }
    updateScoreElement();
