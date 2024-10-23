
//En este caso, en vez de usar id para cada input, usamos el value.
function agregar(valor) {
    document.getElementById("pantalla").value += valor
};

// Esta funcion calcula el resultado, gracias a una funcion integrada de js = eval()
function calcular() {   
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}

//Vacia la pantalla de la calculadora
function borrar() {  
    document.getElementById("pantalla").value = "" 
};

let parOp = "("
let parCl = ")"
