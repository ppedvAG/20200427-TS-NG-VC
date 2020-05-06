"use strict";
function login(u) {
    return "Hello" + u;
}
let user = document.getElementById('user').value;
document.getElementById('hi').textContent = login(user);
