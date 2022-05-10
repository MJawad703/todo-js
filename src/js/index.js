const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-list-item");
  // <div></div>
  const newTodoText = document.createElement("h5");
  newTodoText.innerText = todoInput.value;
  newTodo.appendChild(newTodoText);
  // <div>New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // Check Button
  const checkButton = document.createElement("button");
  checkButton.classList.add("check-button");
  checkButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  newTodo.appendChild(checkButton);
  // delete element
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  newTodo.appendChild(deleteButton);
  todoList.appendChild(newTodo);
  todoInput.value = "";
  // <div id="todo-list">
  // <div class="todo-list-item">New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // <div class="todo-list-item">New Todo</div>
  // </div>
});

todoList.addEventListener("click", (e) => {
  const parentElement = e.target.parentElement;
  parentElement.remove();
});
