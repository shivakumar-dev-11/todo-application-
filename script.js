var tasks = [
  { id: 1, name: "Learn HTML" },
  { id: 2, name: "Learn CSS" },
];

var nextId = 3;

var input = document.getElementById("new-task");
var button = document.getElementById("add-task-button");
var list = document.getElementById("task-list");

function showTasks() {
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.innerText = tasks[i].name + " [ID: " + tasks[i].id + "]";
    list.appendChild(li);
  }
}

function addTask() {
  var text = input.value;

  if (text === "") {
    return;
  }

  var newTask = {
    id: nextId,
    name: text,
  };

  tasks.push(newTask);
  nextId = nextId + 1;

  input.value = "";
  showTasks();
}

button.onclick = addTask;

showTasks();
