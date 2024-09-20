
let display = document.getElementById('display');
let currentInput = ''; // 현재 입력된 값을 저장
let resultDisplayed = false; // 결과가 표시된 후의 상태를 확인하기 위한 플래그

// 숫자 버튼을 누를 때 호출되는 함수
function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay(); // 결과가 표시된 후 새로운 입력이 시작되면 초기화
        resultDisplayed = false;
    }

    currentInput += number;
    display.textContent = currentInput;
}

// 연산자 버튼을 누를 때 호출되는 함수
function appendOperator(operator) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }

    currentInput += operator;
    display.textContent = currentInput;
}

// '=' 버튼을 누르면 계산 결과를 표시
function calculateResult() {
    try {
        // 수식을 eval 함수로 계산 (÷, x는 실제 연산자로 변환)
        currentInput = currentInput.replace('÷', '/').replace('x', '*');
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString(); // 결과를 저장해서 이어서 연산 가능
        resultDisplayed = true;
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

// 'AC' 버튼으로 화면을 초기화
function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}
