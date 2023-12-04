export default class User{
//prorpiedade privada
    #nome
    #email
    #nascimento
#role
#ativo
    constructor(nome,email,nascimento,role,ativo=true){
    this.#nome=nome
    this.#email=email
    this.#nascimento=nascimento
   //define padrão  estudnate 
    this.#role=role || 'estudante'
    this.#ativo=ativo
}

#montaObjUser(){
    return ({
        nome:this.#nome,
        email:this.#email,
        nascimento:this.#nascimento,
        role:this.#role,
        ativo:this.#ativo,

    })
}
exibirInfos(){
   const objUser=this.#montaObjUser()

    return `${objUser.nome}, ${objUser.email},${objUser.nascimento},${objUser.role},
    ${objUser.ativo}`
}

}




/*
const novoUser= new User('Juliana','j@j.com','2021-01-01');

console.log(novoUser);
console.log(novoUser.exibirInfos());

/**/
//console.log(User.prototype.isPrototypeOf(novoUser))//true ;*/