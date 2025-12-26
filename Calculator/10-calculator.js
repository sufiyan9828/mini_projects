let calculation = localStorage.getItem('calculation') || '';
    
    displayCalculation();

    function updateCalculation(value) {
      calculation += value;
      saveAndDisplay();
    }

    function calculateResult() {
      if (!calculation) return;
      calculation = eval(calculation);
      calculation = String(calculation);
      saveAndDisplay();
    }

    function clearCalculation() {
      calculation = '';
      saveAndDisplay();
    }

    function saveAndDisplay() {
      localStorage.setItem('calculation', calculation);
      displayCalculation();
    }

    function displayCalculation() {
      document.querySelector('.js-type').innerHTML = calculation || '0';
    }