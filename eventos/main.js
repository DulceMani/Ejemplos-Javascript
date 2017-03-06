function saludar()
{
    alert('Hola eventos ')
}

function saludar2()
{
    document.write('Hola document')
}

var boton_saluda = document.getElementById('btn-saluda')
boton_saluda.onclick =saludar
boton_saluda.onclick = saludar2

var boton_saluda2 = document.getElementById('btn-saluda2')
boton_saluda2.addEventListener('click', saludar)
boton_saluda2.addEventListener('click', saludar2)