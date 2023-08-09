function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("submitButton").addEventListener("click", function(){
    const contraseña = document.getElementById("password1").value;
    const confirmarContraseña = document.getElementById("password2").value;

    if (contraseña!==confirmarContraseña) {
        showAlertError();
    }
    else{
        showAlertSuccess();
    }
});
