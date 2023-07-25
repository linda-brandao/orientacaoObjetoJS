import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaAluno(nomeDoAluno, nomeDoCurso) {
        return `Estudante ${nomeDoAluno} passou no curso ${nomeDoCurso}.`;
    }
}
