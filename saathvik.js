let todos = [
  { id: 1, todo: `Morning Cardio` },
  { id: 2, todo: `Go to college` },
];

input = document.getElementById(`todoInput`);
todoList = document.getElementById(`todoList`);
addBtn = document.getElementById(`addBtn`);
clearBtn = document.getElementById(`clearBtn`);

editMode = false;
editId = null;

function showTodo() {
  let html = ``;
  for (let i = 0; i < todos.length; i++) {
    html += `<div>
                    <span onclick="markAsDone(${todos[i].id})">${todos[i].id}.${todos[i].todo}</span>
                    <button class="btn" onclick="editBtn(${todos[i].id})">Edit</button>
                    <button class="btn" onclick="deleteBtn(${todos[i].id})">Delete</button>
                    <br>
                </div>`;
  }
  todoList.innerHTML = html;
}

addBtn.onclick = function () {
  let newTodo = input.value;

  if (editMode) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == editId) {
        todos[i].todo = newTodo;
      }
      input.value = "";
      editMode = false;
      editId = null;
      document.getElementById(`addBtn`).innerText = `Add`;
      input.style.backgroundColor = "black";
    }
  } else {
    todos.push({ id: todos.length + 1, todo: newTodo });
    input.value = "";
  }

  showTodo();
};

clearBtn.onclick = function () {
  todos = [];
  showTodo();
};

function deleteBtn(id) {
  todos = todos.filter(function (item) {
    return item.id !== id;
  });
  showTodo();
}

function editBtn(id) {
  editMode = true;
  editId = id;
  for (let i = 0; i < todos.length; i++) {
    input.style.backgroundColor = "#f0f0f05b";
    if (todos[i].id == id) {
      input.value = todos[i].todo;
    }
  }
  document.getElementById(`addBtn`).innerText = `Save`;
  showTodo();
}

function markAsDone(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].todo = `<s>${todos[i].todo}</s>`;
    }
  }
  showTodo();
}

showTodo();
