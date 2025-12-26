const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Wins:${score.wins} Loss:${score.losses}`;
    }

    function updateResultElement(result) {
      document.querySelector('.js-result').innerHTML = `${result}`;
    }

    function updateMoveElement(guess, computerMove) {
      document.querySelector('.js-moves').innerHTML = `You =
    ${guess}, 
    ${computerMove} =
    Computer`;
    }

    function playGame(guess) {
      const computerMove = pickComputerMove();
      let result = '';
      if (computerMove === guess) {
        score.wins += 1;
        result = 'You Win';
      } else {
        score.losses += 1
        
        result = 'You Loss';
      }
      updateResultElement(result);
      updateMoveElement(guess, computerMove);
      updateScoreElement();
      console.log(localStorage.setItem('score', JSON.stringify(score)));
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let result = '';
      if (randomNumber > 0.5) {
        result = 'heads';
      } else {
        result = 'tails';
      }
      return result;
    }

    updateScoreElement();