import {registrarPersona} from "./promesas.js"


window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar)
})
const registrar=()=>{
    let eNombre=document.getElementById("nombre");
    let eApellido=document.getElementById("apellido");
    let eRut=document.getElementById("rut");
    let eCorreo=document.getElementById("correo");
    let eEdad=document.getElementById("edad");
    let eFnacimiento=document.getElementById("fnacimiento");

    let vNombre=eNombre.value;
    let vApellido=eApellido.value;
    let vRut=eRut.value;
    let vCorreo=eCorreo.value;
    let vEdad=eEdad.value;
    let vFnacimiento=eFnacimiento.value;

    let objeto={nombre:vNombre,
        apellido:vApellido,
        rut:vRut,
        correo:vCorreo,
        edad:vEdad,
        fnacimietno:vFnacimiento}
    registrarPersona(objeto).then(()=>{
        alert("");
    }).catch((r)=>{
        console.log(r)
    });
}



