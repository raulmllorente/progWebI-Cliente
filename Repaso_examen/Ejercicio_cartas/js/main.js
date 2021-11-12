jQuery.fn.swap = function(b){ 
  b = jQuery(b)[0]; 
  var a = this[0]; 
  var t = a.parentNode.insertBefore(document.createTextNode(''), a); 
  b.parentNode.insertBefore(a, b); 
  t.parentNode.insertBefore(b, t); 
  t.parentNode.removeChild(t); 
  return this; 
};


$( ".item" ).draggable({ revert: true, helper: "clone" });

$( ".item" ).droppable({
  accept: ".item",
  activeClass: "ui-state-hover",
  hoverClass: "ui-state-active",
  drop: function( event, ui ) {

      var draggable = ui.draggable, droppable = $(this),
          dragPos = draggable.position(), dropPos = droppable.position();
      
      draggable.css({
          left: dropPos.left+'px',
          top: dropPos.top+'px'
      });

      droppable.css({
          left: dragPos.left+'px',
          top: dragPos.top+'px'
      });
      draggable.swap(droppable);
  }
});


/*
	checkWin: comproba si el partido ha terminado con victoria para el usuario utilizando
	la tabla de HTML.
*/
function checkWin(){
    var ordenCorrecto = false;
	if(document.getElementById(0).src.includes("2Espadas.jpg"))
		if(document.getElementById(1).src.includes("5Espadas.jpg"))
			if(document.getElementById(2).src.includes("7Bastos.jpg"))
                if(document.getElementById(3).src.includes("CaballoBastos.jpg"))
		             if(document.getElementById(4).src.includes("Reybastos.jpg"))
			            if(document.getElementById(5).src.includes("ReyCopas.jpg"))
				            ordenCorrecto = true;

			setTimeout(()=>{
				alert("Has ganado!");
			},1)		

}