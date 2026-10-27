export const mainPrompt = [
  {
    name: "select",
    description: "Escolha uma opção (1 - QR Code | 2 - Senha)",
    pattern: /^[1-2]$/,
    message: "Digite apenas 1 ou 2",
    required: true,
  },
];
