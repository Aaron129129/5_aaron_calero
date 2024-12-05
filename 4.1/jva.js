function cambiarColor() {
    var div = document.getElementById('color_div');
    var divColor = div.style.backgroundColor;

    if (divColor === "green") {
        div.style.backgroundColor = "pink";
    } else if (divColor === "pink") {
        div.style.backgroundColor = "blue";
    } else {
        div.style.backgroundColor = "green";
    }
}

function hola() {
    document.getElementById("color_div").innerHTML += " HOLA!";
}

function adios() {
    document.getElementById("color_div").innerHTML += " ADIOS!";
}