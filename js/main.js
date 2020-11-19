class toDo {
    constructor(toDoItem) {
        this.id = x++;
        this.toDoItem = toDoItem;
    }
}

let todos = []; // ARRAY TO DO
todos.id = "todos";
let x = 1; // OBJECT ID

window.onload = function () {

    let myUl = document.createElement("ul"); // UL LIST
    myUl.id = "myUl";
    let main = document.getElementById("main").appendChild(myUl);

    let todo1 = new toDo('Tvätta'); // TO DO TASKS
    let todo2 = new toDo('Damsuga');
    let todo3 = new toDo('Handla');
    let todo4 = new toDo('Panta');
    let todo5 = new toDo('Plugga');

    todos.push(todo1); // PUSH TO DO TO ARRAY
    todos.push(todo2);
    todos.push(todo3);
    todos.push(todo4);
    todos.push(todo5);

    let addButton = document.getElementById("addButton").addEventListener('click', createListItem);      // ADD BUTTON
    let sortButton = document.getElementById("sortButton").addEventListener('click', sortToDos);      // SORT BUTTON

    let textInput = document.getElementById("textInput"); // TEXT INPUT
    textInput.id = "textInput";

    createHTML();
}

function createListItem() { // CREATE NEW TO DO WITH USER INPUT
    let newListItem = document.getElementById("textInput").value;

    if (newListItem == "") {
        alert("Skriv någonting! :-)");
    }

    else {
        let newToDo = new toDo(newListItem);
        todos.push(newToDo);
        document.getElementById("textInput").value = "";

        createHTML();
    }
}

function createHTML() { // CREATE HTML OUT OF ARRAY + ASSIGN CHECK BUTTONS TO EACH TO DO
    myUl.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = todos[i].toDoItem;
        myUl.appendChild(listItem);

        let checkButton = document.createElement("button");
        checkButton.id = "checkButton";
        checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
        checkButton.addEventListener('click', () => { completeToDo(todos[i]) });
        listItem.appendChild(checkButton);
    }
}

function completeToDo(completedTask) { // SPLICE TO DO FROM ARRAY + RECREATE HTML
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == completedTask.id) {
            todos.splice(i, 1);
          
            createHTML();
        }
    }
}

function sortToDos() { // SHUFFLE ORDER OF ARRAY + RECREATE HTML
    todos.sort(function () {
        return 0.5 - Math.random()
    });

    createHTML();
}