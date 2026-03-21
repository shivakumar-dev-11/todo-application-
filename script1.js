let taskInput = document.getElementById("newTask");
let button = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let clearButton = document.getElementById("clearButton");

let todos = [
  { id: 1, text: "hello world" },
  { id: 2, text: "learn javascript" },
];
//read
function todosList() {
  let task = "";
  for (i = 0; i < todos.length; i++) {
    task +=
      todos[i].id +
      "." +
      todos[i].text +
      "<br>" +
      "<span><button type='button' onclick='removeTodo(" +
      todos[i].id +
      ")'>Delete</button></span>" +
      "<br>" +
      "<button onclick='editTodo(" +
      todos[i].id +
      ")'>Edit</button>";
  }
  taskList.innerHTML = task;
  taskInput.value = "";
}

//create

let editMode = false;
let editId = null;

button.onclick = function () {
  task = taskInput.value;
  if (task === "") {
    return;
  }
  if (editMode) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == editId) {
        todos[i].text = task;
      }
    }
    editMode = false;
    editId = null;
    button.innerText = "add";
  } else {
    todos.push({ id: todos.length + 1, text: task });
  }
  taskInput.value = "";
  todosList();
};
//delete
function removeTodo(id) {
  todos = todos.filter(function (subject) {
    return subject.id !== id;
  });
  todosList();
}

//update functionality
function editTodo(id) {
  editMode = true;
  editId = id;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      taskInput.value = todos[i].text;
    }
  }
  button.innerText = "save";
}
todosList();
