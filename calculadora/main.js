var pilaNumeros = []
var pilaOperadores= []
var  cadnum= ""
function escribe_operacion()
{   
    var operacion = document.getElementById('operacion')
    var cadenaoperacion = operacion.innerText

    
    cadenaoperacion += this.innerText
    operacion.innerText = cadenaoperacion

    if(this.innerText == "C"){
        limpia()
        operacion.innerText = ""
    }else{

        if(this.innerText != "=")
            apila(this.innerText)
        else{
            if(cadnum != "")
                pilaNumeros.unshift(parseFloat(cadnum))
            operacion.innerText = resultado()
        }
    }
}
function resultado()
{
    var num = 0;
    while(pilaNumeros.length > 1){
        num = pilaNumeros.pop()
        if(pilaOperadores.length>0){
            var op = pilaOperadores.pop()
            operacionres(num, op)
        }
        
    }
    if(pilaNumeros.length<1)
     return num
    return pilaNumeros[0]
    //return 0
}
 
function operacionres(num1, op1)
{
    var num2
    var op2
    switch(op1){
        case "*": num2 = pilaNumeros.pop()
        num1 = num1*num2
        pilaNumeros.push(num1)
        break;
        case "/":
        num2 = pilaNumeros.pop()
        num1 = num1/num2
        pilaNumeros.push(num1)
        break; 
        case "+": 
        if(pilaOperadores.length >0)
        {
            op2 = pilaOperadores.pop()
            if(jerarquia(op1,op2)==1)
            {
                num2 = pilaNumeros.pop()
                operacionres(num2,op2)
                pilaNumeros.push(num1)
                pilaOperadores.push(op1)
            }
            else{
            num2 = pilaNumeros.pop()
            num1 = num1+num2
            pilaNumeros.push(num1)
        }
        }else{
            num2 = pilaNumeros.pop()
            num1 = num1+num2
            pilaNumeros.push(num1)
        }
        break;
        case "-":
        if(pilaOperadores.length >0)
        {
            op2 = pilaOperadores.pop()
            if(jerarquia(op1,op2)==1)
            {
                num2 = pilaNumeros.pop()
                operacionres(num2,op2)
                pilaNumeros.push(num1)
                pilaOperadores.push(op1)
            }else{
            num2 = pilaNumeros.pop()
            num1 = num1-num2
            pilaNumeros.push(num1)
        }
        }
        num2 = pilaNumeros.pop()
        num1 = num1-num2
        pilaNumeros.push(num1)
        break;
    }
    
    //return num1
}
function jerarquia(op1,op2)
{
    if(op1 == '+' || op1 == '-' && op2 == '*' || op2 == '/')
     return 1
     else
     return 0
}
function apila(cad){
    if(cad == "+" || cad == "-"|| cad == "*"||cad == "/")
    {
        pilaOperadores.unshift(cad);
        pilaNumeros.unshift(parseFloat(cadnum));
        cadnum = ""
    }else
        cadnum+=cad;
}
function limpia()
{
    pilaNumeros = []
    pilaOperadores= []
    cadnum= ""
    cadenaoperacion=""
}
var buttons = document.getElementsByTagName('button')

for(var i=0;i<buttons.length; i++){
    buttons[i].onclick = escribe_operacion

}