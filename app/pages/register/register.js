import { User } from "../../model/user.js";

let main = function () {
    document.addEventListener("DOMContentLoaded", function (){
        // Validação Nome de Usuário
        document.getElementById("input-username").addEventListener("input", function(validationUsername) {
            let inputValue = document.getElementById("input-username").value;
            const regexUsername = /^[a-zA-Z]{4,}$/;
            let inputElement = document.getElementById("input-username");
            const feedback = inputElement.nextElementSibling;

            if (!inputValue || !regexUsername.test(inputValue)){
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // Validação Senha
        document.getElementById("input-password").addEventListener("input", function(validationPassword){
            let inputValue = document.getElementById("input-password").value;
            const regexPassword = /^(?=.*[A-Z])[a-zA-Z0-9]{4,}$/;
            let inputElement = document.getElementById("input-password");
            const feedback = inputElement.nextElementSibling;

            if (!inputValue || !regexPassword.test(inputValue)){
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });

        // Validação Confirmar Senha
        document.getElementById("input-confirm-password").addEventListener("input", function(validationConfirmPassword){
            let inputValue = document.getElementById("input-password").value;
            let inputValue2 = document.getElementById("input-confirm-password").value;
            let inputElement = document.getElementById("input-confirm-password");
            const feedback = inputElement.nextElementSibling;

            if (inputValue !== inputValue2){
                inputElement.classList.add("is-invalid");
                feedback.style.display = "block";
            }else{
                inputElement.classList.remove("is-invalid");
                feedback.style.display = "none";
            }
        });
    });

    // Ao clicar em salvar
    document.getElementById("register-form").addEventListener("submit", function(event){
        // Evitando que o formulário seja enviado
        event.preventDefault();

        let username = document.getElementById("input-username").value;
        let password = document.getElementById("input-password").value;
        
        // Checando a validade das informações
        let elementsInvalid = document.querySelectorAll(".is-invalid");
        let registerButton = document.getElementById("register-button");
        let form = document.getElementById("register-form");

        // Se algum elemento estiver com a tag is-invalid aparecerá o popover
        // Ou se ele não passar pelo checkValidity() também aparacerá o popover
        if (elementsInvalid.length > 0 || !form.checkValidity()) {
            registerButton.setAttribute("data-bs-toggle", "popover");
            registerButton.setAttribute("data-bs-title", "Ops!");
            registerButton.setAttribute("data-bs-content", "Está faltando informações ou existe um erro no preenchimento!");

            let popover = new bootstrap.Popover(registerButton, {
                trigger: "focus",
            });
            popover.show();
        }else {
            let existingPopover = bootstrap.Popover.getInstance(registerButton);
            if (existingPopover) {
                existingPopover.dispose();
            }

            let user1 = new User (username, password);
        }
    });
};
main();