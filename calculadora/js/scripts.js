const displayActual = document.querySelector(".valor-actual");
const displayAnterior = document.querySelector(".valor-anterior");
const myDisplay = new Display(displayActual, displayAnterior);
const misCalculos = new Calculadora();
let signo = '';

document.addEventListener("click", (e) => {
    if(e.target.matches(".numero") || e.target.matches(".numero *")){
        myDisplay.agregarNumero(e.target.textContent);
    }

    if(e.target.matches(".operador")){
        signo = e.target.textContent;
        myDisplay.operar(signo);
        console.log(signo);
    }

    if(e.target.matches(".resultado")){
        myDisplay.resultado(e.target.textContent, signo);
    }

    if(e.target.matches(".reset")){
        myDisplay.resetearTodo();
    }
});

