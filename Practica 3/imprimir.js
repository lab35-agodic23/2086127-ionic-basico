let montoTXT = document.getElementById("monto");
let gastoTXT = document.getElementById("gasto");



let gastosArreglo = []; //Arreglo vacio

function agregarAarreglo(){
    let nuevogasto = gastoTXT.value + ": $" + montoTXT.value;

   
    gastosArreglo.push(nuevogasto);


  
    console.log(gastosArreglo);
}
