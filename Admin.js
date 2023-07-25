import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criaCurso(nomeDoCurso, vagas) {
        return `O curso ${nomeDoCurso} foi criado com ${vagas} vagas.`;
    }
}
