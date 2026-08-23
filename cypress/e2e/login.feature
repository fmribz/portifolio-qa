# language: pt
Funcionalidade: Login do sistema

Cenário: Login com sucesso
    Dado que estou na tela de login
    Quando preencho o campo "username" com "standard_user"
    E preencho o campo "password" com "secret_sauce"
    E clico no botão "login-button"
    Então o título de Produtos deve aparecer na tela