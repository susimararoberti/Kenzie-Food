class Produtos {
  static baseURL = "https://api-kenzie-food.herokuapp.com";

  static async mostrarProdutosPublicos() {
    const URL = this.baseURL;
    const produtos = await fetch(`${URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => data);

    return produtos;
  }

  static async mostrarProdutosPrivados() {
    const URL = `${this.baseURL}/my/products`;
    const token = localStorage.getItem("Token");
    const produtos = await fetch(URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((resposta) => resposta.json())
      .then((data) => data);

    return produtos;
  }

  static async criarProduto(dados) {
    const URL = `${this.baseURL}/my/products`;
    const token = localStorage.getItem("Token");
    const novo = await fetch(URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((resposta) => resposta.json())
      .then((resposta) => resposta)
      .catch((error) => console.error(error));

    return novo;
  }

  static async editarProduto(idProduto, dados) {
    const URL = `${this.baseURL}/my/products`;
    const token = localStorage.getItem("Token");
    const editar = await fetch(`${URL}/${idProduto}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })
      .then((resposta) => resposta.json())
      .then((resposta) => console.log(resposta))
      .catch((error) => console.error(error));

    return editar;
  }

  static async deletarProduto(idProduto) {
    const URL = `${this.baseURL}/my/products`;
    const token = localStorage.getItem("Token");
    const deletar = await fetch(`${URL}/` + idProduto, {
      method: "DELETE",
      headers: {
       "Authorization": `Bearer ${token}`
      }
    }).catch((error) => console.error(error));
  }
}

export default Produtos;
