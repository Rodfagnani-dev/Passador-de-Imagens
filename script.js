let botaoProximo = document.querySelector(".proximo")
let botaoAnterior = document.querySelector(".voltar")
let ListaImagens = document.querySelectorAll("img")
let contador = 0

botaoProximo.onclick = function passarSlide() {
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador < 2){
        contador = contador + 1
    }else{
        contador = 0
    }

    

    ListaImagens[contador].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlide() {
    document.querySelector("img.ativo").classList.remove("ativo")

    if(contador > 0){
        contador = contador - 1
    }else{
        contador = 2
    } 

    ListaImagens[contador].classList.add("ativo")
}

