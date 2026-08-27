# 🧪 Automação E2E - Swag Labs (Cypress + BDD)

Este repositório contém a arquitetura de testes Ponta a Ponta (E2E) desenvolvida para auditar o fluxo de compras do e-commerce Swag Labs. O projeto foi estruturado com foco em Arquitetura Limpa, Integração Contínua e Interceptação de Rede.

**Stack Tecnológica:**
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Cucumber](https://img.shields.io/badge/-cucumber-%2323D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/-javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

<br>

**⚙️ Arquitetura e Padrões de Qualidade**

Este laboratório foi construído aplicando as melhores práticas de mercado para garantir estabilidade, escalabilidade e governança de código:

* **BDD (Behavior-Driven Development):** Cenários escritos em Gherkin (`.feature`) atuando como documentação viva e contratos de negócio.
* **Integração Contínua (CI/CD):** Esteira autônoma configurada no GitHub Actions. Cada novo *Pull Request* aciona uma Máquina Virtual (Ubuntu) que executa os testes E2E em *background*.
* **Governança (Zero Trust):** *Branch Protection Rules* ativadas na `main`. Códigos instáveis que reprovam na esteira da nuvem têm o *Merge* bloqueado pelo sistema.
* **Network Mocks (Interceptação de Rede):** Uso de `cy.intercept()` para assumir o controle do tráfego, sequestrando requisições e injetando *Fixtures* (.json). Blinda o Front-End contra quedas de banco de dados e elimina testes instáveis.
* **Otimização de Performance:** Uso de *Custom Commands* para rotas expressas (bypass de UI) e *Data-Driven Testing* isolando as massas de dados.

<br>

**🚀 Como Clonar e Executar o Laboratório**

**1. Pré-requisitos do Sistema:**
* [Node.js](https://nodejs.org/) instalado na máquina.
* Git configurado.

**2. Instalação e Setup:**
Abra o seu terminal e execute os comandos abaixo em sequência:

```bash
# Clone este repositório para a sua máquina
git clone [https://github.com/fmribz/portifolio-qa.git](https://github.com/fmribz/portifolio-qa.git)

# Acesse a pasta raiz do projeto
cd portifolio-qa

# Instale todas as dependências do motor (Cypress e Cucumber)
npm install

# Para abrir o laboratório visual e assistir o robô operando na tela:
npx cypress open

# Para rodar os testes de forma invisível no terminal (Headless mode):
npx cypress run