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
