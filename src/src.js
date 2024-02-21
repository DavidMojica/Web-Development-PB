//-------VARIABLES-------*/
let nam = "Pancracio de la Santa Circuncinción";
let confirmation = undefined;

/*------Operador ternario------*/
// console.log(nam === "Pancracio" ? "Es el valor" : "No es el valor");

/*-----------Constantes-----------*/
const tonto = true;


/*---------Metodos propios del lenguaje----------*/
let pi2 = undefined;
pi2 = Math.PI;
// console.log(nam.includes("Pancracio"));
// console.log(nam.length);

//----------Method & functions---------*/
//Arrow function
const sum = (a, b) => {
    return a+b;
}

// Cuando es un solo parametro
const saludar = userName =>{
    return `Hi! ${userName}`;
}

// Console logs
// console.log(typeof(sum(1+"a")));

const sumar2 = sum;
// console.log(sumar2(1+2+3,3));

//---------LOOPS---------//
for (let i = 0; i <5; i++){
    // console.log(i);
}

//functions (forma anterior)
function sumar(n1, n2){

}

const wave = function() {

}

const dayScene = Atropos({
    el: '.a-day',
    activeOffset: 100,
});