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

let finishedToDos = [];
finishedToDos.id = "finishedToDos";


window.onload = function () {

    //UL
    let myUl = document.createElement("ul");
    myUl.id = "myUl";
    let main = document.getElementById("main").appendChild(myUl);

    //FINISHED UL
    let finishedUl = document.createElement("ul");
    finishedUl.id = "finishedUl";
    let finished = document.getElementById("finished");
    finished.appendChild(finishedUl);

    //LIST ITEMS
    let todo1 = new toDo('Tvätta');
    let todo2 = new toDo('Damsuga');
    let todo3 = new toDo('Handla');
    let todo4 = new toDo('Diska');
    let todo5 = new toDo('Panta');
    let todo6 = new toDo('Plugga');

    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);
    todos.push(todo4);
    todos.push(todo5);
    todos.push(todo6);

    console.log(todos);


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

        let closeBtn = document.createElement("button"); //skapa stäng knapp
        let checkBtn = document.createElement("button"); //skapa check knapp
        closeBtn.id = "closeBtn";
        closeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        checkBtn.id = "checkBtn";
        checkBtn.innerHTML = '<i class="far fa-check-circle"></i>';
        closeBtn.addEventListener('click', () => { deleteItem(todos[i]) });
        checkBtn.addEventListener('click', () => { completeItem(todos[i]) });
        listItem.appendChild(checkBtn);
        listItem.appendChild(closeBtn); //lägg knapparna i li
    }
}

function deleteItem(itemToBeDeleted) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == itemToBeDeleted.id) {
            let splicedItem = todos.splice(i, 1);

            createHTML();
            //moveDown();
        }
    }
}

function moveDown() {
    finishedUl.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        listItem.id = "listItem";
        listItem.innerHTML = finishedUl[i];
        myUl.appendChild(listItem);
    }
}

function completeItem(itemToBeChecked) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == itemToBeChecked.id) {
            let listItem = document.getElementsByName("listItem");

            i.listItem.className = "lineThrough";
        }
    }
}

function sortToDos() {
    todos.sort(function () {
        return 0.5 - Math.random()
    });

    createHTML();
    console.log(todos);
}


/*


För betyg G:
X Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter)
X Presentera denna på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
X Implementera klickhändelse för att hantera borttagandet av en todo.
X Todo tas bort från skärmen och markeras som klar i listan.
X Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. bootstrap, flex eller liknande.

För betyg VG:
X Alla punkter under G
• Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
X Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
• Kunna sortera ordningen på dina todos


*/