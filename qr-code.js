export const qrCodePrompt = [
  {
    name: "link",
    description: "Digite o link para gerar o QR Code (ex.: URL do produto)",
    required: true,
  },
  {
    name: "type",
    description: "Tipo de saída (1 - Normal | 2 - Terminal pequeno)",
    pattern: /^[1-2]$/,
    message: "Digite apenas 1 ou 2",
    default: "2",
  },
];
