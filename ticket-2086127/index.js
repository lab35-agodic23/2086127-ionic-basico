document.addEventListener("DOMContentLoaded", function() {
    const calcularBoton= document.getElementById("calcular");
    const listaArticulos= document.getElementById("listaArticulos");
    const totalElementos= document.getElementById("total");

    let total=0;

    calcularBoton.addEventListener("click", function()  {
        const articuloIngresado= document.getElementById("articulo");
        const precioIngresado= document.getElementById("precio");

        const articulo = articuloIngresado.value;
        const precio= parseFloat(precioIngresado.value);

        if(!isNaN(precio)){
            const listaInter= document.createElement("li");
            listaInter.innerHTML=  `${articulo}  +  $${precio.toFixed(2)}`;
            listaArticulos.appendChild(listaInter);

            total += precio;
            totalElementos.textContent = `Total: $${total.toFixed(2)}`;

            articuloIngresado.value = "";
            
            precioIngresado.value = "";
        }
    });

});