//selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click', addTodo)



//functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo div
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkmark button
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //trash button
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to todoDiv to todoList
    todoList.appendChild(todoDiv);
}