//https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos/task/103407
//1.5) Para saber mais: paradigmas de programação



//dobrando o valor
//paradigma imperativo

//function dobra(vetor){
  //  let resultados = [];
 //   for (let i = 0; i < vetor.length ; i++){
    //    resultados.push(vetor[i] * 2);
  //  }
  //  return resultados;
//}

//*/paradigma  declarativo
//function dobra(vetor){
  //  return vetor.map((item) => item * 2);
//}

/*
let dataEHora = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora)
 // 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora)
 // object
*/
/*
let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getDate()
console.log(data1) //31
*/

let dataFuncao = Date()
let data2 = dataFuncao.getDate()
 //TypeError: dataFuncao.getDate is not a function