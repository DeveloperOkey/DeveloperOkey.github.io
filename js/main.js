let modo=document.getElementById("modo");
let body=document.body;
// agrega la clase dark con el click en el boton
modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark") /*almaceno en la variable*/
    var icon=document.getElementById("icon");
    let ico =icon.classList.toggle("fa-toggle-on");
        
    localStorage.setItem("modo", val)
})

let valor=localStorage.getItem("modo")

if (valor == "true") {
    body.classList.add("dark")
    ico =icon.classList.toggle("fa-toggle-on")
} else {
    body.classList.remove("dark")
}
/*almacenamos el valor dark en el localstorage para que al actualizar
mantenga el modo oscuro*/
