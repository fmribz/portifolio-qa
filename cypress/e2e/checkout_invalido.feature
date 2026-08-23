# language: pt
Funcionalidade: Validacao de Seguranca do Checkout

Contexto:
    Dado que estou na tela de login
    Quando preencho o campo "username" com "standard_user"
    E preencho o campo "password" com "secret_sauce"
    E clico no botão "login-button"
    E clico no botão "add-to-cart-sauce-labs-backpack"
    E clico no botão "shopping-cart-link"
    E clico no botão "checkout"

Cenário: Tentar finalizar a compra com todos os dados em branco
    Quando clico no botão "continue"
    Então devo ver a mensagem de erro "Error: First Name is required"