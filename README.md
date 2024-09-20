Gerenciador de Credenciais
O Gerenciador de Credenciais é uma extensão para o Google Chrome que permite gerenciar o cadastro de usuários online.

Funcionalidades
Cadastro de usuários com nome, CPF e senha.
Login de usuários já cadastrados.
Geração de senha temporária em caso de esquecimento.
Para o desenvolvedor, é possível visualizar todos os cadastros realizados fazendo login com as seguintes credenciais:
Nome: master
Senha: master
Estrutura do Projeto
```bash
Copiar código
Gerenciador-de-Credenciais/
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
```
Como Instalar Localmente
Faça o download ou clone este repositório no seu computador.
Abra o Google Chrome e navegue até chrome://extensions/.
Ative o Modo do Desenvolvedor (localizado no canto superior direito).
Clique em "Carregar sem compactação" e selecione a pasta onde o projeto da extensão está localizado.
A extensão será carregada e aparecerá na lista de extensões do Chrome.
Como Usar
Clique no ícone do Gerenciador de Credenciais na barra de ferramentas do Chrome.
Preencha os campos e pressione o botão para cadastrar ou logar.
Caso tenha esquecido a senha, clique em "Esqueci a senha" para gerar uma senha temporária.
Para o desenvolvedor, é possível visualizar todos os cadastros realizados fazendo login com as seguintes credenciais:
Nome: master
Senha: master
Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.

Desenvolvido por Newton Ramos.
