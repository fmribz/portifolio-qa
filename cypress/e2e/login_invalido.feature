# language: pt
Funcionalidade: Validação de segurança no login

Contexto:
    Dado que estou na tela de login

Cenário: Login com senha incorreta
    Quando preencho o campo "username" com "standard_user"
    E preencho o campo "password" com "senha_falsa"
    E clico no botão "login-button"
    Então a mensagem de credenciais inválidas deve aparecer

Cenário: Login com usuário bloqueado
    Quando preencho o campo "username" com "locked_out_user"
    E preencho o campo "password" com "secret_sauce"
    E clico no botão "login-button"
    Então a mensagem de usuário bloqueado deve aparecer