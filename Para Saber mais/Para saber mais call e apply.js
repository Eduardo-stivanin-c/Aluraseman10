/*
function exibeInfos() {
 console.log(this.nome, this.email)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}

exibeInfos.call(user)
*/

/*

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')
   */

   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user, this.nome, this.email)
    }
   }
   
   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

   /*function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

*/
/*

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user, [this.nome, this.email])
    }
   }
    user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com*/
/*
    const soma = function(num1, num2) {
        return num1 + num2;
       }
**/
       /*const soma = function(num1, num2) {
        return num1 + num2;
       }*/
/*
       const soma = (num1, num2) => num1 + num2;

       
       
       console.log(soma(1, 1)) //2

       //é possível executar a função antes de declará-la no código
       function soma(num1, num2) {
        return num1 + num2;
       }       
*/

console.log(soma(1, 1)) //erro

//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
 return num1 + num2;
}