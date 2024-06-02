
function validar() {
    let miformulario = document.getElementById("formulario");
    let patronNombre = /^[a-zA-Z\s]{5,30}$/;
    let patronEmail = /^\S+@\S+\.\S+$/;
    let parrafo = document.getElementById("parrafo");

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("gmail");
    let apellido = document.getElementById("apellido");
    let mensaje = document.getElementById("mensaje");

    let errores = [];

    if (!patronNombre.test(nombre.value)) {
        errores.push("El nombre tiene que tener cinco caracteres o más.");
    }
    if (!patronNombre.test(apellido.value)) {
        errores.push("El apellido tiene que tener cinco caracteres o más.");
    }
    if (!patronEmail.test(email.value)) {
        errores.push("El correo debe tener un @ y terminar en un dominio válido.");
    }
    if (mensaje.value === "") {
        errores.push("El mensaje no puede estar vacío.");
    }

    if (errores.length > 0) {
        parrafo.innerText = errores.join(" ");
        return false;
    } else {
        parrafo.innerText = "Datos ingresados correctamente.";
        return true;
    }
}
