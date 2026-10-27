# Gerador de QR Codes para E-commerces (Node.js)

CLI que gera QR Codes no terminal (links de produtos, lojas, etc.) e senhas seguras.

## Como rodar

```bash
npm install
npm start
```

## Estrutura

```
src/
├── index.js              # ponto de entrada
├── prompts/              # perguntas do terminal (main, qr-code, password)
├── services/
│   ├── qr-code/create.js # geração do QR Code
│   └── password/create.js# geração de senha (crypto.randomInt)
└── utils/                # chalk (colors) e wrapper do prompt (ask)
```

## Tecnologias
- Node.js 18+ (ES Modules)
- [prompt](https://www.npmjs.com/package/prompt)
- [chalk](https://www.npmjs.com/package/chalk)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
