import { User } from "../../model/user.js";

let main = function() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("myProfileForm").addEventListener("submit", function (event) {
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
                age--; // Subtraia 1 da idade se o aniversário ainda não ocorreu este ano
              }
    
              // Colocando a idade no Input
              let inputAge = document.getElementById("input-age");
              inputAge.value = age;      
    
            // Instânciando a Classe User
            let user1 = new User(username, password, name, birthday, age, height, wheight, cep, city, state);
    
            // Selecionando a Div userData
            let userData = document.querySelector("#userData");

            // Utilizando o innerHTML para adicionar a div
            userData.innerHTML = `
                <h2> Dados do Usuário </h2>
                <p>Username: ${user1.getUsername()}</p>
                <p>Password: ${user1.getPassword()}</p>
                <p>Nome: ${user1.getName()}</p>
                <p>Data de Nascimento: ${user1.getBirthday()}</p>
                <p>Idade: ${user1.getAge()}</p>
            `;   
    
        });
        
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