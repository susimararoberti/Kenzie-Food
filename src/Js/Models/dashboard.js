class Logout {
  static deslogar() {
    const button = document.getElementById("logout");
    button.addEventListener("click", this.deslogarUsuario);
  }

  static deslogarUsuario(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "../../index.html";
  }
}

Logout.deslogar();

class Home {
  static buttonHome() {
    const button = document.getElementById("home");
    button.addEventListener("click", this.trocarParaHome);
  }

  static trocarParaHome(event) {
    event.preventDefault();
    window.location.href = "../../index.html";
  }
}

Home.buttonHome();
