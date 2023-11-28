export class UserService {
    constructor() {}

    // Função Estática para acessar no profile.js
    // Função que vai buscar pela CIDADE na API Via Cep
    static async getCityFromCep(cep) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data.localidade;
    }

    // Função Estática para acessar no profile.js
    // Função que vai buscar pelo UF na API Via Cep
    static async getUfFromCep(cep) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data.uf;
    }

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