let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    if (j % 2 !== 0) {
      matriz[i][j] = 3;
    } else {
      matriz[i][j] = 5;
    }
  }
}

console.table(matriz);
console.log("-------------");

let matriz2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function somarMatriz(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i % 2 === 0) {
      matriz2[i][j] = 7;
    } else {
      matriz2[i][j] = 3;
    }
  }
}

console.log("A soma é: " + somarMatriz(matriz2));
