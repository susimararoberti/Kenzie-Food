import  ListarProdutos  from "../Models/listarProdutos.js";
import  Produtos  from "../Database/Api_Produtos.js";

async function mostrarProdutos(){
    if(localStorage.getItem("Token") !== ""){
        let dataPrivada = await Produtos.mostrarProdutosPrivados()
    ListarProdutos.listarPosts(dataPrivada)

    }
    let data = await Produtos.mostrarProdutosPublicos()

    ListarProdutos.listarPosts(data)

}

mostrarProdutos()

const produtos = await Produtos.mostrarProdutosPublicos()

const buscar = document.getElementById("buscar")

const produtosPrivados = await Produtos.mostrarProdutosPrivados()

console.log(produtos)
        
function buscarProdutos(){
    vitrine.innerHTML = "" 
    const dataBusca = []

    if(localStorage.getItem("Token" == "")){
        for(let i = 0; i < produtos.length; i++){
            if (produtos[i].nome.toLowerCase().includes(buscar.value.toLowerCase()) == true || produtos[i].categoria.toLowerCase().includes(buscar.value.toLowerCase) == true){
                dataBusca.push(produtos[i])
            }
        }
        }else{
            
            for(let i = 0; i < produtos.length; i++){
                if (produtos[i].nome.toLowerCase().includes(buscar.value.toLowerCase()) == true || produtos[i].categoria.toLowerCase().includes(buscar.value.toLowerCase) == true){
                    console.log("entrou no if")
                    dataBusca.push(produtos[i])
                }
            }for(let i = 0; i < produtosPrivados.length; i++){
                if (produtosPrivados[i].nome.toLowerCase().includes(buscar.value.toLowerCase()) == true || produtosPrivados[i].categoria.toLowerCase().includes(buscar.value.toLowerCase) == true){
                    dataBusca.push(produtos[i])
                }
            }

        }
        ListarProdutos.listarPosts(dataBusca)
        buscar.addEventListener("keypress", buscarProdutos)
}

buscarProdutos()