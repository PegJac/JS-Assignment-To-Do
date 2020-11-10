class toDo {
    constructor (toDoItem){
        this.toDoItem = toDoItem;
    }
}

window.onload = function () {

    let todo1 = new toDo('to do 1');
    let todo2 = new toDo('to do 2');
    let todo3 = new toDo('to do 3');
    let todos = [todo1, todo2, todo3];

for (let i = 0; i < todos.length; i++) {
    let pTag = document.createElement("p");
    pTag.innerHTML = todos[i].toDoItem;

    document.body.appendChild(pTag);
}
}