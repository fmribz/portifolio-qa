# language: pt
Funcionalidade: Carrinho de Compras

Contexto:
Dado que estou na tela de login
Quando preencho o campo "username" com "standard_user"
E preencho o campo "password" com "secret_sauce"
E clico no botão "login-button"

Cenário: Adicionar produto ao carrinho com sucesso
Quando clico no botão "add-to-cart-sauce-labs-backpack"
Então o ícone do carrinho deve exibir a quantidade "1"