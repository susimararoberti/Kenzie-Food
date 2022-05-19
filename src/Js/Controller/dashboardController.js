import Produtos  from "../Database/Api_Produtos.js"

const produtosPrivados = await Produtos.mostrarProdutosPrivados()

const ul = document.getElementById("ul")

class Dashboard {
    static inicializarTemplate(data){

     

        for (let i = 0; i < data.length; i++){
            const  li = document.createElement("li")
            const  div = document.createElement("div")
            const img = document.createElement("img")
            const nome = document.createElement("p")
            const divCategoria = document.createElement("div")
            const categoria = document.createElement("span")
            const  descricaoDiv = document.createElement("div")
            const descricao = document.createElement("p")
            const botoesDiv = document.createElement("div")
            const editar = document.createElement("button")
            const editarImg = document.createElement("img")
            const deletar = document.createElement("button")
            const deletarImg = document.createElement("img")

            li.classList.add("lista--itens")
            div.classList.add("itens--nome")
            img.classList.add("lista--img")
            img.src = data[i].imagem
            img.alt = data[i].nome
            nome.classList.add("lista--p")
            nome.innerText = data[i].nome
            divCategoria.classList.add("itens--categoria")
            categoria.innerText = data[i].categoria
            descricaoDiv.classList.add("itens--descricao")
            descricao.innerText = data[i].descricao
            botoesDiv.classList.add("itens--botoes")
            editar.classList.add("botoes--acao")
            editarImg.src = "../images/edit.png"
            deletar.classList.add("botoes--acao")
            deletar.id = data[i].id
            deletarImg.src = "../images/delete.png"

            deletar.addEventListener("click", function abrirModal() {
                console.log("deletar")
                const modal = document.getElementById("modal--deletar")
                const modalDeletar = document.getElementById("modal--botao--sim")
                console.log(modal)

                modal.display = "flex flex"
                        modalDeletar.addEventListener("click",function deletarPeloModal(){
                        Produtos.deletarProduto(deletar.id)
                     })
                }
            )

            li.appendChild(div)
            div.appendChild(img)
            div.appendChild(nome)
            li.appendChild(divCategoria)
            divCategoria.appendChild(categoria)
            li.appendChild(descricaoDiv)
            descricaoDiv.appendChild(descricao)
            li.appendChild(botoesDiv)
            botoesDiv.appendChild(editar)
            editar.appendChild(editarImg)
            botoesDiv.appendChild(deletar)
            deletar.appendChild(deletarImg)
            ul.appendChild(li)
        }
    }

    /*static deletarProduto(event){
        const id = event.target.id
        Produtos.deletarProduto(id)
    }*/
}

Dashboard.inicializarTemplate(produtosPrivados)






