import Produtos  from "./../Database/Api_Produtos.js"

const produtosPrivadoss = await Produtos.mostrarProdutosPrivados()

const ul = document.getElementsByClassName("lista")[0]

class Dashboard {
   
    static async inicializarTemplate(data){
        const produtosPrivados = await Produtos.mostrarProdutosPrivados()
        ul.innerHTML = ""

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
            editar.classList.add(`${data[i].id}`)

            editar.addEventListener("click",(evt)=>{
                evt.preventDefault()
                const modal = document.getElementsByClassName("modal--Conteiner-Editar")[0]
                modal.style.display = "flex"
                
                const id = editar.classList[1]
                const filtro = produtosPrivados.filter((e)=> e.id == editar.classList[1])[0]
                dadosEditar(filtro.nome,filtro.descricao,filtro.categoria,filtro.preco,filtro.imagem,id)
            })
            deletar.addEventListener("click", (evt)=> {
                evt.preventDefault
                deletarProdutos(deletar.id)
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
}

Dashboard.inicializarTemplate(produtosPrivadoss)


async function captarDados(){
    let produtosPrivados = await Produtos.mostrarProdutosPrivados()
    
    let btn = document.getElementsByClassName("modal--Footer")[0]
    btn.addEventListener("click",async(evt)=>{
        
    evt.preventDefault()
        let nomep = document.getElementById("nome").value
        let descricaop = document.getElementById("descricao").value
        let categoriap = document.getElementsByClassName("btn--ativo")[0].innerText
        let precop = document.getElementById("preco").value
        let imagep = document.getElementById("image").value
    
        let produto = {
            nome: `${nomep}`,
            descricao: `${descricaop}`,
            categoria: `${categoriap}`,
            preco: parseInt(precop),
            imagem: `${imagep}`
        }

        let createProduto = await Produtos.criarProduto(produto)
        await Dashboard.inicializarTemplate(produtosPrivados)
        const modalCriarProduto = document.getElementsByClassName("modal--Conteiner-NovoProduto")[0]
        modalCriarProduto.style.display = "none"
    })

}

function mudarCorBotão(){
   let conteinerCategoria = document.getElementById("categorias")

    conteinerCategoria.addEventListener("click",(event)=>{
        let categorias = conteinerCategoria.querySelectorAll("li")
    
        let itemclicado = event.target
       
        if(itemclicado.id != "categorias"){
            categorias.forEach((itemLi)=>{
                itemLi.classList.remove("btn--ativo")
            })
            itemclicado.classList.add("btn--ativo")
            return itemclicado.innerText
        }
    })
}
async function mudarCorBotão2(){
    let conteinerCategoria = document.getElementById("categorias--Editar")
 
     conteinerCategoria.addEventListener("click",(event)=>{
         let categorias = conteinerCategoria.querySelectorAll("li")
     
         let itemclicado = event.target
        
         if(itemclicado.id != "categorias--Editar"){
             categorias.forEach((itemLi)=>{
                 itemLi.classList.remove("btn-ativo")
             })
             itemclicado.classList.add("btn-ativo")
             return itemclicado.innerText
         }
     })
 }

function fechaModalAbreModal(){
    const modalCriarProduto = document.getElementsByClassName("modal--Conteiner-NovoProduto")[0]
    const btnNovoProduto = document.getElementsByClassName("adicionarProduto--button")[0]
    const btnNovoProdutoFechar = document.getElementsByClassName("Modal--NovoProduto-Fecahr")[0]

        btnNovoProduto.addEventListener("click",(evt)=>{
            evt.preventDefault()
            modalCriarProduto.style.display = "flex"
        })

        btnNovoProdutoFechar.addEventListener("click",(evt)=>{
            evt.preventDefault()
            modalCriarProduto.style.display = "none"
        })



    const modal = document.getElementsByClassName("modal--Conteiner-Editar")[0]
    const btnFechar = document.querySelectorAll(".Modal--Editar--Fechar")
    for (let i = 0; i < btnFechar.length; i++) {
       btnFechar[i].addEventListener("click",(evt)=>{
           evt.preventDefault()
        modal.style.display = "none"
       }) 
    }

}


async function dadosEditar(nome,descricao,categoria,valor,linkImg,id){
    const produtosPrivados = await Produtos.mostrarProdutosPrivados()
    const  inpNome = document.getElementById("nome--Editar")
    const inpDescr = document.getElementById("descricao--Editar")
    const categorias = document.getElementById("categorias--Editar")
    const inpPreco = document.getElementById("preco--Editar")
    const inpLink = document.getElementById("image--Editar")

    inpNome.value = `${nome}`
    inpDescr.value = `${descricao}`
    inpPreco.value = `${valor}`
    inpLink.value = `${linkImg}`

    let lis = categorias.querySelectorAll("li")

    lis.forEach((e)=>{
        if(e.innerText == `${categoria}`){
        e.classList.add("btn-ativo")
        }
    } )

    const btnEditarModal = document.getElementsByClassName("Footer--Editar")[0]
    btnEditarModal.addEventListener("click",(evt)=>{
        evt.preventDefault()
        let produto =  capturarEditar()

        
       let teste =  Produtos.editarProduto(id,produto)
       
        Dashboard.inicializarTemplate(produtosPrivados)
        const modal = document.getElementsByClassName("modal--Conteiner-Editar")[0]
        modal.style.display = "none"
    })

   

}

 function capturarEditar(){

    const  inpNome = document.getElementById("nome--Editar").value
    const inpDescr = document.getElementById("descricao--Editar").value
    const inpPreco = document.getElementById("preco--Editar").value
    const inpLink = document.getElementById("image--Editar").value
    const categoriap = document.getElementsByClassName("btn-ativo")[0].innerText
    let  produto = {
        nome: `${inpNome}`,
        descricao: `${inpDescr}`,
        categoria: `${categoriap}`,
        preco: parseInt(inpPreco),
        imagem: `${inpLink}`
    }

    return  produto
}

async function deletarProdutos(id){
 await Produtos.deletarProduto(id)
 const produtosPrivados = await Produtos.mostrarProdutosPrivados()
    await Dashboard.inicializarTemplate(produtosPrivados)
}




mudarCorBotão()
mudarCorBotão2()
captarDados()
fechaModalAbreModal()


