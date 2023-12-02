let user = {
    perfil: 'estudante'
   }
   
   let estudante = {
    nome: 'juliana'
   }
   
   Object.setPrototypeOf(estudante, user)

   console.log(estudante.nome) // 'juliana'
console.log(estudante.perfil) //'estudante'