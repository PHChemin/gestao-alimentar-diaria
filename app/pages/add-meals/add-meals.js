import { Meal } from "../../model/meal.js";
import { MealService } from "../../service/meal.service.js";

let main = function () {
    document.addEventListener("DOMContentLoaded", function(){

        // First Step BREAKFAST verificando se possui apenas Números
        // Feito com o REGEX no HTML
        function validateBreakfast() {
            const inputCal = document.getElementById('input-breakfast');
            const feedback = inputCal.nextElementSibling;
            if (inputCal.validity.valueMissing) {
                feedback.textContent = 'O campo é obrigatório.';
                feedback.style.display = "block";
                return false;
            }
            if (inputCal.validity.patternMismatch) {
                feedback.textContent = 'Por favor insira um valor válido!';
                feedback.style.display = "block";
                return false;
            }
            feedback.style.display = 'none';
            return true;
        }
        document.getElementById("input-breakfast").addEventListener("input", validateBreakfast);

        // First Step LUNCH verificando se possui apenas Números
        // Feito com o REGEX no HTML
        function validateLunch() {
            const inputCal = document.getElementById('input-lunch');
            const feedback = inputCal.nextElementSibling;
            if (inputCal.validity.valueMissing) {
                feedback.textContent = 'O campo é obrigatório.';
                feedback.style.display = "block";
                return false;
            }
            if (inputCal.validity.patternMismatch) {
                feedback.textContent = 'Por favor insira um valor válido!';
                feedback.style.display = "block";
                return false;
            }
            feedback.style.display = 'none';
            return true;
        }
        document.getElementById("input-lunch").addEventListener("input", validateLunch);

        // First Step DINNER verificando se possui apenas Números
        // Feito com o REGEX no HTML
        function validateDinner() {
            const inputCal = document.getElementById('input-dinner');
            const feedback = inputCal.nextElementSibling;
            if (inputCal.validity.valueMissing) {
                feedback.textContent = 'O campo é obrigatório.';
                feedback.style.display = "block";
                return false;
            }
            if (inputCal.validity.patternMismatch) {
                feedback.textContent = 'Por favor insira um valor válido!';
                feedback.style.display = "block";
                return false;
            }
            feedback.style.display = 'none';
            return true;
        }
        document.getElementById("input-dinner").addEventListener("input", validateDinner);

        // First Step OTHER MEALS verificando se possui apenas Números
        // Feito com o REGEX no HTML
        function validateOtherMeals() {
            const inputCal = document.getElementById('input-other');
            const feedback = inputCal.nextElementSibling;
            if (inputCal.validity.valueMissing) {
                feedback.textContent = 'O campo é obrigatório.';
                feedback.style.display = "block";
                return false;
            }
            if (inputCal.validity.patternMismatch) {
                feedback.textContent = 'Por favor insira um valor válido!';
                feedback.style.display = "block";
                return false;
            }
            feedback.style.display = 'none';
            return true;
        }
        document.getElementById("input-other").addEventListener("input", validateOtherMeals);
        
        // Instanciando o MealService para poder atualizar ou criar refeições
        const mealService = new MealService()

        // AO CLICAR NO BOTÃO ADICIONAR
        document.getElementById("add-meal-form").addEventListener("submit", function (event){
            event.preventDefault();

            // Pegando APENAS o dia/mes/ano do input day
            let inputDay = document.getElementById("input-day").value;
            let dayNotFormatted = new Date(inputDay);

            const year = dayNotFormatted.getUTCFullYear();
            const month = dayNotFormatted.getUTCMonth() + 1;
            const day = dayNotFormatted.getUTCDate();

            const dayFormatted = `${day}/${month}/${year}`;
            // dayFormatted vai para o objeto

            // Pegando as calorias do BREAKFAST
            const breakfast = parseInt(document.getElementById("input-breakfast").value);

            // Pegando as calorias do LUNCH
            const lunch = parseInt(document.getElementById("input-lunch").value);

            // Pegando as calorias do DINNER
            const dinner = parseInt(document.getElementById("input-dinner").value);

            // Pegando as calorias do OTHER MEALS
            const otherMeals = parseInt(document.getElementById("input-other").value);

            
            // Agora Instanciamos a classe Meal
            let meal = new Meal(dayFormatted, breakfast, lunch, dinner, otherMeals);

            // Chamamos o método de salvamento da classe MealService
            mealService.savedLocal(meal);

            // Mostra e esconde o Alert de sucesso com jquery
            $('#sucessAlert').fadeIn('slow').delay(3000).fadeOut('slow');

            // Limpando os campos após adicionar e aparecer a mensagem de Sucesso
            this.reset();
        });
    });
}
main();