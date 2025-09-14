# **Node Telecrypto - Telegram Bot**

## **Introdução**

**Node Telecrypto** é um bot para **Telegram** que permite consultar cotações de moedas em tempo real, incluindo criptomoedas.


## **Estrutura do Projeto**

```bash
├── src/
│   ├── bot/
│   │   ├── commands/                  # Comandos do bot (ex: start.js, currency.js)
│   │   └── index.js                    # Arquivo principal que inicializa o bot
│   ├── configs/
│   │   ├── config.js                   # Configurações gerais (API URLs, tokens)
│   │   └── coinsConfig.js              # Definições de moedas populares e mapa de nomes
│   ├── services/
│   │   ├── chatState.js                # Controle do estado do chat (pendências de resposta)
│   │   └── currencyService.js          # Funções de consulta de cotações
│   └── utils/
│       ├── coinsUtil.js                # Funções auxiliares para lookup de moedas
│       └── formatters.js               # Funções para formatação de valores monetários
├── .env.example                         # Exemplo de variáveis de ambiente
├── .gitignore
├── LICENSE
├── README.md
└── package.json
```

## **Como rodar o projeto**

Siga os passos abaixo para executar o bot localmente:

1. **Clone o repositório**

```bash
git clone https://github.com/by-scottlucas/node-telecrypto.git
cd node-telecrypto
```

2. **Instale as dependências**

```bash
npm install
```

ou

```bash
yarn
```

3. **Configure variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias, seguindo o exemplo do `.env.example`:

```env
TELEGRAM_TOKEN=your_token_here
AWESOME_API_URL="https://economia.awesomeapi.com.br/json/last";
```

4. **Execute o bot em modo de desenvolvimento**

```bash
npm run dev
```

ou

```bash
yarn dev
```

O bot ficará disponível e responderá aos comandos no seu Telegram.


### **Comandos Disponíveis**

* `/start` — Exibe mensagem de boas-vindas e instruções de uso.

* `/cotacao [moeda]` — Consulta a cotação de uma moeda, aceitando siglas ou nomes parciais.
  Exemplos:

  ```
  /cotacao USD
  /cotacao euro
  /cotacao dólar
  /cotacao bitcoin
  ```

* `/cotacao [moedas separadas por vírgula]` — Consulta várias moedas de uma vez.
  Exemplos:

  ```
  /cotacao USD,EUR,BTC
  /cotacao dólar,euro,bitcoin
  /cotacao usd,ethereum,libra
  ```

> O bot retorna a cotação de cada moeda listada em sequência, facilitando consultas múltiplas sem sobrecarregar a interface.


## **Tecnologias Utilizadas**

* [Node.js](https://nodejs.org/) — Plataforma para execução do bot.
* [Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api) — Integração com Telegram.
* [Axios](https://axios-http.com/) — Requisições HTTP para APIs de cotação.
* [dotenv](https://www.npmjs.com/package/dotenv) — Gerenciamento de variáveis de ambiente.
* [Nodemon](https://www.npmjs.com/package/nodemon) — Monitoramento automático para desenvolvimento.

## **Licença**

Este projeto está licenciado sob a **[Licença MIT](./LICENSE)**.

## **Autor**

Este projeto foi desenvolvido por **Lucas Santos Silva**, Desenvolvedor Full Stack, graduado pela **Escola Técnica do Estado de São Paulo (ETEC)** nos cursos de **Informática (Suporte)** e **Informática para Internet**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bylucasss/)