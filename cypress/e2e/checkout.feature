# language: pt
Funcionalidade: Finalização de Compra (Checkout)

Contexto:
    Dado que estou na tela de login
    Quando preencho o campo "username" com "standard_user"
    E preencho o campo "password" com "secret_sauce"
    E clico no botão "login-button"
    E clico no botão "add-to-cart-sauce-labs-backpack"
    E clico no botão "shopping-cart-link"

Cenário: Realizar compra de produto com sucesso
    Quando clico no botão "checkout"
    E preencho o campo "firstName" com "Fábio"
    E preencho o campo "lastName" com "Quality Assurance"
    E preencho o campo "postalCode" com "14000-000"
    E clico no botão "continue"
    E clico no botão "finish"
    Então devo ver a mensagem de sucesso "Thank you for your order!"