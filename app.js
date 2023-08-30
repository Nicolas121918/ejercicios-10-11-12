
const {
    numerosPares,
    tablaDeMultiplicar,
    repetirCaracter,
    contadorBase
  } = require('./proy_modules/functions.js');
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Ingresa un número para mostrar los números pares: ', function (numero) {
    const numeros = [parseInt(numero)];
    numerosPares(numeros);
    rl.question('Ingresa un número para la tabla de multiplicar: ', function (numero) {
      tablaDeMultiplicar(parseInt(numero));
      rl.question('Ingresa el carácter y el número de veces para repetir: ', function (input) {
        const [caracter, veces] = input.split(' ');
        const resultado = repetirCaracter(caracter, parseInt(veces));
        console.log(`Resultado: ${resultado}`);
        rl.question('Ingresa la base para el contador en base: ', function (base) {
          contadorBase(parseInt(base));
          rl.close();
        });
      });
    });
  });
  