# 🛒 Marketplace API — Backend

API backend de um **Marketplace escalável**, desenvolvido seguindo princípios de arquitetura modular, organização por domínio e boas práticas de desenvolvimento com foco em performance, manutenção e evolução da aplicação.

O projeto foi construído utilizando **NestJS**, com uma arquitetura baseada em módulos independentes, permitindo crescimento da aplicação de forma organizada e facilitando futuras integrações como pagamentos, notificações, microsserviços e processamento assíncrono.

---

## 🚀 Tecnologias utilizadas

### Backend

- **NestJS** — Framework Node.js para construção de APIs escaláveis
- **TypeScript** — Tipagem estática e maior segurança no desenvolvimento
- **Prisma ORM** — ORM moderno para gerenciamento e acesso ao banco de dados
- **PostgreSQL** — Banco de dados relacional principal
- **Swagger** — Documentação interativa da API
- **RabbitMQ** — Mensageria para comunicação assíncrona entre serviços
- **Redis** — Cache e otimização de consultas frequentes

---

## 🏗️ Arquitetura do Projeto

A aplicação segue uma arquitetura modular baseada nos recursos do NestJS.

O objetivo dessa estrutura é manter cada domínio da aplicação isolado, facilitando:

- Manutenção do código
- Escalabilidade
- Testabilidade
- Adição de novos módulos
- Evolução para uma arquitetura de microsserviços futuramente

Estrutura inicial:

```bash
src
├── modules
│   ├── auth
│   │   ├── controllers
│   │   ├── services
│   │   ├── dto
│   │   ├── guards
│   │   └── auth.module.ts
│   │
│   ├── users
│   │   ├── controllers
│   │   ├── services
│   │   ├── dto
│   │   └── users.module.ts
│   │
│   ├── products
│   │   ├── controllers
│   │   ├── services
│   │   ├── dto
│   │   └── products.module.ts
│   │
│   ├── orders
│   │   ├── controllers
│   │   ├── services
│   │   ├── dto
│   │   └── orders.module.ts
│   │
│   └── ...
│
├── prisma
│   ├── prisma.service.ts
│   └── schema.prisma
│
├── shared
│   ├── decorators
│   ├── filters
│   ├── interceptors
│   ├── pipes
│   └── utils
│
├── config
│
├── app.module.ts
└── main.ts
```

---

# 📦 Módulos da aplicação

## 🔐 Auth Module

Responsável pelo gerenciamento de autenticação e autorização.

Possíveis funcionalidades:

- Cadastro de usuários
- Login
- JWT Authentication
- Controle de permissões
- Proteção de rotas

---

## 👤 Users Module

Gerenciamento dos usuários da plataforma.

Funcionalidades:

- Criar usuário
- Atualizar perfil
- Buscar informações do usuário
- Controle de roles

Exemplo:

```text
ADMIN
USER
SELLER
```

---

## 📦 Products Module

Gerenciamento dos produtos disponíveis no marketplace.

Funcionalidades:

- Criar produtos
- Atualizar produtos
- Remover produtos
- Listagem de produtos
- Busca e filtros
- Controle de estoque

---

## 🛒 Cart Module

Gerenciamento do carrinho de compras.

Funcionalidades:

- Adicionar produto ao carrinho
- Remover produto
- Atualizar quantidade
- Calcular valores

---

## 📑 Orders Module

Responsável pelo fluxo dos pedidos.

Possível fluxo:

```
Pedido criado
      |
      ↓
Pagamento confirmado
      |
      ↓
Pedido enviado
      |
      ↓
Pedido entregue
```

Status:

```text
PENDING
PAID
SHIPPED
DELIVERED
CANCELLED
```

---

# 📨 Mensageria com RabbitMQ

O RabbitMQ será utilizado para processamento assíncrono de eventos da aplicação.

Exemplos:

- Criação de pedidos
- Atualização de estoque
- Processamentos em background
- Comunicação entre módulos independentes

Fluxo:

```
API
 |
 |
Evento
 |
 ↓
RabbitMQ
 |
 ↓
Consumer
 |
 ↓
Processamento
```

Exemplo de evento:

```json
{
  "event": "ORDER_CREATED",
  "orderId": "123",
  "userId": "456"
}
```

---

# ⚡ Cache com Redis

Redis será utilizado para melhorar performance da aplicação.

Possíveis utilizações:

- Cache de produtos populares
- Sessões
- Dados temporários
- Controle de consultas frequentes

Exemplo:

```
Request
   |
   ↓
Redis Cache
   |
   ├── Existe?
   |       |
   |       ↓
   |    Retorna dados
   |
   └── Não existe
           |
           ↓
       PostgreSQL
```

---

# 📚 Documentação da API

A API possui documentação utilizando Swagger.

Após iniciar o projeto:

```
http://localhost:3000/api/docs
```

A documentação permite:

- Visualizar endpoints
- Testar requisições
- Conferir DTOs
- Validar contratos da API

---

# 🗄️ Banco de Dados

Banco principal:

```
PostgreSQL
```

Gerenciamento:

```
Prisma ORM
```

Exemplo de fluxo:

```
Application
      |
      ↓
Prisma Client
      |
      ↓
PostgreSQL
```

---

# ⚙️ Configuração do ambiente

Crie um arquivo:

```bash
.env
```

Exemplo:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/marketplace"

JWT_SECRET="secret"

REDIS_HOST="localhost"
REDIS_PORT=6379

RABBITMQ_URL="amqp://localhost:5672"
```

---

# ▶️ Instalação

Clone o projeto:

```bash
git clone <repository-url>
```

Entre no diretório:

```bash
cd marketplace-api
```

Instale as dependências:

```bash
npm install
```

---

## Prisma

Gerar o client:

```bash
npx prisma generate
```

Executar migrations:

```bash
npx prisma migrate dev
```

---

## Executar aplicação

Modo desenvolvimento:

```bash
npm run start:dev
```

Produção:

```bash
npm run start:prod
```

---

# 🧪 Testes

Executar testes unitários:

```bash
npm run test
```

Testes E2E:

```bash
npm run test:e2e
```

---

# 🔮 Próximas implementações

- [ ] Sistema de pagamentos
- [ ] Upload de imagens dos produtos
- [ ] Controle avançado de estoque
- [ ] Sistema de avaliações
- [ ] Favoritos
- [ ] Cupons de desconto
- [ ] Dashboard administrativo
- [ ] Integração com gateways de pagamento
- [ ] Serviço de notificações
- [ ] Envio de emails transacionais após configuração de domínio

---

# 🎯 Objetivo do projeto

Criar uma API robusta de marketplace aplicando conceitos utilizados em aplicações reais:

✅ Arquitetura modular
✅ Código escalável
✅ Separação de responsabilidades
✅ Comunicação assíncrona
✅ Cache de dados
✅ Boas práticas REST
✅ Documentação profissional
✅ Preparação para crescimento da aplicação

---

## 👨‍💻 Desenvolvido por

**Guilherme Parente**

Backend Developer | NestJS | TypeScript | Prisma | PostgreSQL

```
Construindo soluções escaláveis, organizadas e preparadas para produção.
```
