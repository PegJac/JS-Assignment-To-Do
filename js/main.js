class toDo {
    constructor (toDoItem){
        this.id = x++;
        this.toDoItem = toDoItem;
    }
}
//array todos
let todos = [];
todos.id = "todos";

//array id
let x = 1;


window.onload = function (){
    //UL
    let myUl = document.createElement("ul");
    myUl.id = "myUl";
    let main = document.getElementById("main");
    main.appendChild(myUl);

    //LIST ITEMSgit
    let todo1 = new toDo('To do 1');
    let todo2 = new toDo('To do 2');
    let todo3 = new toDo('To do 3');

    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);

    console.log(todos);

    //TEXT INPUT
    let textInput = document.getElementById("textInput");
    textInput.id = "textInput";

    textInput.addEventListener("keyup", function(event){
        if (event.keyCode === 13){
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

    if (newListItem == ""){
        alert("Du måste skriva något!");
    }

    else {
        let newToDo = new toDo (newListItem);
        todos.push(newToDo);
        document.getElementById("textInput").value = "";

        createHTML();
    }
}

//SKRIV UT LIST ITEMS - TILLDELA STÄNGKNAPPAR
function createHTML (){
    myUl.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = todos[i].toDoItem;
        myUl.appendChild(listItem);

        let closeBtn = document.createElement("button"); //skapa stäng knapp
        let checkBtn = document.createElement("button"); //skapa check knapp
        closeBtn.id = "closeBtn";
        checkBtn.id = "checkBtn";
        //closeBtn.addEventListener('click', ()=>{listItem.remove();}); 
        closeBtn.addEventListener('click', ()=>{deleteItem(todos[i])});
        checkBtn.addEventListener('click', finishedItem);
        listItem.appendChild(checkBtn);
        listItem.appendChild(closeBtn); //lägg knapparna i li
    }
}

function deleteItem (itemToBeDeleted){
    
    todos.splice(itemToBeDeleted, 1);
}

function finishedItem (){
    alert("klar-knappen funkar :-)");

}