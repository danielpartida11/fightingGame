//---------------------------------------------------------------------FUNCIONES Y CLASES AQUI-------------------------------------------------------------------------------------
class Personaje {
    constructor(nombre, poder, vida, silueta){
        this.nombre = nombre;
        this.poder = poder;
        this.vida = vida;
        this.silueta = silueta;
    }
}

let arrayPersonaje = [];

const seleccionPersonaje = (personaje) => {
    if (personaje == 'Personaje1'){
        printPersonaje('marco.gif');
        arrayPersonaje.push(p1);
    } else if (personaje == 'Personaje2'){
        printPersonaje('mario.gif');
        arrayPersonaje.push(p2);
    } else if (personaje == 'Personaje3'){
        printPersonaje('sonic.gif');
        arrayPersonaje.push(p3);
    } else if (personaje == 'Personaje4'){
        printPersonaje('steve.gif');
        arrayPersonaje.push(p4);
    }
}

const printPersonaje = (personaje) => {
    if (arrayPersonaje.length < 2){
        if (arrayPersonaje.length == 1){
            let imagen = document.createElement('img');
            imagen.src = './img/luchadores/' + personaje;
            document.getElementById('contenedor3').appendChild(imagen);
        } else {
            let imagen = document.createElement('img');
            imagen.src = './img/luchadores/' + personaje;
            document.getElementById('contenedor1').appendChild(imagen);
        }
    }
}

const pelea = () => {
    let imagen = document.createElement('img');
    let imagen2 = document.createElement('img');
    document.getElementById('player2').appendChild(imagen);
    document.getElementById('player1').appendChild(imagen);
    imagen2.src = './img/luchadores/' + arrayPersonaje[1].silueta;
    imagen.src = './img/luchadores/' + arrayPersonaje[0].silueta;
}

const botonStart = () => {
    if (arrayPersonaje.length == 2){
        characterSelectorDiv.style.display = 'none';
        fightScreenDiv.style.display = 'flex';
        pelea();
    }
}

//---------------------------------------------------------------------FUNCIONES Y CLASES AQUI-------------------------------------------------------------------------------------

//---------------------------------------------------------------------CODIGO AQUI-------------------------------------------------------------------------------------------------
/*let mainMenuDiv = document.getElementById('mainMenu');*/
let characterSelectorDiv = document.getElementById('characterSelector');
let fightScreenDiv = document.getElementById('fightScreen');
/*let finalScreenDiv = document.getElementById('finalScreen');*/

let p1 = new Personaje('marco', 90, 400, 'marco.gif');

let p2 = new Personaje('mario', 70, 650, 'mario.gif');

let p3 = new Personaje('sonic', 100, 350, 'sonic.gif');

let p4 = new Personaje('steve', 35, 100, 'steve.gif');
//---------------------------------------------------------------------------CODIGO AQUI-------------------------------------------------------------------------------------------