class toDo {
    constructor(toDoItem) {
        this.id = x++;
        this.toDoItem = toDoItem;
    }
}

class finishedToDo {
    constructor(finishedToDoItem) {
        this.id = y++;
        this.finishedToDoItem = finishedToDoItem;
    }
}

let todos = []; // ARRAY TO DO
todos.id = "todos";
let x = 1; // OBJECT ID

let finishedToDos = []; // ARRAY TO DO
finishedToDos.id = "finishedToDos";
let y = 1;


window.onload = function () {

    let myUl = document.createElement("ul"); // UL LIST
    myUl.id = "myUl";

    let finishedUl = document.createElement("ul"); // UL LIST
    finishedUl.id = "finishedUl";

    let main = document.getElementById("main").appendChild(myUl);
    let completed = document.getElementById("completed").appendChild(finishedUl);


    let todo1 = new toDo('Tvätta'); // TO DO TASKS
    let todo2 = new toDo('Dammsuga');
    let todo3 = new toDo('Handla');
    let todo4 = new toDo('Plugga');

    let finishedToDo1 = new finishedToDo('Panta');


    todos.push(todo1); // PUSH TO DO TO ARRAY
    todos.push(todo2);
    todos.push(todo3);
    todos.push(todo4);

    finishedToDos.push(finishedToDo1);


    let addButton = document.getElementById("addButton").addEventListener('click', createListItem);      // ADD BUTTON
    let sortButton = document.getElementById("sortButton").addEventListener('click', sortToDos);      // SORT BUTTON


    let textInput = document.getElementById("textInput"); // TEXT INPUT
    textInput.id = "textInput";

    createHTML();
    finCreateHTML();
}

function createListItem() { // CREATE NEW TO DO WITH USER INPUT
    let newListItem = document.getElementById("textInput").value;

    if (newListItem == "") {
        alert("Write a new task! :-)");
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

        let deleteButton = document.createElement("button")
        deleteButton.id = "deleteButton";
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => { deleteToDo(todos[i]) });
        listItem.appendChild(deleteButton);    
    }
}

function finCreateHTML(){
    finishedUl.innerHTML = "";
    for (let i = 0; i < finishedToDos.length; i++) {
        let finishedListItem = document.createElement("li");
        finishedListItem.id = "finishedListItem";
        finishedListItem.innerHTML = finishedToDos[i].finishedToDoItem;
        finishedUl.appendChild(finishedListItem);

        let checkButton = document.createElement("button");
        checkButton.id = "checkButton";
        checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
        checkButton.addEventListener('click', () => { undoCompletedToDo(finishedToDos[i]) });
        finishedListItem.appendChild(checkButton);

        let deleteButton = document.createElement("button")
        deleteButton.id = "deleteButton";
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => { deleteFinToDo(finishedToDos[i]) });
        finishedListItem.appendChild(deleteButton);    

    }
}

function completeToDo(completedTask) { // SPLICE TO DO FROM ARRAY + RECREATE HTML
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == completedTask.id) {
            todos.splice(i, 1);

            let todo = completedTask.toDoItem;

            let newFinishedToDo = new finishedToDo(todo);
            finishedToDos.push(newFinishedToDo); 


            createHTML();
            finCreateHTML();
        }
    }
}

function undoCompletedToDo (uncheckItem){
    for (let i = 0; i < finishedToDos.length; i++) {
        if (finishedToDos[i].id == uncheckItem.id) {
            finishedToDos.splice(i, 1);

            let todo = uncheckItem.finishedToDoItem;

            let newToDo = new toDo(todo);
            todos.push(newToDo); 

            createHTML();
            finCreateHTML();
            console.log(todos);
            console.log(finishedToDos);
        }
    }
}


function deleteToDo (deleteTask){
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == deleteTask.id) {
            todos.splice(i, 1);

            createHTML();
            console.log(todos);
        }
    }
}

function deleteFinToDo (deleteTask){
    for (let i = 0; i < finishedToDos.length; i++) {
        if (finishedToDos[i].id == deleteTask.id) {
            finishedToDos.splice(i, 1);

            finCreateHTML();
            console.log(finishedToDos);

        }
    }
}

function sortToDos() { // SHUFFLE ORDER OF ARRAY + RECREATE HTML
    todos.sort(function () {
        return 0.5 - Math.random()
    });

    createHTML();
}