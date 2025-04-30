# 📦 Simple

Projeto de estudo utilizando [Electron](https://www.electronjs.org/) com armazenamento local de dados via **NeDB** (descontinuado). A aplicação permite:

- Adicionar nome e sobrenome
- Listar registros com ID
- Editar ou excluir registros localmente

---

## 🚀 Tecnologias utilizadas

- [Electron](https://www.electronjs.org/)
- [NeDB (descontinuado)](https://github.com/louischatriot/nedb)
- HTML, CSS e JavaScript

---

## 🖼️ Funcionalidades

- Interface simples para adicionar e listar pessoas
- Dados salvos localmente em arquivo `.db`
- Possibilidade de edição e exclusão
- Cada item possui um ID único

---

## 📁 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/JulianoLand/simple.git

# Entre na pasta
cd simple

# Instale as dependências
npm install

# Inicie o app
npm start
```

## 🔄 Alternativas sugeridas:

lowdb: Banco de dados local baseado em arquivos JSON. Ideal para pequenos projetos.
better-sqlite3: Rápido e leve, baseado em SQLite, ótimo para aplicações desktop.
Electron Store: Armazenamento simples baseado em JSON com integração direta ao Electron.

Para projetos simples com persistência local, lowdb ou Electron Store são boas escolhas. Para mais robustez, considere better-sqlite3.


## 📚 Objetivo

Este respositório foi criado com fins **educacionais**, para experimentos de criação de aplicação desktop com *Electron* e manipulação de dados locais.
