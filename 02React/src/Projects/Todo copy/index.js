const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const copiedNumbers = [...numbers];
copiedNumbers[0] = 100;
console.log(numbers);
console.log(copiedNumbers);
