import qrcode from "qrcode-terminal";
import { colors } from "../../utils/colors.js";

export function createQRCode({ link, type }) {
  const small = type === "2";

  console.log(colors.info("\nGerando QR Code...\n"));

  qrcode.generate(link, { small }, (qr) => {
    console.log(qr);
    console.log(colors.success("QR Code gerado com sucesso!"));
  });
}
