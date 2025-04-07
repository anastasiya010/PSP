document.addEventListener('DOMContentLoaded', () => {
  const result = document.getElementById('result');
  let currentValue = '0';
  let firstOperand = null;
  let operator = null;
  let memory = 0;
  let shouldResetScreen = false;
  let isDarkTheme = false;
  let memoryDisplay = document.createElement('div');
  memoryDisplay.id = 'memory';
  document.body.prepend(memoryDisplay);


  // Обновление дисплея
  function updateDisplay() {
      result.textContent = currentValue;
  }

  // Добавление цифры
  function inputDigit(digit) {
      if (shouldResetScreen) {
          currentValue = digit;
          shouldResetScreen = false;
      } else {
          currentValue = currentValue === '0' ? digit : currentValue + digit;
      }
  }

  // Добавление точки
  function inputDecimal() {
    if (shouldResetScreen) {
        currentValue = '0.';
        shouldResetScreen = false;
        return;
    }
    
    // Разрешаем точку только если нет существующей
    if (!currentValue.includes('.')) {
        // Добавляем ведущий ноль если необходимо
        currentValue = currentValue === '' || currentValue === '0' 
            ? '0.' 
            : currentValue + '.';
    }
}

  // Обработка операторов
  function handleOperator(nextOperator) {
      const input = parseFloat(currentValue);
      
      if (operator && shouldResetScreen) {
          operator = nextOperator;
          return;
      }

      if (firstOperand === null) {
          firstOperand = input;
      } else if (operator) {
          const result = calculate(firstOperand, input, operator);
          currentValue = `${result}`;
          firstOperand = result;
      }

      shouldResetScreen = true;
      operator = nextOperator;
  }

  // Вычисления
  function calculate(first, second, operator) {
      switch(operator) {
          case '+': return first + second;
          case '-': return first - second;
          case '*': return first * second;
          case '/': return first / second;
          default: return second;
      }
  }

  // Специальные функции
  function square() {
      const value = parseFloat(currentValue);
      currentValue = (value * value).toString();
  }

  function squareRoot() {
      const value = parseFloat(currentValue);
      currentValue = (Math.sqrt(value)).toString();
  }

  function factorial() {
      let value = parseInt(currentValue);
      if (value < 0) return;
      let result = 1;
      for(let i = 2; i <= value; i++) result *= i;
      currentValue = result.toString();
  }

  function reciprocal() {
      const value = parseFloat(currentValue);
      currentValue = (1 / value).toString();
  }

  function calculateMoleculeBits() {
    const AVOGADRO = 6.02214076e23; // Число Авогадро
    try {
        const moles = parseFloat(currentValue);
        
        // Проверка ввода
        if (isNaN(moles)) throw new Error('Некорректный ввод');
        if (moles <= 0) throw new Error('Количество молей должно быть > 0');
        
        // Расчет количества молекул
        const molecules = moles * AVOGADRO;
        
        // Расчет бит (логарифм по основанию 2)
        const bits = Math.log2(molecules);
        
        // Проверка на переполнение
        if (!isFinite(bits)) throw new Error('Слишком большое значение');
        
        currentValue = Math.ceil(bits).toString();
    } catch (e) {
        currentValue = 'Ошибка: ' + e.message;
    }
    updateDisplay();
}

  // Обработчики событий
  document.querySelectorAll('[id^="btn"], #tchk').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'btn000') {
            if (currentValue !== '0' && !shouldResetScreen) {
                currentValue += '000';
            }
        } 
        else if (button.id === 'tchk') {
            inputDecimal();
        } 
        else {
            if (shouldResetScreen) {
                currentValue = button.textContent;
                shouldResetScreen = false;
            } else {
                currentValue = currentValue === '0' 
                    ? button.textContent 
                    : currentValue + button.textContent;
            }
        }
        updateDisplay();
    });
});

// Исправленный обработчик операторов (исключаем точку)
document.querySelectorAll('.oper').forEach(button => {
    if (button.id !== 'tchk') { // Важное исключение!
        button.addEventListener('click', () => {
            handleOperator(button.textContent);
            updateDisplay();
        });
    }
});

  document.getElementById('clear').addEventListener('click', () => {
      currentValue = '0';
      firstOperand = null;
      operator = null;
      updateDisplay();
  });

  document.getElementById('equal').addEventListener('click', () => {
      if (operator === null) return;
      const input = parseFloat(currentValue);
      currentValue = calculate(firstOperand, input, operator).toString();
      firstOperand = null;
      operator = null;
      updateDisplay();
  });

  document.getElementById('ster').addEventListener('click', () => {
      currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
      updateDisplay();
  });

  document.getElementById('step').addEventListener('click', () => { square(); updateDisplay(); });
  document.getElementById('koren').addEventListener('click', () => { squareRoot(); updateDisplay(); });
  document.getElementById('fakt').addEventListener('click', () => { factorial(); updateDisplay(); });
  document.getElementById('obrat').addEventListener('click', () => { reciprocal(); updateDisplay(); });

  // Память
  document.getElementById('M+').addEventListener('click', () => { 
    memory += parseFloat(currentValue);
    updateMemoryDisplay();
});

document.getElementById('M-').addEventListener('click', () => { 
    memory -= parseFloat(currentValue);
    updateMemoryDisplay();
});

function updateMemoryDisplay() {
  memoryDisplay.textContent = `Memory: ${memory}`;
}

document.getElementById('MR').addEventListener('click', () => {
  memory = 0;
  updateMemoryDisplay();
});

  // Дополнительные функции
  document.getElementById('znak').addEventListener('click', () => {
      currentValue = (parseFloat(currentValue) * -1).toString();
      updateDisplay();
  });

  document.getElementById('prosent').addEventListener('click', () => {
      currentValue = (parseFloat(currentValue) / 100).toString();
      updateDisplay();
  });

  document.getElementById('iz')?.addEventListener('click', () => {
    calculateMoleculeBits();
  });

  document.getElementById('fon').addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    
    // Сохраняем состояние в LocalStorage
    localStorage.setItem('calculatorTheme', isDarkTheme ? 'dark' : 'light');
});

// Проверка сохраненной темы при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('calculatorTheme');
    if(savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
    }
});

document.getElementById('okno').addEventListener('click', () => {
  const resultElement = document.getElementById('result');
  resultElement.classList.toggle('custom-result-theme');
  
  // Сохраняем состояние в LocalStorage
  const isCustomTheme = resultElement.classList.contains('custom-result-theme');
  localStorage.setItem('resultTheme', isCustomTheme ? 'custom' : 'default');
});

// В обработчик DOMContentLoaded добавить
const savedResultTheme = localStorage.getItem('resultTheme');
if(savedResultTheme === 'custom') {
  document.getElementById('result').classList.add('custom-result-theme');
}

  // Инициализация
  updateDisplay();
});