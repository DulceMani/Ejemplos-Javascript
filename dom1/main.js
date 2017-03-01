//var cajas = document.getElementsByTagName('div')
//var cajas = document.getElementById('primera')

//cajas.texContente = 'Primera caja'
//cajas[0].textContent = 'Hola mundo'
//cajas[1].innerHTML= '<b> Hola JavaScript </b>'

//No se recomienda agregar elementos con write
//document.write('<div class="caja">Nuevo elemento</div>')

// 5 pasos para agregar un nuevo elemento en el DOM
//paso 1: crear el nuevo elemento
var elemntoNuevo = document.createElement('div')

//paso 2: crear el contenido
var nodoContenido = document.createTextNode('Nuevo elemento')

//paso 3: Añadir el contenido al elemento 
elemntoNuevo.appendChild(nodoContenido)

//paso 4: Agregar atributos al elemento
//elemntoNuevo.setAttribute('class','caja')
elemntoNuevo.setAttribute('class','caja colorcoral')

//paso 5: Agregar el contenido al documento
var contenedor = document.getElementById('contenedor')

//Agrega al final
//contenedor.appendChild(elemntoNuevo)

var primera = document.getElementById('primera')
//Agrega antes de
contenedor.insertBefore(elemntoNuevo,primera)

//eliminar la caja con id tercera
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)