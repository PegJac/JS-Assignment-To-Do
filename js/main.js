class toDo {
    constructor (toDoItem){
        this.toDoItem = toDoItem;
    }
}

let todos = [];


window.onload = function () {
    //UL
    let myUl = document.createElement("ul");
    myUl.id = "myUl";
    let main = document.getElementById("main");
    main.appendChild(myUl);

    //LIST ITEMS
    let todo1 = new toDo('Tvätta');
    let todo2 = new toDo('Diska');
    let todo3 = new toDo('Duscha');

    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);

    //TEXT INPUT
    let textInput = document.getElementById("textInput");
    textInput.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addButton").click();
        }
    });

    textInput.id = textInput;

    //ADDBUTTON
    let addButton = document.getElementById("addButton").addEventListener('click', addListItem);

    createHTML();
}

function addListItem (){
    let textInput = document.getElementById("textInput");
    let newListItem = textInput.value;
    let newToDo = new toDo (newToDo);
    todos.push(newToDo);

    createHTML();
}


function createHTML (){
    //SKRIV UT LIST ITEMS - TILLDELA STÄNGKNAPPAR
    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = todos[i].toDoItem;
        myUl.appendChild(listItem);

        let closeBtn = document.createElement("button"); //skapa knapp
        closeBtn.id = "closeBtn";
        closeBtn.addEventListener('click', ()=>{listItem.remove();}); 
        listItem.appendChild(closeBtn); //lägg knapparna i li
    }
}