const firstNumber = 500;
const secondNumber = 1000;
const thirdNumber = 50;

const foo = (a, b, c) => {
    const oneSum = a + b;
    const result = ((oneSum * c) / 100) + a;
    return result;
}

console.log(foo(firstNumber, secondNumber, thirdNumber));