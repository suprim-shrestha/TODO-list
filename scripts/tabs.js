const allTasks = document.getElementById("all-tasks");
const completedTasks = document.getElementById("completed-tasks");
const incompleteTasks = document.getElementById("incomplete-tasks");
const allTasksTop = document.getElementById("all-tasks-top");
const completedTasksTop = document.getElementById("completed-tasks-top");
const incompleteTasksTop = document.getElementById("incomplete-tasks-top");

allTasksTop.addEventListener("click", () => {
  allTasks.style.display = "block";
  completedTasks.style.display = "none";
  incompleteTasks.style.display = "none";
  allTasksTop.style.boxShadow = "0px 40px 30px -30px rgba(0,0,0,0.5) inset";
  completedTasksTop.style.boxShadow = "none";
  incompleteTasksTop.style.boxShadow = "none";
});
completedTasksTop.addEventListener("click", () => {
  allTasks.style.display = "none";
  completedTasks.style.display = "block";
  incompleteTasks.style.display = "none";
  allTasksTop.style.boxShadow = "none";
  completedTasksTop.style.boxShadow =
    "0px 40px 30px -30px rgba(0,0,0,0.5) inset";
  incompleteTasksTop.style.boxShadow = "none";
});
incompleteTasksTop.addEventListener("click", () => {
  allTasks.style.display = "none";
  completedTasks.style.display = "none";
  incompleteTasks.style.display = "block";
  allTasksTop.style.boxShadow = "none";
  completedTasksTop.style.boxShadow = "none";
  incompleteTasksTop.style.boxShadow =
    "0px 40px 30px -30px rgba(0,0,0,0.5) inset";
});
