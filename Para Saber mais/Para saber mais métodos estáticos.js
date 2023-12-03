class User {
  constructor(nome, email, cpf) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`
  }
}
