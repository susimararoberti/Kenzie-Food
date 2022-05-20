
class Carrinho {
  static baseURL = "https://api-kenzie-food.herokuapp.com";

  static async listarCarrinho() {
    const URL = `${this.baseURL}/cart`;
    const token = localStorage.getItem("Token");

    const produtos = await fetch(URL,{
      method: "GET",
      headers: {
       "Authorization": `Bearer ${token}`
      }
    })
      .then((resposta) => resposta.json())
      .then((data) => data);

    return produtos;
  }

  static async adicionarAoCarrinho(dados) {
    const URL = `${this.baseURL}/cart/add`;
    const token = localStorage.getItem("Token");
    const novo = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(dados)
    })
    .then((resposta) => resposta.json())
    .then((resposta) => resposta)
    .catch((error) => console.error(error));
// console.log(novo)
// console.log(token)
    return novo;
  }

  static async removerDoCarrinho(idProduto) {
    const URL = `${this.baseURL}/cart/remove`;
    const token = localStorage.getItem("Token");
    const deletar = await fetch(`${URL}/` + idProduto, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      },
    }).catch((error) => console.error(error));
  }
}

export default Carrinho;

// console.log(await Carrinho.listarCarrinho())