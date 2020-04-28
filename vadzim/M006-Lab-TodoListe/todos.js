"use strict";
// interface Todo
// Type Checking
// tabelle
// tabellenInhalt mit TS erzeugen
let tbodyId = document.getElementById('tabellenInhalt');
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => renderTodos(json));
function renderTodos(todos) {
    for (const todo of todos) {
        let newRow = tbodyId.insertRow();
        /* document.createElement('tr') */
        newRow.insertCell().innerText = String(todo.id);
        newRow.insertCell().innerText = String(todo.userId);
        newRow.insertCell().innerText = String(todo.title);
        newRow.insertCell().innerText = String(todo.completed);
        if (todo.completed) {
            newRow.style.textDecoration = 'line-through';
        }
    }
}
