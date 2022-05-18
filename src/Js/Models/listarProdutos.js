import Carrinho from "../Database/Api_Carrinho.js";
import MostrarCarrinhoLogado from "../Controller/indexControler.js"

class ListarProdutos {
    static async listarPosts(data){
let arr = []
// console.log(data[0].id)
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].id)
            arr.push(data[i])
            const vitrine = document.getElementById("vitrine")
            const gerarCard = document.createElement("div")
            gerarCard.classList = "cardsClass"
            const img = document.createElement("img")
            img.classList = "imgDaVitrine"
            const p = document.createElement("p")
            p.classList = "paragrafos"
            const titulo = document.createElement("h2")
            const button = document.createElement("button")
            const preco = document.createElement("p")
            const divInferiorBtnPreco = document.createElement("div")
            const btnConpra = document.createElement("button")
            btnConpra.classList = "btnDeConpra"
            btnConpra.id = data[i].id
            btnConpra.addEventListener("click", async function(){
                await Carrinho.adicionarAoCarrinho(
                    {
                        product_id: btnConpra.id
                    }
                )
                window.location.reload()
            // MostrarCarrinhoLogado.mostrarCarrinhoLogado()
            })
            
            divInferiorBtnPreco.classList = "divInferiorBtnPreco"

            img.src = data[i].imagem
            p.innerText = data[i].descricao
            button.innerText = data[i].categoria
            titulo.innerText = data[i].nome
            preco.innerText = "R$ " + data[i].preco
            btnConpra.innerHTML = "&#128722;"
            
            vitrine.appendChild(gerarCard)
            gerarCard.appendChild(img)
            gerarCard.appendChild(titulo)
            gerarCard.appendChild(p)
            gerarCard.appendChild(button)
            gerarCard.appendChild(divInferiorBtnPreco)

            divInferiorBtnPreco.appendChild(preco)
            divInferiorBtnPreco.appendChild(btnConpra)


        }
    return arr
    }   
    
}


export default ListarProdutos