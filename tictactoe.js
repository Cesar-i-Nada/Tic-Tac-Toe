const cuadriculas = Array.from(document.getElementsByClassName("celda"))
const limpiarPantalla = document.getElementsByClassName("limpiarPantalla")
const marcador = document.getElementsByClassName("marcador")
const numH = document.getElementById("numH")
const numM = document.getElementById("numM")
const numE = document.getElementById("numE")
let contH = 0
let contM = 0
let cantMovimientos = 0
let ganador = false
let empate = true
function juegoHumano() {
    cuadriculas.forEach((cuadricula)=>{
        cuadricula.addEventListener("click",function(){
            validarGanador()
            cuadricula.textContent = "X"
            cantMovimientos++
            setTimeout(() => {
            juegoMaquina()
        }, 500);
        validarGanador()
    })
    validarGanador()
    })   

}
let posGanadoras = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
function juegoMaquina() {
    let filtroCuadriculas = cuadriculas.filter(celda=>{
          return celda.textContent === ""
      })
    const aleatorio = Math.floor(Math.random() * filtroCuadriculas.length)
    filtroCuadriculas[aleatorio].textContent = "O"
    cantMovimientos++
    validarGanador()
    }
juegoHumano()

function validarGanador() {
    for (const item of posGanadoras) {
        let [pos1,pos2,pos3] = item
        if (cuadriculas[pos1].textContent != "" && cuadriculas[pos1].textContent === cuadriculas[pos2].textContent && cuadriculas[pos1].textContent === cuadriculas[pos3].textContent) {
            if (cuadriculas[pos1].textContent === "X") {
                numH.textContent = contH
                contH++
                ganador = true
            }
            else if(cuadriculas[pos1].textContent === "O"){
                contM++
                numM.textContent = contM
                ganador = true
            }           
        }
        if(cantMovimientos === 9 && !ganador && empate) {
            alert("Empate")
            empate = false
            contE++
            numE.textContent = contE
            ganador = true
        }
    }

}

