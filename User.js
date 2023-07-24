export default class User {
    constructor(nome, email, nascimento, role = 'estudante', ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role;
        this.ativo = ativo;
    }

    exibiInfo() {
        return `Nome: ${this.nome}, \nEmail: ${this.email},\nNascimento: ${this.nascimento},\nRole: ${this.role},\nAtivo: ${this.ativo}.`
    }
}
