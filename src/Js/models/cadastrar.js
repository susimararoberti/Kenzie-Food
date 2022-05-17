import Usuario from "../Database/Api_Usuario.js";

class Cadastro {
  static buttonCadastrar() {
    const botaoCadastrar = document.getElementById("cadastroUsuario");
    botaoCadastrar.addEventListener("click", this.efetuaCadastro);
  }

  static async efetuaCadastro(event) {
    event.preventDefault();
    const nome = document.getElementsByName("username")[0];
    const email = document.getElementsByName("email")[0];
    const senha = document.getElementsByName("password")[0];

    const valida = email.value.split("@");
    if (valida.length > 1) {
      let teste2 = valida[1].split(".");
      if (teste2.length > 1) {
        const novoUsuario = {
          username: nome.value,
          email: email.value,
          password: senha.value,
        };
        try {
          await Usuario.cadastrarUsuario(novoUsuario);
          window.location.href = "./Login.html";
        } catch (error) {
          alert(error);
        }
      } else {
        alert("Email inválido, por favor confira");
      }
    } else {
      alert("Email inválido, por favor confira");
    }
  }
}

Cadastro.buttonCadastrar();
