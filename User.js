export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role = 'estudante', ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role;
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }

    set nome(nome) {
        this.#nome = nome;
    }
    set email(email) {
        this.#email = email;
    }
    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }
    set role(role) {
        this.#role = role;
    }
    set ativo(ativo) {
        this.#ativo = ativo;
    }

    exibiInfo() {
        return `Nome: ${this.nome}, \nEmail: ${this.email},\nNascimento: ${this.nascimento},\nRole: ${this.role},\nAtivo: ${this.ativo}.`
    }
}
