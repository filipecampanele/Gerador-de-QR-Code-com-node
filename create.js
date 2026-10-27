import { randomInt } from "node:crypto";
import { colors } from "../../utils/colors.js";

const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>?";

export function generatePassword({ length, numbers, symbols }) {
  let pool = LETTERS;
  if (/^[sS]$/.test(numbers)) pool += NUMBERS;
  if (/^[sS]$/.test(symbols)) pool += SYMBOLS;

  let password = "";
  for (let i = 0; i < Number(length); i++) {
    password += pool[randomInt(pool.length)];
  }
  return password;
}

export function createPassword(options) {
  const password = generatePassword(options);

  console.log(colors.info("\nSua senha gerada:\n"));
  console.log(colors.title(password));
  console.log(colors.success("\nSenha criada com sucesso!"));
}
