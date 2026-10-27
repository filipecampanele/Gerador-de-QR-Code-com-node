export const passwordPrompt = [
  {
    name: "length",
    description: "Tamanho da senha (8 a 64)",
    type: "number",
    default: 16,
    conform: (v) => Number.isInteger(v) && v >= 8 && v <= 64,
    message: "Informe um número inteiro entre 8 e 64",
  },
  {
    name: "numbers",
    description: "Incluir números? (s/n)",
    pattern: /^[sSnN]$/,
    default: "s",
  },
  {
    name: "symbols",
    description: "Incluir símbolos? (s/n)",
    pattern: /^[sSnN]$/,
    default: "s",
  },
];
