/*const ola  =() =>{
  nome ='Giovanni';
console.log('Olá '+nome);
}

ola();
*/
/*use strict mostra erros ocultos*/

"use strict"
//delete window.document


/*
class Aluno{
get nota(){

    return 6;
}
};

let aluno = new Aluno();

aluno.nota=10;*/
/*
const soma=function (a,a,c) {
    return a +a +c;



}*/


/*
const novoUser = new User('Carol', 'c@c.com', '12312312312')
console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312
*//*
class User {
    constructor(nome, email, cpf) {
      this.nome = nome
      this.email = email
      this.cpf = cpf
    }
  
    static exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
  }
  */
  //console.log(User.exibirInfos())
  //undefined, undefined, undefined
  class User {
    constructor() {
      this.nome = 'Camila'
      this.email = 'c@c.com'
      this.cpf = '12312312312'
    }
  
    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
  
    static exibeNome(nome) {
      return nome
    }
  }
  

  const novoUser = new User('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser)) //Camila


console.log(User.exibeNome('Jaqueline')) //Jaqueline
