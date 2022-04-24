const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = document.createElement("div");
  newTodo.innerText = "New Todo";
  newTodo.classList.add("todo-list-item");
  todoList.appendChild(newTodo);
});
