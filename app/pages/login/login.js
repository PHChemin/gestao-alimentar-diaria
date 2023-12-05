let main = function(){
    document.addEventListener("DOMContentLoaded", function(){

        // Carregando usuário salvo no armazenamento local
        let users = localStorage.getItem("users");
        let user = JSON.parse(users);
        

        // Evento do Botão Submit
        document.getElementById("login-form").addEventListener("submit", function(event){
            // Evitando que o formulário seja enviado
            event.preventDefault();

            let inputUser = document.getElementById("input-username");
            let feedbackUser = inputUser.nextElementSibling;
            let inputPassword = document.getElementById("input-password");
            let feedbackPassword = inputPassword.nextElementSibling;

            // Validando o Usuário e mostrando uma mensagem exclusiva
            if(inputUser.value != user[0].username){
                inputUser.classList.add("is-invalid");
                feedbackUser.style.display = "block";
            }else{
                inputUser.classList.remove("is-invalid");
                feedbackUser.style.display = "none";
                console.log(-1)
            }

            // Validando a Senha e mostrando uma mensagem exclusiva
            if(inputPassword.value != user[0].password){
                inputPassword.classList.add("is-invalid");
                feedbackPassword.style.display = "block";
            }else{
                inputPassword.classList.remove("is-invalid");
                feedbackPassword.style.display = "none";
                console.log(-1);
            }

            // Se tudo estiver certo vai para o perfil
            if (inputUser.value == user[0].username && inputPassword.value == user[0].password){
                console.log("Redirecionando para a página de perfil...");
                window.location.href = "../profile/profile.html";
            }
        });
    });
}
main();