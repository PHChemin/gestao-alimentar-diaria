import { User } from "../../model/user.js";

let main = function() {
    document.addEventListener("DOMContentLoaded", function () {

        // Carregando o Username e Senha
        

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

        // First Step Adicionando o "-" automaticamente ao CEP
        document.getElementById("input-cep").addEventListener("input", function(event) {
            let inputValue = document.getElementById("input-cep").value;
            inputValue = inputValue.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
            if (inputValue.length >= 5) {
              inputValue = inputValue.slice(0, 5) + "-" + inputValue.slice(5, 8);
            }
            this.value = inputValue;
          });

        // Evento ao clicar no botão Salvar
        document.getElementById("my-profile-form").addEventListener("submit", function (event) {
            // Evitando que o formulário seja enviado
            event.preventDefault();
        
            // Salvando os Valores dos Inputs em Variáveis
            let username = document.getElementById("input-user").value;
            let password = document.getElementById("input-password").value;
            let name = document.getElementById("input-name").value;
            let inputDate = document.getElementById("input-date").value;
            let height = document.getElementById("input-height").value;
            let wheight = document.getElementById("input-wheight").value;
            let cep = document.getElementById("input-cep").value;
            let city = document.getElementById("input-city").value;
            let state = document.getElementById("input-state").value;
    

            // Validação do Formulário
    
              // Corrigindo o fuso horário da Data
              let date = new Date(inputDate);
              date.setUTCHours(date.getUTCHours() + 3);

              // Descobrindo a Idade
              let birthday = new Date(date);
              let currentDate = new Date();
              let age = currentDate.getFullYear() - birthday.getFullYear();
              if (currentDate.getMonth() < birthday.getMonth() || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())) {
                age--;
              }
    
              // Colocando a idade no Input
              let inputAge = document.getElementById("input-age");
              inputAge.value = age;

              // TODO Pegar a cidade e estado da API Via CEP



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

                // TODO exibir as informações nos inputs

                // Instânciando a Classe User
                let user1 = new User(username, password, name, birthday, age, height, wheight, cep, city, state);

                // Selecionando a Div userData
                let userData = document.querySelector("#userData");

                // Utilizando o innerHTML para adicionar a div
                userData.innerHTML = `
                    <h2> Dados do Usuário </h2>
                    <p>Username: ${user1.username()}</p>
                    <p>Password: ${user1.password()}</p>
                    <p>Nome: ${user1.name()}</p>
                    <p>Data de Nascimento: ${user1.birthday()}</p>
                    <p>Idade: ${user1.age()}</p>
                    <p>Altura: ${user1.height()}</p>
                    <p>Peso: ${user1.wheight()}</p>
                    <p>CEP: ${user1.cep()}</p>
                    <p>Cidade: ${user1.city()}</p>
                    <p>Estado: ${user1.state()}</p>
                `;
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