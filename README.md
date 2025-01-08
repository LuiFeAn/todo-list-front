# App - Guia de Uso e Configuração

Bem-vindo ao projeto! Este guia fornecerá instruções claras para rodar e utilizar a aplicação em diferentes modos.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org) (recomendado: última versão LTS)
- [pnpm](https://pnpm.io/installation) (para gerenciamento de pacotes)
- [Docker](https://www.docker.com) e [Docker Compose](https://docs.docker.com/compose/) (para executar com containers, se desejado)

---

## Rodando o Projeto

### Modo Desenvolvimento

Para iniciar o projeto no modo de desenvolvimento (com hot reload):

```bash
pnpm dev
```

O projeto estará disponível na porta configurada (por padrão, 5173).

---

### Modo Build

Para rodar a versão otimizada de produção:

1. Compile o projeto:

   ```bash
   pnpm build
   ```

2. Execute o servidor de pré-visualização:

   ```bash
   pnpm preview
   ```

O projeto estará disponível em `http://localhost:4173`.

---

### Modo Docker Compose

Caso prefira utilizar o Docker Compose, siga os passos abaixo:

1. Certifique-se de que o Docker e o Docker Compose estão instalados e funcionando.
2. Suba os containers:

   ```bash
   docker compose up -d
   ```

3. Acesse o projeto em `http://localhost:4173`.

Para parar os containers:

```bash
docker compose down
```

---

## Estrutura do Projeto

Abaixo está a estrutura principal do projeto:

```
/
├── src/                # Código fonte da aplicação
├── public/             # Arquivos estáticos
├── Dockerfile          # Configuração do Docker
├── docker-compose.yml  # Configuração do Docker Compose
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
```

---

## Configuração de Ambiente

Certifique-se de criar um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
VITE_API_URL=http://localhost:port/v1
```

Substitua `port` pela porta adequada ao seu ambiente.

Para referência, consulte o arquivo `.env.example`.
