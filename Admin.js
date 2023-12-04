import User from  './User.js';

//classe Admin filho  de classe User 
export default class Admin extends User{

    constructor(nome,email,nascimento,role='admin',ativo=true)
{
    super(nome,email,nascimento,role,ativo)
}

nomeAdmin(){
    //erro deliberado
    return `${this.nome}`
}
exibirInfos(){
    //const objUser=this.#montaObjUser()
  
      return `${this.nome}, ${this.email},${this.nascimento},${this.role},
      ${this.ativo}`
  }
 criarCurso(nomeDoCurso,vagas)
{
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
}
}







/*
superclasse =classe pai
classe mãe = classe pai
*/