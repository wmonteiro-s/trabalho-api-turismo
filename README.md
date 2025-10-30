# 🌍 API de Turismo

Esta é uma API RESTful desenvolvida em **Node.js** com **Express.js** e **Prisma ORM**, criada para gerenciar **usuários, administradores e locais turísticos**.
O projeto faz parte de um sistema de turismo que permite cadastro, autenticação e administração de pontos turísticos, hospedagens e passeios.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — ambiente de execução JavaScript no servidor
- **Express.js** — framework para criação das rotas e middlewares
- **Prisma ORM** — ORM moderno para interação com o banco de dados
- **SQLite** — banco de dados leve e local para desenvolvimento
- **Zod** — validação de dados e esquemas
- **bcrypt** — criptografia de senhas
- **jsonwebtoken (JWT)** — autenticação por token
- **dotenv** — gerenciamento de variáveis de ambiente

---

## 📁 Estrutura de Pastas

src/
├── controllers/
│ ├── placesController.js
│ └── turistaController.js
│
├── database/
│ └── database.sqlite
│
├── middleware/
│ ├── authentication.js
│ ├── permissao.js
│ └── validate.js
│
├── routes/
│ ├── routerPlace.js
│ └── useRouter.js
│
├── schemas/
│ ├── placesSchema.js
│ └── turismoschema.js
│
├── utils/
│ └── auth.js
│
├── app.js
└── server.js

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seuusuario/trabalho-api-turismo.git
cd trabalho-api-turismo
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo **.env** na raiz do projeto com o conteúdo:
```bash
DATABASE_URL="file:./src/database/database.sqlite"
JWT_SECRET="secrete-dev"
```

### 4️⃣ Executar as migrações do Prisma
```bash
npx prisma migrate dev --name init
```

### 5️⃣ Iniciar o servidor
```bash
npm run dev
```

---

Servidor disponível em:

👉 http://localhost:3000

## 🧩 Endpoints Principais

### 🔐 Autenticação e Usuários (/users)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| POST | `/users/registreuser` | Cadastrar um novo turista |
| POST | `/users/registreadmin` | Cadastrar um administrador |
| POST | `/users/login` | Realizar login e obter token JWT |

**Exemplo de registro de turista:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "password": "SenhaSegura1"
}
```

---

### 🏖️ Locais Turísticos (/places)

⚠️ Requer autenticação (token JWT no header `Authorization`).

Algumas rotas são restritas a administradores.

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| POST | `/places/criarplaces` | Criar novo local turístico (admin) |
| GET | `/places/todoslocais` | Listar todos os locais cadastrados |
| GET | `/places/filtrelocais?type=pousada` | Filtrar locais por tipo |
| PUT | `/places/atualizarplaces/:id` | Atualizar local (admin) |
| DELETE | `/places/deletarplaces/:id` | Remover local (admin) |

**Exemplo de criação de local:**
```json
{
  "name": "Praia Azul",
  "description": "Praia com águas cristalinas e ótima infraestrutura.",
  "address": "Av. Beira-Mar, 123",
  "type": "passeio",
  "rating": 4.8,
  "priceRange": "R$200 - R$400"
}
```


---

### 🔑 Autenticação JWT
Após o login, será retornado um token JWT.

Use-o no header de cada requisição autenticada:
```makefile
Authorization: Bearer seu_token_aqui
```

### ✅ Validações com Zod
Todas as requisições passam por validação de dados via Zod, garantindo integridade e segurança na entrada de informações.

### 🧠 Funções Principais
- Registro e login de turistas e administradores
- Criptografia de senha com bcrypt
- Geração e verificação de tokens JWT
- Proteção de rotas com middlewares
- CRUD completo para locais turísticos
- Validação automática de requisições

### 🧪 Testando com Insomnia / Postman
Você pode testar a API com ferramentas como Insomnia ou Postman.
Basta importar as rotas e incluir o token JWT nas requisições protegidas.

---

🧑‍💻 **Autor**
Wesley Monteiro

📧 **Email:** [wmonteiro873@gmail.com]

💻 Projeto desenvolvido com fins educacionais e práticos.

🛠️ **Licença MIT**
(projeto é de uso livre para fins de aprendizado.
Sinta-se à vontade para contribuir ou aprimorar!)