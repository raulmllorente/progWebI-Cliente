// Cuando el documento esté listo $(document).ready(function() {});
// <<<<<<< HEAD
$(function () {
    $("button").on("click", function(event){
        let op = $(this).val();
        let op1 = parseFloat($("#op1").val());
        let op2 = parseFloat($("#op2").val());
        let result;

        switch (op) {
            case "+":
                result = op1 + op2;
                break;
            case "-":
                result = op1 - op2;
                break;
            case "*":
                result = op1 * op2;
                break;
            case "/":
                result = op1 / op2;
                break;
        }

        $("#res").text(result);

    });

    //Funcionamiento del cuadrado, moverlo con las flechas
    $("body").keydown(function(event){
        let keycode = event.which;
        let topC = parseInt($("#cuadrado").css("top"),10);
        let leftC = parseInt($("#cuadrado").css("left"),10);
        
        switch(keycode) {
            case 37:
                (leftC>0 && leftC<=550) ? $("#cuadrado").css("left", "-=10")
                : $("#cuadrado").css("left", "0");
                break;
            case 38:
                (topC>0 && topC<=250) ? $("#cuadrado").css("top", "-=10")
                : $("#cuadrado").css("top", "0");
                break;
            case 39:
                (leftC>=0 && leftC<550) ? $("#cuadrado").css("left", "+=10")
                : $("#cuadrado").css("left", "550");
                break;
            case 40:
                (topC>=0 && topC<250) ? $("#cuadrado").css("top", "+=10")
                : $("#cuadrado").css("top", "250");
                break;
        }
    });

    //Funcionamiento de la tabla, colorear filas
    $("tr").mouseenter(function (event) {
        let value = $("#nombre").val();
        $(this).is(":contains(" +value+ ")")
            ? $(this).addClass("contains")
            : $(this).addClass("no-contains");
    });

    $("tr").mouseleave(function(event) {
        $(this).prop("class", "");
    });

    //Coches
    $(".coche").each(function (index) { 
        $(this).animate({"left" : index*10}); 
    });


});
// =======
//     $(function () {

//         /* Funcionamiento del cuadrado */
//         $("body").keydown(function (event) {
//             let keycode = event.which;
//             let posLeft = parseInt($("#hijo").css("left"));
//             let posTop = parseInt($("#hijo").css("top"));
//             let direccion = "left";

            
//             switch (keycode) {
//                 case 37:
//                     offset = posLeft > 10 ? posLeft-10 : 0;
//                     break;
//                 case 38:
//                     direccion = "top";
//                     offset = posTop > 10 ? posTop-10 : 0;
//                     break;
//                 case 39:
//                     offset = posLeft < 550 ? posLeft+10 : 550;
//                     break;
//                 case 40:
//                     direccion = "top";
//                     offset = posTop < 250 ? posTop+10 : 250;
//                     break;
//             }
//             $("#hijo").css(direccion, offset);
//         });

//         /* Funcionamiento de la tabla */
//         $("tr").mouseenter(function (event) {

//             let value = $("#nombre").val();

//             //.is() es un metodo traversing, para recorrer el DOM. Ref: https://www.w3schools.com/jquery/jquery_ref_traversing.asp
//             $(this).is(":contains(" + value + ")")
//                 ? $(this).addClass("contains") : $(this).addClass("no-contains");
            
//             //Ejercicio propuesto, mostrar en la ultima celda la nota media de la celda sobre la que se pasa
//         });


//         $("tr").mouseleave(function (event) {
//             $(this).prop("class", "");
//         });


//         /* Funcionamiento del menú contextual */
//         $("#contextMenu").hide();

//         https://api.jquery.com/contextmenu/
//         $("#table").contextmenu(function (event) {
//             //Referencias de los metodos y propiedades asociados a event: https://www.w3schools.com/jquery/jquery_ref_events.asp
//             event.preventDefault(); //Lo que ocurre por defecto con el boton derecho es sacar menu contextual de navegadr
//             if (event.which == 3) {
//                 console.log("SIIII");
//                 $("#contextMenu").css({
//                     "left": event.pageX,
//                     "top": event.pageY
//                 });
//                 $("#contextMenu").toggle();
//             }
//         });

//         $("section#contextMenu").mouseleave(function (event) {
//             $(this).toggle();
//         })





//     });