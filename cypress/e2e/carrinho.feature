# language: pt
Funcionalidade: Carrinho de Compras

Contexto:
    Dado que realizo o login no sistema

Cenário: Adicionar produto ao carrinho com sucesso
    Quando clico no botão "add-to-cart-sauce-labs-backpack"
    Então o ícone do carrinho deve exibir a quantidade "1"

Cenário: Remover produto do carrinho com sucesso
    Quando clico no botão "add-to-cart-sauce-labs-backpack"
    E clico no botão "remove-sauce-labs-backpack"
    Então o ícone de quantidade do carrinho não deve ser exibido