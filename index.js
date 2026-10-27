import { ask } from "./utils/ask.js";
import { colors } from "./utils/colors.js";
import { mainPrompt } from "./prompts/main.js";
import { qrCodePrompt } from "./prompts/qr-code.js";
import { passwordPrompt } from "./prompts/password.js";
import { createQRCode } from "./services/qr-code/create.js";
import { createPassword } from "./services/password/create.js";

async function main() {
  console.log(colors.title("\n=== Gerador de QR Code & Senhas ===\n"));

  const { select } = await ask(mainPrompt);

  if (select === "1") {
    const options = await ask(qrCodePrompt);
    createQRCode(options);
  } else {
    const options = await ask(passwordPrompt);
    createPassword(options);
  }
}

main().catch((err) => {
  console.error(colors.error("Erro:"), err.message);
  process.exit(1);
});
