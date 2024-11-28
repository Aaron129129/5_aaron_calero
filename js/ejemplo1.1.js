/*var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de instituto")
console.log(nombre);
alert(nombre);
document.write("<h1>" + nombre + "</h1>")
document.write("<table border =\"1\">")
document.write("<tr><th>Nombre</th><th>Instituto</th></tr>")
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>")
document.write("</table>")


var nota1 = 5;
var nota2 = 4;
var notaTotal = nota1 + nota2;
var notaMedia = (nota1 + nota2); 

function mostrarFecha () {
    var now = Date();
    console.log("Ahora son las: " + now);
    alert("Ahora son las: " + now);
    document.write("<h1>" + now + "</h1>");
}
document.getElementById("boton1").onclick = () =>{
    console.log("Click sobre el boton 1...");
    mostrarFecha();
}

document.getElementById("micaja").onmouseover = () => {
    document.getElementById("micaja").style.backgroundColor = "green";
}
var micaja = document.getElementById("micaja");
micaja.onmouseover = () => {
    micaja.style.backgroundColor = "green";
    micaja.style.fontSize = "40px";
}*/
document.getElementById("micaja").style.fontSize = "10px";

function cambiotamaño() {
    var micaja = document.getElementById("micaja");
    var fontSizemicaja = micaja.style.fontSize;
    console.log("mi caja font size " + fontSizemicaja);

    if (fontSizemicaja == "10px") {
        micaja.style.fontSize = "12px";
    }
    else if (fontSizemicaja == "12px") {
        micaja.style.fontSize = "14px";
    }
    else {
        micaja.style.fontSize = "10px";
    }
}
var botoncambiotamaño = document.getElementById("botoncambiotamaño");
botoncambiotamaño.onclick = () => {
    cambiotamaño();
}