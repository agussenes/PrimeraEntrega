//calculo de envios dentro y fuera del anillo de circunvalacion (cordoba)
//Envios dentro de Circunvalacion 300, Fuera del anillo de circunvalacion 600
//alert('Indique 1 si el envio es dentro del anillo de circunvalacion | indique 2 si el envio es Afuera del anillo de circunvalacion')
//let envio = prompt('el envio es Dentro o Fuera de circunvalacion: ')      

let salida = 0
function calculoDeEnvio(){
let envio = prompt('Indeique con |1| si es dentro del anillo de circunvalacion y |2| si el envio es Afuera del anillo de circunvalacion: ')

switch (envio) {
    case '1':
        console.log('El envio es dentro del anillo de circunvalacion, tiene un valor de $300')
        salida = 1
        break;
    case '2':
        console.log('El envio es Afuera del anillo de circunvalacion, tiene un valor de $600')
        salida = 1
        break;
    default:
        console.log('numero incorrecto, Indeique con 1 si es dentro del anillo de circunvalacion y 2 si el envio es Afuera del anillo de circunvalacion')
        salida = 0
        break;

}
return salida;

}

let resultadoEnvio = 0 

do{
    resultadoEnvio =calculoDeEnvio()
    console.log(resultadoEnvio) 
}while(salida !== 1)


//Calcula tus cuotas!!

let muebleMovil = 5000
let dominoAnimales = 2000
let juegosMontessori = 8000
let minutasMadera = 6000
let respuesta = 0
let totalCuotas = 0
let salidaCuotas = 0
let condicion = 0

function calculoCuotas(){
    console.log('|1| para saber cuotas disponibles para Muebles Movil')
    console.log('|2| para saber cuotas disponibles para Domino de Animales')
    console.log('|3| para saber cuotas disponibles para Juegos Montessori')
    console.log('|4| para saber cuotas disponibles para Minutas de Madera')
    respuesta = prompt()
    if(respuesta == 1){
        totalCuotas = muebleMovil / 3
        console.log('Esta disponible en 3 cuotas sin interes de: ' + totalCuotas)
        salidaCuotas = 1
    }if(respuesta == 2){
        totalCuotas = (dominoAnimales + 400) / 2
        console.log('Esta disponible en 2 cuotas con un 20% de interes de: ' + totalCuotas)
        salidaCuotas = 1
    }if(respuesta == 3){
        totalCuotas = juegosMontessori / 4
        console.log('Esta disponible en 4 cuotas sin interes de: ' + totalCuotas) 
        salidaCuotas = 1
    }if(respuesta == 4){
        totalCuotas = (minutasMaderan + 1800) / 5
        console.log('Esta disponible en 5 cuotas con un 30% de interes de: ' + totalCuotas)
        salidaCuotas = 1
    }if(respuesta > 4 || respuesta <= 0){
        console.log('Error numero incorrecto, vuelve a indicar para que juego quiere ver las cuotas disponibles')
        salidaCuotas = 0
    }
    return salidaCuotas
}

while(condicion != 1){
condicion = calculoCuotas()

}



