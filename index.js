var tasks = [];
const inputField = document.getElementById("input-field");
const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

const addTask = () => {
  let taskValue = inputField.value;
  if (taskValue.trim() !== "") {
    tasks.push({ task: taskValue, isCompleted: false });
    inputField.value = "";
    // console.log(tasks);
    renderTasks();
  }
};

const renderTasks = () => {
  renderAllTasks();
  renderCompletedTasks();
  renderIncompleteTasks();
};

const addToList = (taskObj, index, taskList) => {
  var li = document.createElement("li");
  li.textContent = taskObj.task;

  var radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.name = "taskStatus";
  radioBtn.checked = taskObj.isCompleted;
  radioBtn.onclick = () => {
    toggleTaskCompletion(index);
  };
  li.appendChild(radioBtn);

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
};

const renderAllTasks = () => {
  var taskList = document.getElementById("all-task-list");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    addToList(taskObj, index, taskList);
  });
};

const renderCompletedTasks = () => {
  var taskList = document.getElementById("completed-task-list");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    if (taskObj.isCompleted) {
      addToList(taskObj, index, taskList);
    }
  });
};

const renderIncompleteTasks = () => {
  var taskList = document.getElementById("incomplete-task-list");
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
  //   console.log(tasks);
};

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
