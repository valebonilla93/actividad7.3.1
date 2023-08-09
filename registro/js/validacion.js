function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("regBtn").addEventListener("click", function validarDatos(){
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const contraseña = document.getElementById('password1').value
    const repetirContraseña = document.getElementById('password2').value
    const checkbox = document.getElementById('terminos').checked

    console.log(nombre, apellido)

    if (nombre === '' || apellido === '' || email==='' || contraseña === '' || repetirContraseña==='' || checkbox === false){
        showAlertError();
    }else if(contraseña.length < 6) {
        showAlertError();
    }else if (contraseña!==repetirContraseña){
        showAlertError();
    }else {
        showAlertSuccess();
    }
        
    })
