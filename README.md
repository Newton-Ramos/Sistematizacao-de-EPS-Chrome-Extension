# Sistematização de EPS - Extensão Google Chrome
Gerenciador de Senhas - Extensão do Chrome
O Gerenciador de Senhas é uma extensão simples e funcional para o Google Chrome que permite gerenciar seus dados de acesso de forma segura e prática.

Funcionalidades
Cadastro de Usuário: Crie uma conta informando nome, CPF e senha.
Login: Acesse sua conta com nome e senha.
Recuperação de Senha: Gere uma senha temporária caso esqueça a original.
Visualização de Informações: Consulte suas informações pessoais cadastradas.
Estrutura do Projeto
bash
Copiar código
gerenciador-senhas/
│
├── icons/              # Pasta contendo os ícones da extensão
│   ├── icon128.png
│   ├── icon48.png
│
├── manifest.json       # Configuração da extensão do Chrome
├── popup.html          # HTML da interface do popup
├── script.js           # Lógica do Gerenciador de Senhas em JavaScript
├── styles.css          # Estilos da interface em CSS
└── README.md           # Este arquivo de documentação
Como Instalar Localmente
Faça o download ou clone este repositório no seu computador.
Abra o Google Chrome e navegue até chrome://extensions/.
Ative o Modo do Desenvolvedor (localizado no canto superior direito).
Clique em "Carregar sem compactação" e selecione a pasta onde o projeto da extensão está localizado.
A extensão será carregada e aparecerá na lista de extensões do Chrome.
Como Usar
Clique no ícone do Gerenciador de Senhas na barra de ferramentas do Chrome.
Pressione o botão "Cadastrar" para criar uma nova conta.
Após o cadastro, faça login usando seu nome e senha.
Caso tenha esquecido a senha, clique em "Esqueci a senha" para gerar uma senha temporária.
Dica: Mantenha suas senhas seguras e evite usar a mesma senha em diferentes serviços!

Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.

Desenvolvido por Newton Ramos.