//Para saber mais módulos
/*
module.exports = function soma(num1, num2) {
    return num1 + num2;
   };
*/
/*
   function soma(num1, num2) {
    return num1 + num2;
   }
   
   module.exports = soma;
*/
/*
   const { multiplica, soma } = require('./caminho/arquivo');

const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);
*/

const chalk = require('chalk');

const fs = require('fs');
/*

export function soma(num1, num2) {
    return num1 + num2;
   }
   
   export function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
   }



*/
   /*
function soma(num1, num2) {
    return num1 + num2;
   }
   
   function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
   }
   
   export default multiplica;*/
/*

   function soma(num1, num2) {
    return num1 + num2;
   }
   
   function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
   }
   
   export { multiplica, soma };

   */
   import soma from './caminho/arquivo.js';

   import { soma, multiplica } from './caminho/arquivo.js';
   import soma  from './caminho/arquivo.js';
   import { soma, multiplica } from './caminho/arquivo.js';

   import * as operacoes from './caminho/arquivo.js';
   
   const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);



