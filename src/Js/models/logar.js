import Usuario from "../Database/Api_Usuario.js";

class Login {
  static buttonLogar() {
    const botaoLogar = document.getElementById("loginUsuario");
    botaoLogar.addEventListener("click", this.efetuaLogin);
  }

  static async efetuaLogin(event) {
    event.preventDefault();
    const email = document.getElementsByName("email")[0];
    const senha = document.getElementsByName("password")[0];

    const usuarioLogado = {
      email: email.value,
      password: senha.value,
    };

    try {
      await Usuario.logarUsuario(usuarioLogado);
      window.location.href = "./DashBoard.html";
    } catch (error) {
      alert(error);
    }
  }

  static buttonRetornar() {
    const botaoAnonimo = document.getElementById("retornarHome");
    botaoAnonimo.addEventListener("click", this.retornaHome);
  }

  static retornaHome(event) {
    event.preventDefault();
    window.location.href = "../../index.html";
  }
}

Login.buttonLogar();
Login.buttonRetornar();
