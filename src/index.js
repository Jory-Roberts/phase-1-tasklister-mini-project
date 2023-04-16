// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

let taskObjArr = [];
//get the form and add event listener
const addingEventListeners = () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target.priority.value);

  const taskObj = { task, priorityLevel };
  taskObjArr.push(taskObj);

  console.log(taskObjArr);

  displayTask(task, priorityLevel);
  
  
};

const displayTask = (task, priorityLevel) => {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);

  taskLi.textContent = task + " ";
  taskLi.style.color = getPriorityColor(priorityLevel);
  taskUl.appendChild(taskLi);
  taskLi.appendChild(deleteBtn);
};



const deleteTask = (e) => e.target.parentNode.remove();

const getPriorityColor = (priorityLevel) => {
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "blue";
  } else if (priorityLevel === 3) return "green";
};

// const sortTasks = () => {
//   const sortTasksSelect = document.getElementById("sort-tasks");
//   if (sortTasksSelect.value === "h-l") {
//     taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel);
//   } else {
//     taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel);
//   }
  
//   displayTasks();
// };

