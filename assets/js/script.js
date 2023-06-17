//selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo div
  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  var newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //checkmark button
  var completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  var trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //append to todoDiv to todoList
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = "";
  todoInput.focus();
}

function deleteCheck(event) {
  var item = event.target;
  //delete todo
  if (item.classList[0] == "trash-btn") {
    var todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    //use transitionend event listener
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //checkmark
  if (item.classList[0] == "complete-btn") {
    var todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  var todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
