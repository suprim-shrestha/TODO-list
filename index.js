var tasks = [];
const inputField = document.getElementById("input-field");
const taskForm = document.getElementById("task-form");

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => renderTasks());

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

const addTask = () => {
  let taskValue = inputField.value;
  if (taskValue.trim() !== "") {
    tasks.push({ task: taskValue, isCompleted: false });
    inputField.value = "";
    renderTasks();
  }
};

const renderTasks = () => {
  renderAllTasks();
  renderCompletedTasks();
  renderIncompleteTasks();
};

const addToList = (taskObj, index, taskList) => {
  var searchText = searchInput.value.toLowerCase();
  if (taskObj.task.toLowerCase().includes(searchText)) {
    var li = document.createElement("li");
    li.textContent = taskObj.task;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObj.isCompleted;
    checkbox.onclick = () => {
      toggleTaskCompletion(index);
    };
    li.appendChild(checkbox);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      deleteTask(index);
    };
    li.appendChild(deleteBtn);

    if (taskObj.isCompleted) {
      li.style.textDecoration = "line-through";
    }

    taskList.appendChild(li);
  }
};

const renderAllTasks = () => {
  var taskList = document.getElementById("all-tasks-list");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    addToList(taskObj, index, taskList);
  });
};

const renderCompletedTasks = () => {
  var taskList = document.getElementById("completed-tasks-list");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    if (taskObj.isCompleted) {
      addToList(taskObj, index, taskList);
    }
  });
};

const renderIncompleteTasks = () => {
  var taskList = document.getElementById("incomplete-tasks-list");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    if (!taskObj.isCompleted) {
      addToList(taskObj, index, taskList);
    }
  });
};

const toggleTaskCompletion = (index) => {
  tasks[index].isCompleted = !tasks[index].isCompleted;
  renderTasks();
};

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
