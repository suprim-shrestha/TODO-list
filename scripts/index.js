var tasks = [];
const inputField = document.getElementById("input-field");
const taskForm = document.getElementById("task-form");

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => renderTasks());

const deleteIcon = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
width="35px" height="35px" viewBox="0 0 482.428 482.429"
xml:space="preserve">
<g>
<g>
 <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
   c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
   h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
   C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
   C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
   c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
   c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
   V115.744z"/>
 <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
   c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
 <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
   c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
 <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
   c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
</g>
</g>
</svg>`;

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
    li.className = "tasks__list-item";

    var buttonDiv = document.createElement("div");
    buttonDiv.className = "tasks__button";

    var completeBtn = document.createElement("button");
    completeBtn.className = "tasks__button-complete";
    completeBtn.onclick = () => {
      toggleTaskCompletion(index);
    };
    buttonDiv.appendChild(completeBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = deleteIcon;
    deleteBtn.className = "tasks__button-delete";
    deleteBtn.onclick = () => {
      deleteTask(index);
    };
    buttonDiv.appendChild(deleteBtn);

    if (taskObj.isCompleted) {
      li.className += " task--completed";
    }
    li.appendChild(buttonDiv);

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
