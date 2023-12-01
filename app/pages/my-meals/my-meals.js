// Carregar as refeições salvas e criar as tabelas
function loadAndCreateTables() {

    // Pegando as refeições salvas no armazenamento local
    const meals = JSON.parse(localStorage.getItem('meals')) || [];

    // Pegando o elemento da Lista de Tabelas no HTML
    const mealsList = document.getElementById('tables-list');

    // Pegar o Modelo da Tabela
    const tableModel = document.querySelector('#table-model');

    // Limpa a lista de tabela antes de adicionar as refeições e depois de pegar o modelo da tabela
    mealsList.innerHTML = '';

    // Fazemos um Loop para iterar nas refeições (pelas posição de 0 - ...)
    for(let i = 0; i < meals.length; i++){
        const meal = meals[i];

        // Clonar o modelo de tabela
        const cloneTable = tableModel.cloneNode(true);

        // Colocando a data da refeição
        cloneTable.querySelector('#day-table').textContent = meal.day;

        // Colocando as calorias do Café da Manhã
        cloneTable.querySelector('#breakfast-table').textContent = meal.breakfast;

        // Colocando as calorias do Almoço
        cloneTable.querySelector('#lunch-table').textContent = meal.lunch;

        // Colocando as calorias da Janta
        cloneTable.querySelector('#dinner-table').textContent = meal.dinner;

        // Colocando as calorias das Outras Refeições
        cloneTable.querySelector('#other-table').textContent = meal.otherMeals;

        // Calculando o TOTAL
        const total = parseInt(meal.breakfast) + parseInt(meal.lunch) + parseInt(meal.dinner) + parseInt(meal.otherMeals);
        // Colocando o TOTAL na tabela
        cloneTable.querySelector('#total-table').textContent = total;

        mealsList.appendChild(cloneTable);
    }

    // Após as tabelas clonadas e adicionadas vamos chamar a função que irá mostrar elas
    const hasResult = meals.length > 0;
    showResult(hasResult);
}

function showResult(hasResult) {
    const noResultDiv = document.getElementById('no-result');
    const tableContainerDiv = document.getElementById('table-container');

    if(hasResult){
        tableContainerDiv.classList.remove('d-none');
        noResultDiv.classList.add('d-none');
    }else{
        noResultDiv.classList.remove('d-none')
        tableContainerDiv.classList.add('d-none');
    }
}

// Chama a função ao carregar a página
window.onload = loadAndCreateTables;