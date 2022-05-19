class Usuario {
  static baseURL = "https://api-kenzie-food.herokuapp.com";

  static async cadastrarUsuario(dados) {
    const URL = `${this.baseURL}/auth/register`;
    let resposta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((resp) => resp.json())
      .then((resp) => resp)
      .catch((error) => console.error(error));

    return resposta;
  }

  static async logarUsuario(dados) {
    debugger;
    const URL = `${this.baseURL}/auth/login`;
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((resposta) => resposta.json())
      .then((resposta) => {
        localStorage.setItem("Token", `${JSON.stringify(resposta)}`);
        console.log(resposta); //remover
      })
      .catch((error) => console.error(error));
  }
}

export default Usuario;
