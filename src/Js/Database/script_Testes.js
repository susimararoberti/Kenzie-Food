import Produtos from "./Api_Produtos.js";
import Carrinho from "./Api_Carrinho.js";
import Usuario from "./Api_Usuario.js";

const novoUsuario = {
  name: "Samuelzinho",
  email: "samuca@email.com",
  password: "010203",
};

const login = {
  email: "juju@email.com",
  password: "98765",
};

async function main() {
  //   const novo = await Usuario.cadastrarUsuario(novoUsuario);
  //   console.log(novo);

  const logar = await Usuario.logarUsuario(login);
}

main();
// console.log(await Produtos.mostrarProdutosPublicos())

// console.log(await Produtos.mostrarProdutosPrivados())

const novoProduto = {
  nome: "Café",
  preco: 8,
  categoria: "Doce",
  imagem: "https://superprix.vteximg.com.br/arquivos/ids/177936-292-292/Cafe-Torrado-e-Moido-Melitta-Tradicional-500g-Caixa.png?v=636698465698800000",
  descricao:"Muito bom, saboroso e te deixa energisado"
}

//  console.log(await Produtos.criarProduto(novoProduto))

const dadosEditados = {
  descricao: "Bom,  Muit Bom, Gostinho açucarado e deixa eletrizado"
}

// console.log(await Produtos.editarProduto("4cb5c9a0-310b-4302-be94-df4cae4ad7c0",dadosEditados))

// console.log(await Produtos.deletarProduto("4cb5c9a0-310b-4302-be94-df4cae4ad7c0"))

const quantidade = {
	product_id: "e0cba151-b3ce-4afa-80a7-653215929010",
	quantity: 5
}

// console.log(await Carrinho.adicionarAoCarrinho(quantidade))

// console.log(await Carrinho.listarCarrinho())

// console.log(await Carrinho.removerDoCarrinho("e0cba151-b3ce-4afa-80a7-653215929010"))