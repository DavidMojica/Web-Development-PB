//5 variables let const
//3 arrow, sin param, 1 param, 2 o + param
//integrar con lamado a funciones y mostrar resultados
//Entregar en: 28-02-24

//--------Variable declaration--------//
const nombre = "Pancraicio";
const apellidos = "De la santa Circuncincion";
const arroz = 2500;
const carne = 18000;
const e = Math.E;
let completeName = undefined;

const error1 = "Complete name is not completely string.";

/*--------ARROWS---------*/
const valorProductosE = () =>{
    return (arroz, carne) + e;
}

const multiplicarPorE = numero => {
    return numero * e;
}

const nombreCompleto = (userName, userLastName) => {
    completeName = `${userName} ${userLastName}`;
    if (typeof(completeName) === "string") return completeName
    else return error1
}


//---------Integracion mediante Logs-----------//
console.log(valorProductosE());
console.log(multiplicarPorE(carne));
console.log(nombreCompleto(nombre, apellidos));
