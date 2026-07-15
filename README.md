# 🚀 INWEB Studio

> Plataforma para gestão de clientes, projetos e processos voltada para freelancers e pequenas agências digitais.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-success)
![React](https://img.shields.io/badge/React-19-61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791)
![Docker](https://img.shields.io/badge/Docker-2496ED)

---

# 📖 Sobre o projeto

O **INWEB Studio** é uma plataforma desenvolvida para centralizar o fluxo de trabalho de freelancers e pequenas agências de desenvolvimento web.

A ideia surgiu durante minha experiência como desenvolvedora full stack e enquanto estruturava minha atuação como freelancer. Ao pesquisar como profissionais da área organizam seus projetos, percebi que a rotina normalmente envolve diversas ferramentas diferentes para gerenciar clientes, propostas, tarefas, documentos, arquivos e pagamentos.

O objetivo do INWEB Studio é reunir esse processo em um único ambiente, oferecendo uma experiência integrada para gerenciamento de projetos do início ao fim.

Além de solucionar um problema real, o projeto também foi concebido como um laboratório para aplicar boas práticas de engenharia de software, arquitetura, documentação e DevOps, simulando o desenvolvimento de um produto SaaS moderno.

---

# 🎯 Objetivos

O INWEB Studio possui quatro objetivos principais:

- 💼 Desenvolver uma plataforma para apoiar freelancers e pequenas agências.
- 📚 Servir como laboratório de estudos para tecnologias e boas práticas.
- 👨‍💻 Demonstrar competências técnicas através de um projeto completo de portfólio.
- 🚀 Evoluir futuramente para um produto SaaS.

---

# 🧩 O problema

Hoje é comum utilizar várias ferramentas diferentes para gerenciar um único projeto.

Exemplo de uma rotina comum:

- Trello para tarefas
- Notion para documentação
- Google Drive para arquivos
- Excel para orçamentos
- WhatsApp para comunicação
- E-mail para propostas
- Plataforma de cobrança para pagamentos

Essa fragmentação aumenta a complexidade do trabalho.

O INWEB Studio busca centralizar essas atividades em uma única plataforma.

---

# ✨ Funcionalidades

## 👥 Gestão de Clientes

- Cadastro de clientes
- Histórico de informações
- Contatos
- Situação do cliente

## 📁 Gestão de Projetos

- Cadastro de projetos
- Associação entre clientes e projetos
- Controle de status
- Datas de início e conclusão
- Organização por etapas

## 👤 Usuários

- Cadastro de usuários
- Perfis de acesso
- Controle de permissões
- Autenticação

## 📊 Dashboard

- Projetos ativos
- Projetos concluídos
- Indicadores gerais
- Resumo operacional

---

# 🚧 Roadmap

### MVP

- [x] Modelagem do banco de dados
- [x] Documentação inicial
- [x] Estrutura do projeto
- [x] Docker
- [x] PostgreSQL
- [x] Flyway
- [ ] Autenticação JWT
- [ ] CRUD de Usuários
- [ ] CRUD de Clientes
- [ ] CRUD de Projetos
- [ ] Dashboard

### Futuras funcionalidades

- Upload de arquivos
- Gestão financeira
- Emissão de propostas
- Controle de pagamentos
- Agenda
- Notificações
- Comentários
- Histórico de atividades
- Integração com IA
- Multiempresa
- API pública

---

# 🏗 Arquitetura

O projeto utiliza uma arquitetura em camadas baseada em boas práticas de desenvolvimento.

```

Frontend (React)

↓

REST API (Spring Boot)

↓

Camada de Serviço

↓

Camada de Persistência (JPA)

↓

PostgreSQL

```

A estrutura foi planejada para facilitar manutenção, escalabilidade e evolução do sistema.

---

# 🛠 Tecnologias

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT
- Flyway
- Maven

## Frontend

- React
- TypeScript
- React Router
- Axios
- Tailwind CSS

## Banco de Dados

- PostgreSQL

## Infraestrutura

- Docker
- Docker Compose
- pgAdmin

---

# 📂 Estrutura do projeto

```

inweb-studio/

├── backend/
├── frontend/
├── infra/
├── docs/
└── README.md

```

---

# 📚 Documentação

A pasta **docs** contém toda a documentação do projeto:

- Documento de Requisitos
- Arquitetura
- DER
- Dicionário de Dados
- Diagramas

---

# ▶️ Executando o projeto

## Clonar

```bash
git clone https://github.com/SEU-USUARIO/inweb-studio.git
```

## Subir infraestrutura

```bash
docker compose up -d
```

## Backend

```bash
cd backend

mvn spring-boot:run
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔐 Segurança

O projeto utiliza:

- Spring Security
- JWT
- Controle de permissões
- Perfis de usuário
- Autenticação baseada em token

---

# 📈 Status

🚧 Em desenvolvimento.

O projeto está sendo construído incrementalmente seguindo uma abordagem de MVP, permitindo evolução contínua e aplicação de boas práticas durante todo o desenvolvimento.

---

# 💡 Motivação

Mais do que um sistema de gerenciamento, o INWEB Studio representa um projeto completo de engenharia de software.

Durante seu desenvolvimento são aplicados conceitos como:

- Arquitetura em Camadas
- SOLID
- Clean Code
- Modelagem de Banco de Dados
- Versionamento com Git
- Documentação Técnica
- Docker
- API REST
- Segurança
- Boas práticas de desenvolvimento

O objetivo é construir uma aplicação que possa evoluir para um produto real, ao mesmo tempo em que demonstra competências técnicas em um contexto próximo ao encontrado em projetos profissionais.

---

# 👩‍💻 Autora

**Ingrid Nogueira**

Desenvolvedora Full Stack

Java • Spring Boot • React • PostgreSQL • Docker

---

## ⭐ Objetivo do projeto

O INWEB Studio foi criado para unir estudo, prática e visão de produto em um único projeto.

Ele representa não apenas uma aplicação em desenvolvimento, mas também a construção de um case técnico capaz de demonstrar habilidades em arquitetura, desenvolvimento full stack e engenharia de software.
