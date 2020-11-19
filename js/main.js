class toDo {
    constructor(toDoItem) {
        this.id = x++;
        this.toDoItem = toDoItem;
    }
}
//array todos
let todos = [];
todos.id = "todos";
//array items id
let x = 1;

window.onload = function () {

    //UL
    let myUl = document.createElement("ul");
    myUl.id = "myUl";
    let main = document.getElementById("main").appendChild(myUl);

    //LIST ITEMS
    let todo1 = new toDo('Tvätta');
    let todo2 = new toDo('Damsuga');
    let todo3 = new toDo('Handla');
    let todo4 = new toDo('Panta');
    let todo5 = new toDo('Plugga');

    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);
    todos.push(todo4);
    todos.push(todo5);

    //ADD BUTTON
    let addButton = document.getElementById("addButton").addEventListener('click', createListItem);

    //SORT BUTTON
    let sortButton = document.getElementById("sortButton").addEventListener('click', sortToDos);

    //TEXT INPUT
    let textInput = document.getElementById("textInput");
    textInput.id = "textInput";

    createHTML();
}

//SKAPA NYTT LIST ITEM
function createListItem() {
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

//SKRIV UT LIST ITEMS - TILLDELA STÄNGKNAPPAR
function createHTML() {
    myUl.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = todos[i].toDoItem;
        myUl.appendChild(listItem);

        let closeBtn = document.createElement("button");
        closeBtn.id = "closeBtn";
        closeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        closeBtn.addEventListener('click', () => { deleteItem(todos[i]) });
        listItem.appendChild(closeBtn);
    }
}

function deleteItem(itemToBeDeleted) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == itemToBeDeleted.id) {
            let splicedItem = todos.splice(i, 1);

            createHTML();
        }
    }
}

function sortToDos() {
    todos.sort(function () {
        return 0.5 - Math.random()
    });

    createHTML();
}