import  ListarProdutos  from "../Models/listarProdutos.js";
import  Produtos  from "../Database/Api_Produtos.js";
import Carrinho from "../Database/Api_Carrinho.js";

const dadosDosCards = await Produtos.mostrarProdutosPublicos()
const dataPrivada = await Produtos.mostrarProdutosPrivados()

async function mostrarProdutos(filto){
let arr = []
    if(filto !== undefined){
        for (let i = 0; i < dadosDosCards.length; i++) {
           if(dadosDosCards[i].categoria == filto){
                arr.push(dadosDosCards[i])
           }
        }

        for (let i = 0; i < dataPrivada.length; i++) {
            if(dataPrivada[i].categoria == filto){
                 arr.push(dataPrivada[i])
            }
         }

    ListarProdutos.listarPosts(arr)

    return arr
    }

    if(localStorage.getItem("Token") !== ""){
    ListarProdutos.listarPosts(dataPrivada)
    }
    ListarProdutos.listarPosts(dadosDosCards)

}

// console.log(dadosDosCards)

mostrarProdutos()

const btnTodos = document.getElementById("Todos")
const btnPanificadora = document.getElementById("Panificadora")
const btnFrutas = document.getElementById("Frutas")
const btnBebidas = document.getElementById("Bebidas")

btnTodos.addEventListener("click", filtrar)
btnPanificadora.addEventListener("click", filtrar)
btnFrutas.addEventListener("click", filtrar)
btnBebidas.addEventListener("click", filtrar)

function filtrar (event){
    event.target.style.backgroundColor = "blue";
    const item = event.target.id
    if(item !== "Todos"){
    vitrine.innerHTML = ""
        mostrarProdutos(item)
    }
    else{
    vitrine.innerHTML = ""
        mostrarProdutos()
    }

    return item
}

let itensCarrinho =  await Carrinho.listarCarrinho()


async function mostrarCarrinhoLogado(){
const corpoDoCarrinho = document.getElementById("corpoDoCarrinho")
corpoDoCarrinho.innerHTML = ""
for (let i = 0; i < itensCarrinho.length; i++) {
    console.log(itensCarrinho[i])

    const divItenCarrinho = document.createElement("div")
    divItenCarrinho.classList = "divItenCarrinho"
    const divItenCarrinhointerenal = document.createElement("div")
    // divItenCarrinhointerenal.classList = "divItenCarrinhointerenal"
    const img = document.createElement("img")
    img.classList = "imgCarrinho"
    const h3 = document.createElement("h3")
    const preco = document.createElement("p")
    const p = document.createElement("p")
    const buttonDeletar = document.createElement("p")
    buttonDeletar.id = ""
    buttonDeletar.classList = "buttonDeletar"
    	
    buttonDeletar.innerHTML = "&#128465;"
    preco.innerText = itensCarrinho[i].products.preco
    h3.innerText = itensCarrinho[i].products.nome
    img.src = itensCarrinho[i].products.imagem

    corpoDoCarrinho.appendChild(divItenCarrinho)
    divItenCarrinho.appendChild(divItenCarrinhointerenal)
    divItenCarrinho.appendChild(img)
    divItenCarrinho.appendChild(h3)
    divItenCarrinho.appendChild(p)
    divItenCarrinho.appendChild(preco)
    divItenCarrinho.appendChild(buttonDeletar)

}

}

mostrarCarrinhoLogado()
