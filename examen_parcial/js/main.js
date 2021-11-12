var jugadores = [];
var numChinos = [];
var apuestas = [];

//partida
function partida(jugadores, numChinos){
    var isCorrect = false;
    var sumChinos = 0;
    var posibleApuesta;
    do {
        var apuestaReal = prompt("Introduce tu apuesta");
        if(apuestaReal >= numChinos[0] && apuestaReal <= numChinos[0] * 3){
            apuestas[0] = apuestaReal;
            isCorrect = true;
        }

    } while(isCorrect == false);


    for(var i = 1; i < jugadores.length; i++){
        isCorrect = false;
        do {
            posibleApuesta = Math.floor(Math.random() * (numChinos[i] * 3 - numChinos[i] + 1)) + numChinos[i];
            if(numChinos.includes(posibleApuesta) == false){
                apuestas[i] = posibleApuesta;
                isCorrect = true;
            }
        } while(isCorrect == false);
    }

    for(var i = 0; i < numChinos.length; i++){
        sumChinos = sumChinos + numChinos[i];
    }

    for(var i = 0; i < apuestas.length; i++){
        if(apuestas[i] == sumChinos){
           alert("Ha ganado el jugador " + i + " con la apuesta de " + sumChinos + " chinos");
        }
    }
}

//generar jugadores virtuales
function crearJugadores(numJugadores){
    for(var i = 1; i < numJugadores; i++){
        jugadores[i] = i;
        numChinos[i] = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }

    partida(jugadores, numChinos);
}

//iniciar partida
function inicioPartida(){
    var chinosCorrectos = false;
    var numJugadores = prompt("Introduce un numero de jugadores para la partida");
    var nombreJugReal = prompt("Introduce tu nombre");

    do {
        var chinosJugReal = prompt("Introduce tu numero de chinos");

        if(chinosJugReal >= 0 && chinosJugReal <= 3){
            chinosCorrectos = true;
        } else {
            alert("Error. Los chinos no estan entre 0 y 3");
        }

    }while(chinosCorrectos == false);
    
    jugadores[0] = nombreJugReal;
    numChinos[0] = chinosJugReal;
    crearJugadores(numJugadores);
}

//refrescar la pagina
function refreshPage(){
    window.location.reload();
}