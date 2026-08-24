# language: pt
Funcionalidade: Validacao de Seguranca do Checkout

Contexto:
    Dado que realizo o login no sistema
    E clico no botão "add-to-cart-sauce-labs-backpack"
    E clico no botão "shopping-cart-link"
    E clico no botão "checkout"

Esquema do Cenário: Tentar finalizar a compra com campos obrigatórios em branco
    Quando preencho o campo "firstName" com "<primeiro_nome>"
    E preencho o campo "lastName" com "<sobrenome>"
    E preencho o campo "postalCode" com "<cep>"
    E clico no botão "continue"
    Então devo ver a mensagem de erro "<mensagem_erro>"

    Exemplos:
        |primeiro_nome|sobrenome|cep     |mensagem_erro                 |
        |             |QA       |14000000|Error: First Name is required |
        |Fábio        |         |14000000|Error: Last Name is required  |
        |Fábio        |QA       |        |Error: Postal Code is required|
        |             |         |        |Error: First Name is required |