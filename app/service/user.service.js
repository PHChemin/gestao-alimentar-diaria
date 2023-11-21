export class UserService {
    constructor() {}

    // Constante para a chave de armazenamento local
    LOCAL_STORAGE_KEY = 'users';

    saveLocal(user) {
        // Obtendo os usuários salvos no armazenamento local
        let users = localStorage.getItem(this.LOCAL_STORAGE_KEY);

        // Verificando se há usuários existentes
        users = users ? JSON.parse(users) : [];

        // Adicionando um novo usuário ao Array
        users.push(user);

        // Salvando os usuários atualizados no armazenamento local
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(users));

        return users;
    }
}