let taskInput = document.getElementById("newTask");
let button = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let clearButton = document.getElementById("clearButton");

let todos = [
  { id: 1, text: "hello world" },
  { id: 2, text: "learn javascript" },
];
function todosList() {
  let task = "";
  for (i = 0; i < todos.length; i++) {
    task += todos[i].id + "." + todos[i].text + "<br>";
  }
  taskList.innerHTML = task;
  taskInput.value = "";
}
button.onclick = function () {
  task = taskInput.value;
  if (task === "") {
    return;
  }

  todos.push({ id: todos.length + 1, text: task });
  taskInput.value = "";
  todosList();
};
clearButton.onclick = function () {
  todos = [
    { id: 1, text: "hello world" },
    { id: 2, text: "learn javascript" },
  ];
  todosList();
};

todosList();
