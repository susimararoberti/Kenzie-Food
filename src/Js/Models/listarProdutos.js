import Carrinho from "../Database/Api_Carrinho.js";
import MostrarCarrinhoLogado from "../Controller/indexControler.js";

class ListarProdutos {
  static async listarProdutos(data) {
    let arr = [];
    // console.log(data[0].id)
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].id)
      arr.push(data[i]);
      const vitrine = document.getElementById("vitrine");
      const gerarCard = document.createElement("div");
      const img = document.createElement("img");
      const titulo = document.createElement("h2");
      const p = document.createElement("p");
      const span = document.createElement("span");
      const divInferior = document.createElement("div");
      const preco = document.createElement("h3");
      const btnConpra = document.createElement("button");

      gerarCard.classList = "cards";
      img.classList = "cards--img";
      divInferior.classList = "card--footer";

      btnConpra.classList = "footer--add";
      btnConpra.id = data[i].id;
      btnConpra.addEventListener("click", async function () {
        await Carrinho.adicionarAoCarrinho({
          product_id: btnConpra.id,
        });
        window.location.reload();
        // MostrarCarrinhoLogado.mostrarCarrinhoLogado()
      });

      img.src = data[i].imagem;
      titulo.innerText = data[i].nome;
      p.innerText = data[i].descricao;
      span.innerText = data[i].categoria;
      preco.innerText = "R$ " + data[i].preco;
      btnConpra.innerHTML = "&#128722;";

      gerarCard.appendChild(img);
      gerarCard.appendChild(titulo);
      gerarCard.appendChild(p);
      gerarCard.appendChild(span);
      divInferior.appendChild(preco);
      divInferior.appendChild(btnConpra);
      gerarCard.appendChild(divInferior);
      vitrine.appendChild(gerarCard);
    }
    return arr;
  }
}

export default ListarProdutos;
