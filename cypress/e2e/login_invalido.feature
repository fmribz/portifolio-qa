# language: pt
Funcionalidade: Validação de segurança no login

Contexto:
Dado que estou na tela de login

Cenário: Login com senha incorreta
Quando preencho o e-mail com "standard_user"
E preencho a senha com "senha_falsa"
E clico em Acessar
Então a mensagem de credenciais inválidas deve aparecer

Cenário: Login com usuário bloqueado
Quando preencho o e-mail com "locked_out_user"
E preencho a senha com "secret_sauce"
E clico em Acessar
Então a mensagem de usuário bloqueado deve aparecer