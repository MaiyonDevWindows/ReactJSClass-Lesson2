const ToDoList = document.querySelector("ul");
const newToDo = document.createElement("li");
newToDo.textContent = "Do homework";
ToDoList.appendChild(newToDo);

const AnotherToDo = document.createElement("li");
AnotherToDo.textContent = "Pay bills";
ToDoList.insertBefore(AnotherToDo, ToDoList.firstElementChild);

const ModifierTodo = document.createElement("li");
ModifierTodo.textContent = "Feed the dog";
ToDoList.replaceChild(ModifierTodo, ToDoList.children[2]);

ToDoList.children[1].remove();