class Navegacao {
  static validacao() {
    const menu_login = document.getElementById("login-menu");
    const menu_logout = document.getElementById("logout-menu");
    const menu_dashboard = document.getElementById("dashboard-menu");
    menu_logout.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "./index.html";
    });

    if (localStorage.getItem("Token")) {
      menu_login.setAttribute("hidden", "hidden");
      menu_dashboard.removeAttribute("hidden");
      menu_logout.removeAttribute("hidden");
    } else {
      menu_login.removeAttribute("hidden");
      menu_dashboard.setAttribute("hidden", "hidden");
      menu_logout.setAttribute("hidden", "hidden");
    }
  }
}

Navegacao.validacao();
