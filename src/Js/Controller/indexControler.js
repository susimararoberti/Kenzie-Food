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

    await ListarProdutos.listarPosts(arr)

    return arr
    }

    if(localStorage.getItem("Token") !== ""){
    await ListarProdutos.listarPosts(dataPrivada)
    }
    await ListarProdutos.listarPosts(dadosDosCards)

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

let itensCarrinho = await Carrinho.listarCarrinho()

class MostrarCarrinhoLogado{
    static async mostrarCarrinhoLogado(){
        const corpoDoCarrinho = document.getElementById("corpoDoCarrinho")
        let arrDequantidade = []
        let arrPrecoTotal = 0
        // console.log(corpoDoCarrinho)
        // console.log(itensCarrinho[0].quantity)
        corpoDoCarrinho.innerHTML = ""
        for (let i = 0; i < itensCarrinho.length; i++) {

            arrDequantidade.push(itensCarrinho[i].quantity)
            
            for (let j = 0; j < itensCarrinho[i].quantity; j++) {
                arrPrecoTotal += itensCarrinho[i].products.preco
            }
    
            const divItenCarrinho = document.createElement("li")
            divItenCarrinho.classList = "divItenCarrinho"
            const divItenCarrinhointerenal = document.createElement("div")
            // divItenCarrinhointerenal.classList = "divItenCarrinhointerenal"
            const img = document.createElement("img")
            img.classList = "imgCarrinho"
            const h3 = document.createElement("h3")
            const preco = document.createElement("p")
            const p = document.createElement("p")
            const buttonDeletar = document.createElement("p")
            buttonDeletar.classList = "buttonDeletar"
            buttonDeletar.value = itensCarrinho[i].products.id
            buttonDeletar.addEventListener("click",async () =>{
                await Carrinho.removerDoCarrinho(buttonDeletar.value)
                window.location.reload()
            })
            const quantidade = document.createElement("p")

            
            quantidade.innerHTML = itensCarrinho[i].quantity
            buttonDeletar.innerHTML = "&#128465;"
            preco.innerText = "R$ " + itensCarrinho[i].products.preco
            h3.innerText = itensCarrinho[i].products.nome
            img.src = itensCarrinho[i].products.imagem
        

            corpoDoCarrinho.appendChild(divItenCarrinho)
            divItenCarrinho.appendChild(divItenCarrinhointerenal)
            divItenCarrinho.appendChild(img)
            divItenCarrinho.appendChild(h3)
            divItenCarrinho.appendChild(p)
            divItenCarrinho.appendChild(preco)
            divItenCarrinho.appendChild(quantidade)
            divItenCarrinho.appendChild(buttonDeletar)
        
        }

        // console.log(arrPrecoTotal)

        let quantidadeTotal = arrDequantidade.reduce((a,b)=>{
            return a+b
        })

        await MostrarCarrinhoLogado.atualizarPrecoCarrinhoLogado(quantidadeTotal, arrPrecoTotal)

        }

        static async atualizarPrecoCarrinhoLogado(quantidade, preco){
        const parteDeBaixoDoCarrinho = document.getElementById("parteDeBaixoDoCarrinho")

        const quantidadeTotal = document.createElement("p")
        const precoTotal = document.createElement("p")

        quantidadeTotal.innerText = "Quantidade total = " + quantidade
        precoTotal.innerText = "Preço total = R$" + preco 

        parteDeBaixoDoCarrinho.appendChild(quantidadeTotal)
        parteDeBaixoDoCarrinho.appendChild(precoTotal)


        }
        
}

// async function mostrarCarrinhoLogado(){
// const corpoDoCarrinho = document.getElementById("corpoDoCarrinho")
// corpoDoCarrinho.innerHTML = ""
// for (let i = 0; i < itensCarrinho.length; i++) {
//     // console.log(itensCarrinho[i].products.id)

//     const divItenCarrinho = document.createElement("div")
//     divItenCarrinho.classList = "divItenCarrinho"
//     const divItenCarrinhointerenal = document.createElement("div")
//     // divItenCarrinhointerenal.classList = "divItenCarrinhointerenal"
//     const img = document.createElement("img")
//     img.classList = "imgCarrinho"
//     const h3 = document.createElement("h3")
//     const preco = document.createElement("p")
//     const p = document.createElement("p")
//     const buttonDeletar = document.createElement("p")
//     buttonDeletar.classList = "buttonDeletar"
//     buttonDeletar.value = itensCarrinho[i].products.id
//     buttonDeletar.addEventListener("click",() =>{
//         Carrinho.removerDoCarrinho(buttonDeletar.value)
//         divItenCarrinho.innerHTML = ""
        
//     })
    	
//     buttonDeletar.innerHTML = "&#128465;"
//     preco.innerText = itensCarrinho[i].products.preco
//     h3.innerText = itensCarrinho[i].products.nome
//     img.src = itensCarrinho[i].products.imagem

//     corpoDoCarrinho.appendChild(divItenCarrinho)
//     divItenCarrinho.appendChild(divItenCarrinhointerenal)
//     divItenCarrinho.appendChild(img)
//     divItenCarrinho.appendChild(h3)
//     divItenCarrinho.appendChild(p)
//     divItenCarrinho.appendChild(preco)
//     divItenCarrinho.appendChild(buttonDeletar)

// }

// }





MostrarCarrinhoLogado.mostrarCarrinhoLogado()

export default MostrarCarrinhoLogado
