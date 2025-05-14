/* Instrucciones
Crear una carpeta <apellido_nombre_parcial-Front> (con tu apellido y nombre), y desarrollar los ejercicios
en su interior. Una vez finalizado, subir a repo de GitHub o comprimir la carpeta. Realizar la entrega
por Classroom en el área correspondiente.
Ejercicio 1
La agencia RGB Automotores es una concesionaria exclusiva que se especializa en la venta de vehículos de
alta calidad, pero con una característica muy particular: solo comercializa autos de color rojo, verde
o azul, los colores que representan su identidad. Como parte del equipo de desarrollo web, tu tarea es
diseñar la interfaz y programar la funcionalidad de un sistema interno que permita registrar los autos
disponibles para la venta. Este sistema debe ser claro, organizado y facilitar la carga de información
como marca, modelo, año de fabricación y color, respetando las políticas de la empresa.
Consigna:
1. Crear una página con el título principal "RGB Automotores".
2. Debajo, agregar una tabla con 4 columnas: Marca, Modelo, Año y Color.
• Solo deben verse los encabezados (no filas con datos).
• La tabla debe:
• Tener todos los bordes visibles.
• Tener el encabezado con color de fondo oscuro y texto blanco.
• Tener un ancho del 30% de la vista y estar centrada horizontalmente.
• Estar separada del título por un margen.
3. Debajo de la tabla, agregar los campos para cargar un auto:
• Marca
• Modelo
• Año (recordá que el primer auto se fabricó en el año 1886)
• Color (mediante un select con las opciones de color de la empresa)
• Cada campo debe tener su label correspondiente.
• Cada campo debe estar en una línea distinta.
• Los campos deben estar alineados a la izquierda.
4. Agregar un botón con el texto "Agregar" debajo del formulario.



Ejercicio 2
Programar la interacción de los inputs con la tabla de autos utilizando JavaScript.
Consigna:
1. Al presionar el botón "Agregar", se deben verificar los siguientes puntos:
• Que todos los campos estén completos.
• Que el año sea mayor o igual a 1886.
2. Si algún campo está incompleto o el año no es válido:
• Mostrar un mensaje de advertencia en un elemento <h2> que ya estará en la página con el texto
"Revisar formulario", de color rojo.
3. Si los datos son válidos:
• Ocultar el mensaje de advertencia.
• Crear una nueva fila en la tabla y agregar los datos del auto en el orden: Marca, Modelo,
Año, Color.
4. El color de fondo de cada celda correspondiente al color debe cambiar de a cuerdo al color
indicado en su contenido al posicionar el mouse sobre ella.
5. Luego de agregar el auto, los campos deben limpiarse automáticamente para poder ingresar otro
vehículo. */

let marcaCampo = document.getElementById("marcaInput")
let modeloCampo = document.getElementById("modeloInput")
let anioCampo = document.getElementById("anioInput")
let colorCampo = document.getElementById("colorInput")
let error= []
let validacion
function verificarCampos(){
    
    if(marcaCampo.value == ""){
        error.push("Marca")
        validacion = false
    }
    if(modeloCampo.value == ""){
        error.push("Modelo")
        validacion = false
    }
    if(anioCampo.value < 1886 || anioCampo.value > 2025){
        error.push("Año Incorrecto")
        validacion = false
    }
    if(colorCampo.value == ""){
        error.push("color")
        validacion= false
    }
    else {validacion = true}
    return validacion
}
 

 function agregarAuto(){
    verificarCampos()
    if (validacion == false){
        alert("Completar los siguientes campos:  " + error.join(", "))
        error = []
    }
    else {
        let table = document.getElementById("table")
        let tableRow = table.insertRow(-1)
        let tableDato1 = tableRow.insertCell(0)
        let tableDato2 = tableRow.insertCell(1)
        let tableDato3 = tableRow.insertCell(2)
        let tableDato4 = tableRow.insertCell(3)

        tableDato1.textContent = marcaCampo.value
        tableDato2.textContent = modeloCampo.value
        tableDato3.textContent = anioCampo.value
        tableDato4.textContent = colorCampo.value
        let formulario = document.querySelector("form")
        formulario.reset()

        switch (tableDato4.textContent) {
            case "Red": tableDato4.classList.add("rojo")
                
                break;
        
            default:
                break;
        }

    }
 }



