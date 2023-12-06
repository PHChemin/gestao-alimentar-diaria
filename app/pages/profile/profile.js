import { User } from "../../model/user.js";
import { UserService } from "../../service/user.service.js";

let main = function() {
    document.addEventListener("DOMContentLoaded", function () {

        // Carregando o Usuário Salvo Anteriormente
        let savedUser = localStorage.getItem("users");
        let users = JSON.parse(savedUser);
        let user = users[0];

        // Colocando usuário e senha no input
        document.getElementById("input-user").value = user.username;
        document.getElementById("input-password").value = user.password;

        if (users && users.length > 0) {
            // Carregando as informações salvas do usuário apenas se o usuário existir e houver informações
            document.getElementById("input-name").value = user.name || '';
            document.getElementById("input-user").value = user.username || '';
            document.getElementById("input-date").value = user.birthday || '';
            document.getElementById("input-age").value = user.age || '';
            document.getElementById("input-height").value = user.height || '';
            document.getElementById("input-wheight").value = user.wheight || '';
            document.getElementById("input-cep").value = user.cep || '';
            document.getElementById("input-city").value = user.city || '';
            document.getElementById("input-state").value = user.state || '';
        }


        // First Step Validação Nome
        document.getElementById("input-name").addEventListener("input", function(validationName) {
            let inputValue = document.getElementById("input-name").value;
            const regexName = /^[a-zA-Zà-ú\s]*$/;
            let inputElement = document.getElementById("input-name");
            const feedback = inputElement.nextElementSibling;

            if (!inputValue || !regexName.test(inputValue)){
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // First Step Validação Altura
        document.getElementById("input-height").addEventListener("input", function(validationHeight) {
            let inputValue = document.getElementById("input-height").value;
            let inputElement = document.getElementById("input-height");
            const feedback = inputElement.nextElementSibling;

            if (!inputValue || inputValue <= 0 || inputValue > 300) {
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // First Step Validação Peso
        document.getElementById("input-wheight").addEventListener("input", function (validationWheight) {
            let inputValue = document.getElementById("input-wheight").value;
            let inputElement = document.getElementById("input-wheight");
            const feedback = inputElement.nextElementSibling;

            if (!inputValue || inputValue <= 0 || inputValue > 800) {
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // Utilizando o Plugin Mask do Jquery
        $(document).ready(function(){
            $('#input-cep').mask('00000-000');
        });

        // Validando se o CEP contém o número correto de caracteres
        $('#input-cep').on('input', function(validationCep) {
            let inputElement = document.getElementById("input-cep");
            const feedback = inputElement.nextElementSibling;

            let inputValue = document.getElementById("input-cep").value;

            if (inputValue.length !== 9) {
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // Evento ao clicar no botão Salvar
        document.getElementById("my-profile-form").addEventListener("submit", function (event) {
            // Evitando que o formulário seja enviado
            event.preventDefault();
        
            // Salvando os Valores dos Inputs em Variáveis
            let name = document.getElementById("input-name").value;
            let inputDate = document.getElementById("input-date").value;
            let height = document.getElementById("input-height").value;
            let wheight = document.getElementById("input-wheight").value;
            let cep = document.getElementById("input-cep").value;
    

            // Validação do Formulário
    
              // Corrigindo o fuso horário da Data
              let birthday = inputDate;
              let date = new Date(inputDate);
              date = date.toISOString().split('T')[0];
              //date.setUTCHours(date.getUTCHours() + 3);

              // Descobrindo a Idade
              date = new Date(date);
              let currentDate = new Date();
              let age = currentDate.getFullYear() - date.getFullYear();
              if (currentDate.getMonth() < date.getMonth() || (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate())) {
                age--;
              }
    
              // Colocando a idade no Input
              let inputAge = document.getElementById("input-age");
              inputAge.value = age;

              // Coloca a Cidade buscada no via CEP para o input-city
              async function updateCity() {
                let cep = document.getElementById("input-cep").value;
                // Remover o "-" da string do CEP
                cep = cep.replace(/\D/g, '');

                const city = await UserService.getCityFromCep(cep);
                document.getElementById("input-city").value = city;
                
                // Atualizando o objeto
                user.city = city;
              }
              updateCity(); // Chama a função para buscar a cidade

              // Coloca o Estado buscado no via CEP para o input-state
              async function updateUf() {
                let cep = document.getElementById("input-cep").value;
                // Remover o "-" da string do CEP
                cep = cep.replace(/\D/g, '');

                const state = await UserService.getUfFromCep(cep);
                document.getElementById("input-state").value = state;

                // Atualizando o Estado no Objeto
                user.state = state;
              }
              updateUf(); // Chama a função para buscar o estado


            // Checando a validade das informações
            let elementsInvalid = document.querySelectorAll(".is-invalid");
            let saveButton = document.getElementById("save-form");
            let form = document.getElementById("my-profile-form");

            // Se algum elemento estiver com a tag is-invalid aparecerá o popover
            // Ou se ele não passar pelo checkValidity() também aparacerá o popover
            if (elementsInvalid.length > 0 || !form.checkValidity()) {
                saveButton.setAttribute("data-bs-toggle", "popover");
                saveButton.setAttribute("data-bs-title", "Ops!");
                saveButton.setAttribute("data-bs-content", "Está faltando informações ou existe um erro no preenchimento!");

                let popover = new bootstrap.Popover(saveButton, {
                    trigger: "focus",
                });
                popover.show();
            }else {
                let existingPopover = bootstrap.Popover.getInstance(saveButton);
                if (existingPopover) {
                    existingPopover.dispose();
                }

                // Atualizando a Classe User
                user.name = name;
                user.birthday = birthday;
                user.age = age;
                user.height = height;
                user.wheight = wheight;
                user.cep = cep;
                user.city = document.getElementById('input-city').value;
                user.state = document.getElementById('input-state').value;

                users[0] = user;

                // Salvando no local storage
                localStorage.setItem("users", JSON.stringify(users));

                // Mostra e esconde o Alert de sucesso com jquery
                $('#sucessAlert').fadeIn('slow').delay(3000).fadeOut('slow');
            }
        });
        
        // Função de Limpar Inputs
        function clearInputs() {
            // Selecionando todos os campos;
            let inputsForClear = document.querySelectorAll(".form-control");
            console.log(inputsForClear);
            for(let i = 0; i < inputsForClear.length; i++)
                inputsForClear[i].value = "";
        }
        
        // Pegando pelo Id do Botão Limpar e chamando a função ao clicar
        document.getElementById("clearForm").addEventListener("click", clearInputs);
    });
}
main();