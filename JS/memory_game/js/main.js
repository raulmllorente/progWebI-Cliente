
let tablero = [
    ['bowser', 'luigi', 'mario', 'rosalina', 'bowser', 'yoshi'],
    ['rosalina', 'wario', 'peach', 'wario', 'toad', 'diddy'],
    ['mario', 'toad', 'yoshi', 'luigi', 'diddy', 'peach']
];

let parejaActual = []; //guardar cada par de elementos clickeados
let emparejadas = []; //guardar los elementos ya emparejados
//let bloqueado = false; // 

function clickedCell(elemento) {
    // if (bloqueado || emparejadas.includes(elemento) || parejaActual.includes(elemento)) {
    //     return;
    // }
    //si cliqueamos en un elemento ya destapado, no hacer nada
    console.log(parejaActual);
    if (emparejadas.includes(elemento) || parejaActual.includes(elemento)) {
        console.log("salir")
        return;
    }

    //Usamos el id del elemento bloqueado para buscar en la matriz el nombre de la imagen que le corresponde
    const row = elemento.id.split(',')[0];
    const col = elemento.id.split(',')[1];

    const character = tablero[row][col];

    //Cargamos la imagen que le corresponde (hasta ese momento tiene el fondo gris)
    elemento.src = `img/${character}.png`;

    //Inluimos el elemento en el array actual
    parejaActual.push(elemento);

    //console.log(parejaActual);

    //Si en el array ya hay dos elementos, los comparo, si son iguales las guardo en el array de parejas encontradas y limpio el actual.
    if (parejaActual.length === 2) {
        if (parejaActual[0].src === parejaActual[1].src) {
            // Éxito
            parejaActual.forEach(function (e) {
                emparejadas.push(e);
            });
            parejaActual = [];

        } else {
            //Si no son iguales, limpio el array actual y vuelvo a ponerles la imagen neutra
            setTimeout(() => {parejaActual.forEach(function (e) {
                e.src = './img/sky.png';
            });
            parejaActual = [];},
            1000);
            
        }
    }
    // if (parejaActual.length === 2) {
    //     if (parejaActual[0].src === parejaActual[1].src) {
    //         // Éxito
    //         parejaActual.forEach(function (e) {
    //             emparejadas.push(e);
    //         });
    //         parejaActual = [];

    //     } else {
    //         bloqueado = true;
    //         setTimeout(function() {
    //             parejaActual.forEach(function (e) {
    //                 e.src = './img/sky.png';
    //             });
    //             parejaActual = [];
    //             bloqueado = false;
    //         }, 1000);
    //     }
    // }
}

function refreshPage() {
    parejaActual = [];
    emparejadas = [];
    //$('img').attr('src', './img/sky.png');
    document.querySelectorAll('img').forEach(function (e) {
        e.src = './img/sky.png';
    });
}
