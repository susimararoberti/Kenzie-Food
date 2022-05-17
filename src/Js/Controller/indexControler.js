import  ListarProdutos  from "../Models/listarProdutos.js";
import  Produtos  from "../Database/Api_Produtos.js";

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