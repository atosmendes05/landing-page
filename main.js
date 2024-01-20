const tenisImg = document.querySelector(".tenis")
const images = document.querySelectorAll(".tenis img")


let indice = 0

function carrosel(){
    indice++;

    if(indice > images.length -1){
        indice = 0
    }

    tenisImg.style.transform = `translateX(${-indice * 500}px)`
}

setInterval(carrosel , 2000)