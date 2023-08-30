// Archivo: functions.js
require('colors');

function numerosPares(numeros) {
  if (!numeros || numeros.length === 0) {
    console.log(colors.red('El arreglo de números está vacío.'));
    return;
  }

  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  console.log((`Número de números pares: ${numerosPares.length}`.bgCyan));
  console.log('_______________________________________________________');
  console.log(('Números pares:'.bgCyan), numerosPares.join(', '));
  console.log('_______________________________________________________');
}

function tablaDeMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log('*********************************************************'.yellow)
    console.log(`${numero} x ${i} = ${resultado}`.bgRed);
    console.log('_________________________________________________________'.yellow)
  }
}

function repetirCaracter(caracter, veces) {
  const resultado = caracter.repeat(veces);
  return resultado;
}

function contadorBase(base) {
  for (let i = 0; i < base; i++) {
    for (let j = 0; j < base; j++) {
      const num = i * base + j;
      console.log((`Número en base ${base}: ${num.toString(base)}`));
      console.log('************************************************'.bgBlack)
    }
  }
}

module.exports = {
  numerosPares,
  tablaDeMultiplicar,
  repetirCaracter,
  contadorBase
};
