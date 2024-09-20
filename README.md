# Gerenciador de Senhas

O Gerenciador de Senhas é uma extensão para o Google Chrome que permite gerenciar o cadastro de usuários online.

## Funcionalidades
- Cadastro de usuários com nome, CPF e senha.
- Login de usuários já cadastrados.
- Geração de senha temporária em caso de esquecimento.

## Estrutura do Projeto
gerenciador-senhas/
│
├── icons/              # Pasta contendo os ícones da extensão
│   ├── icon48.png
│   └── icon128.png
│
├── manifest.json       # Configuração da extensão do Chrome
├── popup.html          # HTML da interface do popup
├── script.js           # Lógica do gerenciador em JavaScript
├── styles.css          # Estilos da interface em CSS
└── README.md           # Este arquivo de documentação

## Como Instalar Localmente
1. Faça o download ou clone este repositório no seu computador.
2. Abra o Google Chrome e navegue até `chrome://extensions/`.
3. Ative o Modo do Desenvolvedor (localizado no canto superior direito).
4. Clique em "Carregar sem compactação" e selecione a pasta onde o projeto da extensão está localizado.
5. A extensão será carregada e aparecerá na lista de extensões do Chrome.

## Como Usar
1. Clique no ícone do Gerenciador de Senhas na barra de ferramentas do Chrome.
2. Preencha os campos e pressione o botão para cadastrar ou logar.
3. Caso tenha esquecido a senha, clique em "Esqueci a senha" para gerar uma senha temporária.

## Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo Licença [LICENSE].

Desenvolvido por Newton Ramos.
