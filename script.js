function isSymmetric(symbols) {
  for (let i = 0; i < symbols.length / 2; i++) {
    if (symbols[i] !== symbols[symbols.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Тесты 

const test1 = [2, 5, 7, 5, 2];
console.log("Тест 1:", isSymmetric(test1));

const test2 = [4, 1, 3, 1, 4];
console.log("Тест 2:", isSymmetric(test2));

const test3 = [2, 5, 7, 4, 2];
console.log("Тест 3:", isSymmetric(test3));

const test4 = [9, 9, 9, 9];
console.log("Тест 4:", isSymmetric(test4));

const test5 = [1, 2];
console.log("Тест 5:", isSymmetric(test5));

const test6 = [6];
console.log("Тест 6:", isSymmetric(test6));
