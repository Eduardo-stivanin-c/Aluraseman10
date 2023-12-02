import User from "./User";

//classe Admin filho  de classe User 
class Admin extends User{

    constructor(nome,email,nascimento,role='admin',ativo=true)
{
    super((nome,email,nascimento,role,ativo))
}
}

criarCurso(nomeDoCurso,vagas)
{
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
}



const  novoAdmin =  new Admin('Rodrigo','r@r.com','2021-01-01');

//console.log(novoAdmin);
console.log(novoAdmin.criarCurso('JS',20));





/*
superclasse =classe pai
classe mãe = classe pai
*/