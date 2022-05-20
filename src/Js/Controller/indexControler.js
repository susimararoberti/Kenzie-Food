import ListarProdutos from "../Models/listarProdutos.js";
import Produtos from "../Database/Api_Produtos.js";
import Carrinho from "../Database/Api_Carrinho.js";

const dadosDosCards = await Produtos.mostrarProdutosPublicos();
const dataPrivada = await Produtos.mostrarProdutosPrivados();

let contador = 0;

async function mostrarProdutos(filto) {
  let arr = [];
  if (filto !== undefined) {
    for (let i = 0; i < dadosDosCards.length; i++) {
      if (dadosDosCards[i].categoria == filto) {
        arr.push(dadosDosCards[i]);
      }
    }

    for (let i = 0; i < dataPrivada.length; i++) {
      if (dataPrivada[i].categoria == filto) {
        arr.push(dataPrivada[i]);
      }
    }

    await ListarProdutos.listarProdutos(arr);

    return arr;
  }

  if (localStorage.getItem("Token") !== "") {
    await ListarProdutos.listarProdutos(dataPrivada);
  }
  await ListarProdutos.listarProdutos(dadosDosCards);
}

mostrarProdutos();

const buscar = document.getElementById("buscar");
const vitrine = document.getElementById("vitrine");

function buscarProdutos() {
  vitrine.innerHTML = "";
  const dataBusca = [];

  if (localStorage.getItem("Token" == "")) {
    for (let i = 0; i < dadosDosCards.length; i++) {
      if (
        dadosDosCards[i].nome
          .toLowerCase()
          .includes(buscar.value.toLowerCase()) == true ||
        dadosDosCards[i].categoria
          .toLowerCase()
          .includes(buscar.value.toLowerCase) == true
      ) {
        dataBusca.push(dadosDosCards[i]);
      }
    }
  } else {
    for (let i = 0; i < dadosDosCards.length; i++) {
      if (
        dadosDosCards[i].nome
          .toLowerCase()
          .includes(buscar.value.toLowerCase()) == true ||
        dadosDosCards[i].categoria
          .toLowerCase()
          .includes(buscar.value.toLowerCase) == true
      ) {
        dataBusca.push(dadosDosCards[i]);
      }
    }
    for (let i = 0; i < dataPrivada.length; i++) {
      if (
        dataPrivada[i].nome
          .toLowerCase()
          .includes(buscar.value.toLowerCase()) == true ||
        dataPrivada[i].categoria
          .toLowerCase()
          .includes(buscar.value.toLowerCase) == true
      ) {
        dataBusca.push(dataPrivada[i]);
      }
    }
  }
  ListarProdutos.listarProdutos(dataBusca);
  buscar.addEventListener("keyup", buscarProdutos);
}

buscarProdutos();

const btnTodos = document.getElementById("Todos");
const btnPanificadora = document.getElementById("Panificadora");
const btnFrutas = document.getElementById("Frutas");
const btnBebidas = document.getElementById("Bebidas");

btnTodos.addEventListener("click", filtrar);
btnPanificadora.addEventListener("click", filtrar);
btnFrutas.addEventListener("click", filtrar);
btnBebidas.addEventListener("click", filtrar);

function filtrar(event) {
  const item = event.target.id;
  if (item !== "Todos") {
    vitrine.innerHTML = "";
    mostrarProdutos(item);
  } else {
    vitrine.innerHTML = "";
    mostrarProdutos();
  }

  return item;
}

function hoverCategorias() {
  let navCategorias = document.getElementById("categorias");
  navCategorias.addEventListener("click", (event) => {
    let categorias = navCategorias.querySelectorAll("button");
    let itemclicado = event.target;
    if (itemclicado.id != "categorias" && itemclicado.classList[0] != "panificadora--img" && itemclicado.classList[0] != "frutas--img" && itemclicado.classList[0] != "bebidas--img") {
      categorias.forEach((itemLi) => {
        itemLi.classList.remove("categorias--selecionado");
      });
      itemclicado.classList.add("categorias--selecionado");
      return itemclicado.innerText;
    }
  });
}
hoverCategorias();

class MostrarCarrinhoLogado {

  static async mostrarCarrinhoLogado(arr) {

    let itensCarrinho = await arr

    const corpoDoCarrinho = document.getElementById("corpoDoCarrinho");
    let arrDequantidade = 0;
    let arrPrecoTotal = 0;
    corpoDoCarrinho.innerHTML = "";
 
      
      for (let i = 0; i < itensCarrinho.length; i++) {

       if(localStorage.getItem("Token") !== ""){
        arrPrecoTotal += itensCarrinho[i].products.preco * itensCarrinho[i].quantity;
        arrDequantidade += itensCarrinho[i].quantity;
       }
       else{
        arrPrecoTotal += itensCarrinho[i].preco
        arrDequantidade ++
       }
  
        const divItenCarrinho = document.createElement("li");
        const img = document.createElement("img");
        const divTexto = document.createElement("div");
        const h3 = document.createElement("h3");
        const categoria = document.createElement("span");
        const preco = document.createElement("p");
        const divDelete = document.createElement("div");
        const quantidade = document.createElement("p");
        const buttonDeletar = document.createElement("button");
  
        divItenCarrinho.classList = "divItenCarrinho";
        img.classList = "imgCarrinho";
        divTexto.classList = "carrinho--info";
        divDelete.classList = "carrinho--delete";
        buttonDeletar.classList = "delete--button";

        if(localStorage.getItem("Token") !== ""){
        buttonDeletar.value = itensCarrinho[i].products.id;
        buttonDeletar.addEventListener("click", async (event) => {
          event.preventDefault();
          await Carrinho.removerDoCarrinho(buttonDeletar.value);
          MostrarCarrinhoLogado.mostrarCarrinhoLogado(await Carrinho.listarCarrinho())
          // window.location.reload();
        });


          img.src = itensCarrinho[i].products.imagem;
          h3.innerText = itensCarrinho[i].products.nome;
          categoria.innerText = itensCarrinho[i].products.categoria;
          preco.innerText = "R$ " + itensCarrinho[i].products.preco;
          quantidade.innerHTML = itensCarrinho[i].quantity;
          buttonDeletar.innerHTML = "&#128465;";

        }
        else{
        buttonDeletar.id = arr[i].id
        buttonDeletar.addEventListener("click", async () => {
        let arrT = []
        for (let i = 0; i < arr.length; i++) {
         if(arr[i].id !== buttonDeletar.id){
          arrT.push(arr[i])
         } 
        }
        arr = arrT
        MostrarCarrinhoLogado.mostrarCarrinhoLogado(arr)
        localStorage.setItem("carrinhoLocal",`${JSON.stringify(arrT)}`)
        });

          img.src = itensCarrinho[i].imagem;
          h3.innerText = itensCarrinho[i].nome;
          categoria.innerText = itensCarrinho[i].categoria;
          preco.innerText = "R$ " + itensCarrinho[i].preco;
          quantidade.innerHTML = ""
          buttonDeletar.innerHTML = "&#128465;";
        }
  

  
        divItenCarrinho.appendChild(img);
        divTexto.appendChild(h3);
        divTexto.appendChild(categoria);
        divTexto.appendChild(preco);
        divDelete.appendChild(quantidade);
        divDelete.appendChild(buttonDeletar);
        divItenCarrinho.appendChild(divTexto);
        divItenCarrinho.appendChild(divDelete);
        corpoDoCarrinho.appendChild(divItenCarrinho);
      }
    
      if(localStorage.getItem("Token") !== ""){
          await MostrarCarrinhoLogado.atualizarPrecoCarrinhoLogado(
            arrDequantidade,
            arrPrecoTotal
          );
      }
      else{
        await MostrarCarrinhoLogado.atualizarPrecoCarrinhoLogado(arrDequantidade, arrPrecoTotal)
      }

  }

  static async atualizarPrecoCarrinhoLogado(quantidade, preco) {
    const parteDeBaixoDoCarrinho = document.getElementById(
      "parteDeBaixoDoCarrinho"
    );
    parteDeBaixoDoCarrinho.innerHTML = "";
    const divQuantidade = document.createElement("div");
    const divpreco = document.createElement("div");
    const quantidadeTotal = document.createElement("p");
    const precoTotal = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    divQuantidade.classList = "footer--div--qtd";
    divpreco.classList = "footer--div";
    quantidadeTotal.classList = "footer--div--texto";
    precoTotal.classList = "footer--div--texto";
    p1.classList = "footer--div--valor";
    p2.classList = "footer--div--valor";
    quantidadeTotal.innerText = "Quantidade";
    p1.innerText = quantidade;
    precoTotal.innerText = "Total";
    p2.innerText = " R$" + preco;

    divQuantidade.appendChild(quantidadeTotal);
    divQuantidade.appendChild(p1);
    divpreco.appendChild(precoTotal);
    divpreco.appendChild(p2);
    parteDeBaixoDoCarrinho.appendChild(divQuantidade);
    parteDeBaixoDoCarrinho.appendChild(divpreco);
  }
}

  if(localStorage.getItem("Token") !== ""){
    MostrarCarrinhoLogado.mostrarCarrinhoLogado(await Carrinho.listarCarrinho())
  }

function CarrinhoOFFLocal(data){
  let arrDeProdutos = []
  let carrinhoStr = JSON.parse((localStorage.getItem("carrinhoLocal")))
  if(localStorage.getItem("carrinhoLocal") == ""){
    arrDeProdutos.push(data)
    localStorage.setItem("carrinhoLocal",`${JSON.stringify(arrDeProdutos)}`)
  }
  
}

export default MostrarCarrinhoLogado;
