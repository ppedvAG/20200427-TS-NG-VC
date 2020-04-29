// Interface
// tabelle
// type checking




let tabBody = <HTMLTableElement>document.getElementById("tabInhalt");

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => renderTodos(json))


function renderTodos(todos: Array<todo>) {

    for (const todo of todos) {
        let newRow = tabBody!.insertRow()
        /* document.createElement('tr') */
        newRow.insertCell().innerText = String(todo.id);
        newRow.insertCell().innerText = String(todo.userId);
        newRow.insertCell().innerText = todo.title;
        newRow.insertCell().innerText = String(todo.completed);
        if (todo.completed) {
            newRow.style.textDecoration = 'line-through'
        }
    }
}