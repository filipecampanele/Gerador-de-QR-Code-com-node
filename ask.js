import prompt from "prompt";

prompt.message = "";
prompt.delimiter = "";
prompt.start();

/**
 * Versão com Promise do prompt.get
 */
export function ask(schema) {
  return new Promise((resolve, reject) => {
    prompt.get(schema, (err, result) => (err ? reject(err) : resolve(result)));
  });
}
