class toDo {
    constructor (toDoItem){
        this.toDoItem = toDoItem;
    }
}

//array todos
let todos = [];

window.onload = function (){
    //UL
    let myUl = document.createElement("ul");
    myUl.id = "myUl";
    let main = document.getElementById("main");
    main.appendChild(myUl);

    //LIST ITEMSgit
    let todo1 = new toDo('Tvätta');
    let todo2 = new toDo('Diska');
    let todo3 = new toDo('Duscha');
    let todo4 = new toDo('Bädda');

    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);
    todos.push(todo4);

    //TEXT INPUT
    let textInput = document.getElementById("textInput");
    textInput.id = "textInput";

    textInput.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addButton").click();
        }
    });

    //ADDBUTTON
    let addButton = document.getElementById("addButton").addEventListener('click', createListItem);

    createHTML();
}

//SKAPA NYTT LIST ITEM
function createListItem (){
    let newListItem = document.getElementById("textInput").value;
    let newToDo = new toDo (newListItem);
    todos.push(newToDo);

    createHTML();
}

//SKRIV UT LIST ITEMS - TILLDELA STÄNGKNAPPAR
function createHTML (){
    myUl.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = todos[i].toDoItem;
        myUl.appendChild(listItem);

        let closeBtn = document.createElement("button"); //skapa knapp
        closeBtn.id = "closeBtn";
        closeBtn.addEventListener('click', closeFunction); 
        listItem.appendChild(closeBtn); //lägg knapparna i li
    }
}

preventDefault

function closeFunction (){
    console.log("hej");
}