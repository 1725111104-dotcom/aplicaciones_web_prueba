const boton = document.getElementById("mi_boton");

boton.addEventListener('click', ()=> {
    boton.textContent = "Si funciona";
    boton.style.backgroundColor = "green";

    console.log("Clic", new Date().toLocaleDateString());
    console.log("mmmmmm otro texto")

    }
);