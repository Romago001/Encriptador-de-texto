var btnDecode = document.getElementById("dec");
var h2 = document.querySelector("h2");

let abc = {
a  :  "a",
e  :  "e",
i  :  "i",
o  :  "o",
u  :  "u" };

btnDecode.addEventListener('click',function decode(){
    if(area.value != "" || solution.value != ""){
        stateDec();
        var cadena = (area.value != "")?area.value:solution.value;
    
        cadena = cadena.replace(/ai/gi,abc.a);
        cadena = cadena.replace(/enter/gi,abc.e);
        cadena = cadena.replace(/imes/gi,abc.i);
        cadena = cadena.replace(/ober/gi,abc.o);
        cadena = cadena.replace(/ufat/gi,abc.u);

    solution.innerHTML = cadena;
    area.textContent = " ";
    }else{
        alert('Introduzca un mensaje a desencriptar antes');
    }
});