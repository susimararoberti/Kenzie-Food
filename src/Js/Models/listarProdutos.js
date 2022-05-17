class ListarProdutos {
    static async listarPosts(data){

        // if (localStorage.getItem("Token") !== ""){
            
        // }

        // const response = await fetch("https://api-kenzie-food.herokuapp.com/products",
        // {
        //     method: "GET"
        //     // ,headers: {
        //     //     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")).token
        //     // },
        //   })
        // const data  = await response.json()

        // console.log(data[0])

        for (let i = 0; i < data.length; i++) {
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
    

    }
    
}

// Api.listarPosts()

// const btnTodos = document.getElementById("todos")
// const btnPanificadora = document.getElementById("panificadora")
// const btnFrutas = document.getElementById("frutas")
// const btnBebidas = document.getElementById("bebidas")

// btnTodos.addEventListener("click", filtroCategoria)

// function filtroCategoria(){
//     console.log("fdsfd")
// }

export default ListarProdutos