import { MealService } from "../../service/meal.service.js";

let main = function() {
    document.addEventListener("DOMContentLoaded", function(){

        // Carregando as informações do armazenamento local
        const meals = JSON.parse(localStorage.getItem('meals')) || [];

        function loadCheckboxs(meals) {
            // Pegando a lista de checkbox
            const checkboxList = document.getElementById('checkbox-list');

            // Pegando o Modelo da checkbox
            const checkboxModel = document.querySelector('#checkbox-model');

            // Limpando a lista de checkbox para receber as novas
            checkboxList.innerHTML = '';

            // Fazemos um Loop para iterar nas refeições (pelas posição de 0 - ...)
            for(let i = 0; i < meals.length; i++){
                const meal = meals[i];

                // Clonar o modelo da checkbox
                const cloneCheckbox = checkboxModel.cloneNode(true);

                // Definir um ID único para cada input checkbox
                cloneCheckbox.querySelector('input[type="checkbox"]').setAttribute('id', `checkbox-${i + 1}`);

                // Definir o valor para a checkbox clonada
                cloneCheckbox.querySelector('input[type="checkbox"]').value = i;

                // Definir o for do label do checkbox
                cloneCheckbox.querySelector('label').setAttribute('for', `checkbox-${i + 1}`);

                // Definindo o texto do label para o dia da refeição
                cloneCheckbox.querySelector('label').textContent = meal.day;

                checkboxList.appendChild(cloneCheckbox);
            }

            if (meals.length !== 0){
                // Tirando o Display None das checkbox
                document.getElementById('checkbox-container').classList.remove('d-none');
            }
        }
        loadCheckboxs(meals);
        
        // Função que irá limitar a 2 checkbox marcadas apenas
        function validateNumberOfCheckedbox() {
            // Selecionando as checkbox
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
                    if (checkedCount > 2) {
                        this.checked = false;
                    }
                });
            });
        }
        validateNumberOfCheckedbox();

        // AO CLICAR NO BOTÃO COMPARAR
        document.getElementById('comparator-button').addEventListener('click', function(event){
            event.preventDefault();

            const meals = JSON.parse(localStorage.getItem('meals')) || [];

            // Limpando as cores verdes das tabelas
            // Limpando todas as classes de destaque
            document.querySelectorAll('.table-success').forEach(element => {
                element.classList.remove('table-success');
            });

            // Validando o numero de checkbox marcadas
            let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

            if (checkedCount !== 2){
                $('#errorAlert').fadeIn('slow').delay(3000).fadeOut('slow');
            }else{
                // Criando uma array com as 2 checkbox marcadas
                const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

                // Pegando a posição dessas refeiçõs nas Array Meals pelo valor do checkbox
                const idMeal1 = parseInt(checkboxes[0].value);
                const idMeal2 = parseInt(checkboxes[1].value);

                // ATUALIZANDO AS 2 TABELAS DE REFEIÇÕES
                // atualizando a primeira
                document.querySelector('#day-table-1').textContent = meals[idMeal1].day;
                document.querySelector('#breakfast-table-1').textContent = meals[idMeal1].breakfast;
                document.querySelector('#lunch-table-1').textContent = meals[idMeal1].lunch;
                document.querySelector('#dinner-table-1').textContent = meals[idMeal1].dinner;
                document.querySelector('#other-table-1').textContent = meals[idMeal1].otherMeals;
                const total1 = meals[idMeal1].breakfast + meals[idMeal1].lunch + meals[idMeal1].dinner + meals[idMeal1].otherMeals;
                document.querySelector('#total-table-1').textContent = total1;

                // atualizando a segunda
                document.querySelector('#day-table-2').textContent = meals[idMeal2].day;
                document.querySelector('#breakfast-table-2').textContent = meals[idMeal2].breakfast;
                document.querySelector('#lunch-table-2').textContent = meals[idMeal2].lunch;
                document.querySelector('#dinner-table-2').textContent = meals[idMeal2].dinner;
                document.querySelector('#other-table-2').textContent = meals[idMeal2].otherMeals;
                const total2 = meals[idMeal2].breakfast + meals[idMeal2].lunch + meals[idMeal2].dinner + meals[idMeal2].otherMeals;
                document.querySelector('#total-table-2').textContent = total2;

                // Verificando qual o filtro aplicado
                const filter = parseInt(document.querySelector('input[name="radio-filter"]:checked').value);
                if (filter == 0){
                    // Vamos destacar as maiores refeições

                    // verificando o café da manhã
                    if (meals[idMeal1].breakfast > meals[idMeal2].breakfast){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('breakfast-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('breakfast-row-2').classList.add('table-success');
                    }

                    // verificando o almoço
                    if (meals[idMeal1].lunch > meals[idMeal2].lunch){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('lunch-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('lunch-row-2').classList.add('table-success');
                    }

                    // verificando o jantar
                    if (meals[idMeal1].dinner > meals[idMeal2].dinner){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('dinner-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('dinner-row-2').classList.add('table-success');
                    }

                    // verificando as outras refeições
                    if (meals[idMeal1].otherMeals > meals[idMeal2].otherMeals){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('other-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('other-row-2').classList.add('table-success');
                    }

                    // verificando o café da manhã
                    if (total1 > total2){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('total-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('total-row-2').classList.add('table-success');
                    }
                }else {
                    // Vamos destacar as menores refeições

                    // verificando o café da manhã
                    if (meals[idMeal1].breakfast < meals[idMeal2].breakfast){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('breakfast-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('breakfast-row-2').classList.add('table-success');
                    }

                    // verificando o almoço
                    if (meals[idMeal1].lunch < meals[idMeal2].lunch){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('lunch-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('lunch-row-2').classList.add('table-success');
                    }

                    // verificando o jantar
                    if (meals[idMeal1].dinner < meals[idMeal2].dinner){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('dinner-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('dinner-row-2').classList.add('table-success');
                    }

                    // verificando as outras refeições
                    if (meals[idMeal1].otherMeals < meals[idMeal2].otherMeals){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('other-row-1').classList.add('table-success');

                    }else{
                        document.getElementById('other-row-2').classList.add('table-success');
                    }

                    // verificando o café da manhã
                    if (total1 < total2){
                        // Vamos colocar a cor verde na linha
                        document.getElementById('total-row-1').classList.add('table-success');
                    }else{
                        document.getElementById('total-row-2').classList.add('table-success');
                    }
                }
                // Tirando o display none do table-container
                document.getElementById('table-container').classList.remove('d-none');
            }
        });

    });
};
main();