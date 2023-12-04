
import User from "./User.js";
import Docente from "./docente.js";
import Admin from "./Admin.js";
 const  novoUser= new User('Mariana ','m@m.com','2021-01-01');

 //console.log(novoUser.exibirInfos());

 //da erro deliberado no da profª também aqui
//novoUser.#nome="Márcia"
//novoUser.#email="Márcia"
/*const novoAdmin = new Admin("Rodrigo",'rd@rd.com',"2021-01-01");

console.log(novoAdmin.nome)//Rodrigo;
novoAdmin.nome="";
console.log(novoAdmin.nome);

*/
const novoDocente=new Docente('Guilherme','g@g.com','2021-01-01')
console.log(novoDocente.exibirInfos());
//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.nomeAdmin());
 //# cserve pra demacarp proiedade privada