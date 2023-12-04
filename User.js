export default class User{
//prorpiedade privada
    #nome
    #email
    #nascimento
#role
#ativo
    constructor(nome,email,nascimento,role,ativo=true){
    this.#nome=nome,
    this.#email=email,
    this.#nascimento=nascimento,
   //define padrão  estudnate 
    this.#role=role || 'estudante',
    this.#ativo=ativo
}
//não confundir com pegar por link($_GET[] do PHP)
get nome(){

    return this.#nome
} 
get email(){

    return this.#email

}
get nascimento(){

    return this.#nascimento

}get role(){

    return this.#role

}get ativo(){

    return this.#ativo

}
/*
#montaObjUser(){
    return ({
        nome:this.#nome,
        email:this.#email,
        nascimento:this.#nascimento,
        role:this.#role,
        ativo:this.#ativo,

    })
}*/
set nome(novoNome){
    if (novoNome==='') {
        throw new Error('formato não válido')
    }
    this.#nome=novoNome
}
exibirInfos(){
  //const objUser=this.#montaObjUser()

    return `${this.nome}, ${this.email},${this.nascimento},${this.role},
    ${this.ativo}`
}

}




/*
const novoUser= new User('Juliana','j@j.com','2021-01-01');

console.log(novoUser);
console.log(novoUser.exibirInfos());

/**/
//console.log(User.prototype.isPrototypeOf(novoUser))//true ;*/