var nombre = prompt("Dime tu nombre");
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
var notaMedia = (nota1 + nota2)