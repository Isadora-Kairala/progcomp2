Este Repositório contém o conteúdo das aulas da disciplina de Programação de Computadores I  do curso de Ciências da Computação
sendo até agora:
- HTML
- CSS
- JAVASCRIPT *

# 💻 Comandos Git  
📚 *Disciplina de Programação de Computadores I*



## 🛠️ Configuração Inicial

Antes de começar a usar o Git, configure seu nome e e-mail (isso será usado para identificar suas alterações):

```bash
# 1. Configura o e-mail
git config --global user.email "seu@email.com"

# 2. Configura o nome
git config --global user.name "Seu nome"
```

---

## 📦 Criando e Enviando um Repositório

```bash
# 3. Cria um repositório Git local
git init

# 4. Adiciona os arquivos para controle de versão
git add .

# 5. Cria uma versão (commit) com uma mensagem descritiva
git commit -m "primeiro site"

# 6. Configura a branch principal como "main"
git branch -M main

# 7. Envia o projeto local para o repositório remoto no GitHub
git push https://github.com/seu_usuario/seu_repositorio.git main
```

---

## 🔄 Atualizando o repositório no GitHub

Sempre que fizer alterações locais e quiser atualizar no GitHub, repita os seguintes passos:

```bash
git add .
git commit -m "mensagem descritiva"
git push
```

---

## ⚠️ Mensagens comuns de erro

### 1. Divergência entre branches
```
Your branch and 'origin/main' have diverged, and have 1 and 4 different commits each, respectively.
(use "git pull" if you want to integrate the remote branch with yours)
```

🧩 **Solução:**
Você deve sincronizar sua branch com a do GitHub:

```bash
git pull
```

### 2. Merge incompleto
```
All conflicts fixed but you are still merging.
(use "git commit" to conclude merge)
```

🧩 **Solução:**
Finalize o processo de merge com:

```bash
git commit
```

---

## ✅ Dica Final

Sempre verifique o status do repositório com:

```bash
git status
```

Ele vai te dizer exatamente o que está acontecendo e o que falta fazer. 😉

---

Feito com 💙 para estudantes de Programação de Computadores I.





