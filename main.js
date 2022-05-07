const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const expresiones = {
    fullname: /^[a-zA-Z0-9\^ - + / $]{3,16}$/, //minimo 3 caracteres maximo 16 caracteres.
    username: /^[a-zA-Z0-9\ - + / $ ]{3,16}$/,
    password: /^[a-zA-Z0-9]{3,16}$/,
    password2: /^[a-zA-Z0-9]{3,16}$/,
}

const validarformulario = (e) =>{
    switch(e.target.name){
        case "fullname":
            if (expresiones.fullname.test(e.target.value)) { 
                document.getElementById('grupo__fullname').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__fullname').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__fullname i').classList.add('fa-check-circle');
                document.querySelector('#grupo__fullname i').classList.remove('fa-times-circle');
            }
            else{
                document.getElementById('grupo__fullname').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__fullname').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__fullname i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__fullname i').classList.add('fa-times-circle');
            }
        break;

        case "username":
            if (expresiones.username.test(e.target.value)) {
                document.getElementById('grupo__username').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__username').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__username i').classList.add('fa-check-circle');
                document.querySelector('#grupo__username i').classList.remove('fa-times-circle');
            }
            else{
                document.getElementById('grupo__username').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__username').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__username i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__username i').classList.add('fa-times-circle');
            }
        break;

        case "password":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.add('fa-check-circle');
                document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
            }
            else{
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__password i').classList.add('fa-times-circle');
            }
        break;

        case "passwor2":
            if (expresiones.password2.test(e.target.value)) {
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.add('fa-check-circle');
                document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
            }else{
                document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__password2 i').classList.add('fa-times-circle');
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);  

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

function verificarPasswords(){

    //verificar si las contraseñas no coincieden
    if (password.value != password2.value) {

        //si lasa contraseñas no coinciden mostrar mensaje
        document.getElementById("error").classList.add("mostrar");
        return false;   
    }else{
        //si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");

        //mostrar un mensaje si las contraseñas coinciden
        document.getElementById("ok").classList.remove("ocultar");

        setTimeout(function() { 
            location.reload();
              
        }, 3000);
        return true;
    }

}