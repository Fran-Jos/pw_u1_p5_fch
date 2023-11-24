/* externa*/
/* las paginas html debe hacer referencia* a este archivo*/

function sumarNumerosCompletos(){
    var n1 = parseInt(document.getElementById('idn1').value)
    var n2 = parseInt(document.getElementById('idn2').value)
    console.log('Funcion SumarNumeros ' + n1)
    console.log('Funcion SumarNumeros ' + n2)
    var resultado  = n1 + n2
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
   
} 


function restarNumeros(){
    var n1 = parseInt(document.getElementById('idn1').value)
    var n2 = parseInt(document.getElementById('idn2').value)
    console.log('Funcion RestarNumeros ' + n1)
    console.log('Funcion RestarNumeros ' + n2)
    var resultado  = n1 - n2
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;

}

function multiplicacionNumeros(){
    var n1 = parseInt(document.getElementById('idn1').value)
    var n2 = parseInt(document.getElementById('idn2').value)
    console.log('Funcion RestarNumeros ' + n1)
    console.log('Funcion RestarNumeros ' + n2)
    var resultado  = n1 * n2
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

function divisionNumeros(){
    var n1 = parseInt(document.getElementById('idn1').value)
    var n2 = parseInt(document.getElementById('idn2').value)
    console.log('Funcion RestarNumeros ' + n1)
    console.log('Funcion RestarNumeros ' + n2)
    var resultado  = n1 / n2
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

function cambiarImagen(){
document.getElementById("imagen1").src='https://www.icegif.com/wp-content/uploads/memes-icegif-16.gif'
}