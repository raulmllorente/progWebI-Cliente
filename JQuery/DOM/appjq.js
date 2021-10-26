// Referencias jQuery: https://www.w3schools.com/jquery/jquery_ref_overview.asp

//Funcion para añadir elemento a una lista, con jquery, fijarse en append y no appendChild
function createTaskElement(elementToAppend, title) {
    let li = document.createElement('li');
    li.textContent = title;
    console.log(title);
    elementToAppend.append(li);
}
    // Carga inicial de la lista
const tasks = [
    { title: 'Hacer la colada' },
    { title: 'Preparar la cena' },
    { title: 'Tirar la basura' },
];

//Seleccionamos el nodo padre de la lista, con jQuery
const todoListElement = $("#todo_list");

for (var i = 0; i < tasks.length; i += 1) {
    var task = tasks[i];
    createTaskElement(todoListElement, task.title);
}


/*Añadir codigo al evento 'click' del boton 'create_button', que lo que haga sea llamar a la funcion que 
añade elementos a la lista pasandole el contenido del input task_title. Con jQuery.
*/
$("#create_button").click(function(){
    let inputValue = $("#task_title").val();
    console.log(inputValue);
    if (inputValue !== '') {
        createTaskElement(todoListElement, inputValue);
    } else {
        alert('No puedes guardar una lista vacia.')
    }

});

/*Añadir codigo al evento para cambiar el color de fondo
en caso que la caja este vacia, o no tenga un valor aceptable, solo letras segun una expresión regular
*/
$("#task_title").keypress(function(event) {
    let inputValue = event.target.value;
    let regex = /^[A-Z]/;
    
    if(regex.test(inputValue) || inputValue === '') {
        $(this).css("background-color", "lightgreen");
    } else {
        $(this).css("background-color", "tomato");
    }
});

/*Funciona diferente, añadiremos el mismo funcionamiento a varios eventos
*/
$("#task_title").on({
    keypress: function(event) {
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
        
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("background-color", "lightgreen");
        } else {
            $(this).css("background-color", "tomato");
        }
    },
    keydown: function(event) {
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
        
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("background-color", "lightgreen");
        } else {
            $(this).css("background-color", "tomato");
        }
    },
    keyup: function(event) {
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;
        
        if(regex.test(inputValue) || inputValue === '') {
            $(this).css("background-color", "lightgreen");
        } else {
            $(this).css("background-color", "tomato");
        }
    }
});

