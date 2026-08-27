# language: pt

Funcionalidade: Laboratório de Interceptacao de Rede (Mocks)

Cenário: Sequestrar requisicao do Front-End e injetar JSON customizado
    Dado que estou na tela de testes de rede do Cypress
    E intercepto a rota de comentarios
    Quando clico no botão de buscar dados
    Então a tela deve exibir a minha carga hackeada