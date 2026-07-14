-- V1__create_schema.sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE usuarios (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome VARCHAR(150) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      senha VARCHAR(255) NOT NULL,
      perfil VARCHAR(30) NOT NULL
          CHECK (perfil IN ('ADMIN','COLABORADOR','CLIENTE')),
      ativo BOOLEAN NOT NULL DEFAULT TRUE,
      criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE usuarios IS
'Armazena os usuários cadastrados no sistema INWEB Studio.';

COMMENT ON COLUMN usuarios.id IS
'Identificador único do usuário (UUID).';

COMMENT ON COLUMN usuarios.nome IS
'Nome completo do usuário.';

COMMENT ON COLUMN usuarios.email IS
'E-mail utilizado para autenticação no sistema.';

COMMENT ON COLUMN usuarios.senha IS
'Senha criptografada utilizando BCrypt. Nunca armazenar senha em texto puro.';

COMMENT ON COLUMN usuarios.perfil IS
'Perfil de acesso do usuário (ADMIN, COLABORADOR ou CLIENTE).';

COMMENT ON COLUMN usuarios.ativo IS
'Indica se o usuário está ativo no sistema (soft delete).';

COMMENT ON COLUMN usuarios.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN usuarios.atualizado_em IS
'Data e hora da última atualização do registro.';


CREATE TABLE clientes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome VARCHAR(150) NOT NULL,
      empresa VARCHAR(150),
      email VARCHAR(150) UNIQUE,
      telefone VARCHAR(20),
      endereco TEXT,
      ativo BOOLEAN NOT NULL DEFAULT TRUE,
      criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE clientes IS
'Armazena os clientes cadastrados no sistema INWEB Studio.';

COMMENT ON COLUMN clientes.id IS
'Identificador único do cliente (UUID).';

COMMENT ON COLUMN clientes.nome IS
'Nome completo do cliente.';

COMMENT ON COLUMN clientes.empresa IS
'Empresa vinculada ao cliente, quando houver.';

COMMENT ON COLUMN clientes.email IS
'E-mail principal para contato com o cliente.';

COMMENT ON COLUMN clientes.telefone IS
'Telefone de contato do cliente.';

COMMENT ON COLUMN clientes.endereco IS
'Endereço completo do cliente.';

COMMENT ON COLUMN clientes.ativo IS
'Indica se o cliente está ativo no sistema (soft delete).';

COMMENT ON COLUMN clientes.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN clientes.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE TABLE projetos (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      cliente_id UUID NOT NULL,
      responsavel_id UUID,
      titulo VARCHAR(150) NOT NULL,
      descricao TEXT,
      status VARCHAR(30) NOT NULL
          CHECK (status IN ('PLANEJADO','EM_ANDAMENTO','PAUSADO','CONCLUIDO','CANCELADO')),
      valor NUMERIC(12,2) CHECK (valor >= 0),
      data_inicio DATE,
      data_fim DATE,
      criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT ck_datas_projeto CHECK (data_fim IS NULL OR data_fim >= data_inicio),
      CONSTRAINT fk_projeto_cliente FOREIGN KEY (cliente_id)
          REFERENCES clientes(id) ON DELETE RESTRICT,
      CONSTRAINT fk_projeto_responsavel FOREIGN KEY (responsavel_id)
          REFERENCES usuarios(id) ON DELETE SET NULL
);

COMMENT ON TABLE projetos IS
'Armazena os projetos desenvolvidos pelo INWEB Studio.';

COMMENT ON COLUMN projetos.id IS
'Identificador único do projeto (UUID).';

COMMENT ON COLUMN projetos.cliente_id IS
'Identificador do cliente responsável pela contratação do projeto.';

COMMENT ON COLUMN projetos.responsavel_id IS
'Identificador do usuário responsável pelo gerenciamento do projeto.';

COMMENT ON COLUMN projetos.titulo IS
'Título ou nome do projeto.';

COMMENT ON COLUMN projetos.descricao IS
'Descrição detalhada do projeto.';

COMMENT ON COLUMN projetos.status IS
'Situação atual do projeto (PLANEJADO, EM_ANDAMENTO, PAUSADO, CONCLUIDO ou CANCELADO).';

COMMENT ON COLUMN projetos.valor IS
'Valor financeiro acordado para execução do projeto.';

COMMENT ON COLUMN projetos.data_inicio IS
'Data prevista ou efetiva de início do projeto.';

COMMENT ON COLUMN projetos.data_fim IS
'Data prevista ou efetiva de conclusão do projeto.';

COMMENT ON COLUMN projetos.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN projetos.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE TABLE tarefas (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     projeto_id UUID NOT NULL,
     responsavel_id UUID,
     titulo VARCHAR(150) NOT NULL,
     descricao TEXT,
     prioridade VARCHAR(20) NOT NULL
         CHECK (prioridade IN ('BAIXA','MEDIA','ALTA','URGENTE')),
     status VARCHAR(30) NOT NULL
         CHECK (status IN ('PENDENTE','EM_ANDAMENTO','CONCLUIDA','ATRASADA')),
     prazo DATE,
     criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     CONSTRAINT fk_tarefa_projeto FOREIGN KEY (projeto_id)
         REFERENCES projetos(id) ON DELETE CASCADE,
     CONSTRAINT fk_tarefa_responsavel FOREIGN KEY (responsavel_id)
         REFERENCES usuarios(id) ON DELETE SET NULL
);

COMMENT ON TABLE tarefas IS
'Armazena as tarefas vinculadas aos projetos.';

COMMENT ON COLUMN tarefas.id IS
'Identificador único da tarefa (UUID).';

COMMENT ON COLUMN tarefas.projeto_id IS
'Projeto ao qual a tarefa pertence.';

COMMENT ON COLUMN tarefas.responsavel_id IS
'Usuário responsável pela execução da tarefa.';

COMMENT ON COLUMN tarefas.titulo IS
'Título da tarefa.';

COMMENT ON COLUMN tarefas.descricao IS
'Descrição detalhada da tarefa.';

COMMENT ON COLUMN tarefas.prioridade IS
'Nível de prioridade da tarefa (BAIXA, MEDIA, ALTA ou URGENTE).';

COMMENT ON COLUMN tarefas.status IS
'Situação atual da tarefa (PENDENTE, EM_ANDAMENTO, CONCLUIDA ou ATRASADA).';

COMMENT ON COLUMN tarefas.prazo IS
'Prazo final previsto para conclusão da tarefa.';

COMMENT ON COLUMN tarefas.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN tarefas.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE TABLE arquivos (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      projeto_id UUID NOT NULL,
      nome VARCHAR(255) NOT NULL,
      url TEXT NOT NULL,
      tamanho BIGINT CHECK (tamanho >= 0),
      mime_type VARCHAR(100) NOT NULL,
      criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_arquivo_projeto FOREIGN KEY (projeto_id)
          REFERENCES projetos(id) ON DELETE CASCADE
);

COMMENT ON TABLE arquivos IS
'Armazena os arquivos relacionados aos projetos.';

COMMENT ON COLUMN arquivos.id IS
'Identificador único do arquivo (UUID).';

COMMENT ON COLUMN arquivos.projeto_id IS
'Projeto ao qual o arquivo pertence.';

COMMENT ON COLUMN arquivos.nome IS
'Nome original do arquivo.';

COMMENT ON COLUMN arquivos.url IS
'Localização física ou lógica do arquivo armazenado.';

COMMENT ON COLUMN arquivos.tamanho IS
'Tamanho do arquivo em bytes.';

COMMENT ON COLUMN arquivos.mime_type IS
'Tipo MIME do arquivo (ex.: image/png, application/pdf).';

COMMENT ON COLUMN arquivos.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN arquivos.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE TABLE financeiro (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        projeto_id UUID NOT NULL,
        tipo VARCHAR(20) NOT NULL
            CHECK (tipo IN ('RECEITA','DESPESA')),
        valor NUMERIC(12,2) NOT NULL CHECK (valor >= 0),
        descricao TEXT,
        data_lancamento DATE NOT NULL,
        criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_financeiro_projeto FOREIGN KEY (projeto_id)
            REFERENCES projetos(id) ON DELETE CASCADE
);

COMMENT ON TABLE financeiro IS
'Armazena os lançamentos financeiros dos projetos.';

COMMENT ON COLUMN financeiro.id IS
'Identificador único do lançamento financeiro (UUID).';

COMMENT ON COLUMN financeiro.projeto_id IS
'Projeto ao qual o lançamento financeiro pertence.';

COMMENT ON COLUMN financeiro.tipo IS
'Tipo do lançamento financeiro (RECEITA ou DESPESA).';

COMMENT ON COLUMN financeiro.valor IS
'Valor monetário do lançamento financeiro.';

COMMENT ON COLUMN financeiro.descricao IS
'Descrição ou observações do lançamento financeiro.';

COMMENT ON COLUMN financeiro.data_lancamento IS
'Data em que o lançamento financeiro ocorreu.';

COMMENT ON COLUMN financeiro.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN financeiro.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE TABLE agenda (
                        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                        projeto_id UUID NOT NULL,
                        titulo VARCHAR(150) NOT NULL,
                        data DATE NOT NULL,
                        hora TIME NOT NULL,
                        descricao TEXT,
                        criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        CONSTRAINT fk_agenda_projeto FOREIGN KEY (projeto_id)
                            REFERENCES projetos(id) ON DELETE CASCADE
);

COMMENT ON TABLE agenda IS
'Armazena os compromissos e eventos relacionados aos projetos.';

COMMENT ON COLUMN agenda.id IS
'Identificador único do evento da agenda (UUID).';

COMMENT ON COLUMN agenda.projeto_id IS
'Projeto ao qual o compromisso pertence.';

COMMENT ON COLUMN agenda.titulo IS
'Título do compromisso ou evento.';

COMMENT ON COLUMN agenda.data IS
'Data em que o compromisso será realizado.';

COMMENT ON COLUMN agenda.hora IS
'Horário previsto para o compromisso.';

COMMENT ON COLUMN agenda.descricao IS
'Descrição detalhada do compromisso ou observações adicionais.';

COMMENT ON COLUMN agenda.criado_em IS
'Data e hora de criação do registro.';

COMMENT ON COLUMN agenda.atualizado_em IS
'Data e hora da última atualização do registro.';

CREATE INDEX idx_projeto_cliente ON projetos(cliente_id);
CREATE INDEX idx_projeto_responsavel ON projetos(responsavel_id);
CREATE INDEX idx_tarefa_projeto ON tarefas(projeto_id);
CREATE INDEX idx_tarefa_responsavel ON tarefas(responsavel_id);
CREATE INDEX idx_arquivo_projeto ON arquivos(projeto_id);
CREATE INDEX idx_financeiro_projeto ON financeiro(projeto_id);
CREATE INDEX idx_agenda_projeto ON agenda(projeto_id);
