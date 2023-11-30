export class MealService {
    constructor(){}

    // Constante para a chave de armazenamento local
    LOCAL_STORAGE_KEY = 'meals';

    // Método para salvar as refeições no armazenamento local
    // Utilizando uma array de objetos (meals)
    savedLocal(meal){
        // Obtendo as refeições salvas
        let meals = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        
        // Verificando se há refeições salvas no localStorage
        meals = meals ? JSON.parse(meals) : [];

        // Adicionando a mel na array
        meals.push(meal)

        // Salvando a Array de Refeições no armazenamento local
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(meals));

        return meals;
    }
}