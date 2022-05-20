import Produtos from "./Api_Produtos.js";
import Carrinho from "./Api_Carrinho.js";
import Usuario from "./Api_Usuario.js";

const novoUsuario = {
  name: "kenzieABC",
  email: "kenzieABC@email.com",
  password: "123",
};

const login = {
  email: "kenzieABC@email.com",
  password: "123",
};

async function main() {
  const logar = await Usuario.logarUsuario(login);
}

main();
