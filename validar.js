function validar( form){

let nombre=form.nombre.value.trim() 
if(nombre==""){
    alert("Por favor ingresa el nombre");
    return false
}

let edad=form.edad.value.trim()

if (edad ===""|| isNaN(edad)|| edad<0){
    alert("Por favor ingrese una edad válida");
    return false
}
let sexo=form.sexo.value()
if (sexo==""){
    alert("Ingrese su sexo")
    return false;
}

}