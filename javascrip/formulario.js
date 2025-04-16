/* procesar los datos del forulario mediante una funcion */
function procesarDatos() {
    //Obtener los datos del formulario
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    //Imprimir el dato obtenido del formulario
    document.writeln("La nota ingresada es: " + nota1 + "<br>");
    //ir al dato a un numero entero
    document.writeln("La segunda nota ingresada es: " + nota2 + "<br>");
}
/* ingresar 5 numero por terclado y saber cual es el mayor */
function nummayor() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var mayor = Math.max(num1, num2, num3, num4, num5);

    document.writeln("El número mayor es: " + mayor);
}
/* Numero des par o impar */

function parimpar() {
    var num = document.getElementById("num").value;
    if (num % 2 === 0) {
        document.writeln=("El número " + num + " es PAR.");
    } else {
        document.writeln =("El número " + num+ " es IMPAR.");
    }
}
/* parseInt para texto*/
/*un programa que ingrese 5 notas primer parcial.si es igual o mayor a 7 pasan de año, si el promedio es mayor o igual a 3.5 se queda en suspenso 
y si el promedio es menor a 3 pierde el semestre 
/* verificar que las notas puedan ser ingresadas en un rango entre 0 a 10*/
