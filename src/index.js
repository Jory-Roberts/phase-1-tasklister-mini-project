// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

//get the form and add event listener
const addingEventListeners = () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const task = e.target[0].value;

  displayTask(task);
};

const displayTask = (task) => {
  const taskUl = document.getElementById("tasks");
  const taskLi = document.createElement("li");
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask);

  taskLi.textContent = task + " ";
  taskUl.appendChild(taskLi);
  taskLi.appendChild(deleteBtn);
};

const deleteTask = (e) => e.target.parentNode.remove();



// function sortTasks() {
//   const sortTasksSelect = document.getElementById("sort-tasks");
//   if (sortTasksSelect.value === "h-l") {
//     taskArr.sort((a, b) => a.priorityLevel - b.priorityLevel);
//   } else {
//     taskArr.sort((a, b) => b.priorityLevel - a.priorityLevel);
//   }
//   displayTasks();
// }

// newTaskForm.addEventListener("click", function (e) {
//   if (e.target.dataset.action === "delete") {
//     e.target.parentElement.remove();
//   }
// });

//submit on form to add item to list
// newTaskForm.addEventListener("submit", function (event) {
//   // suppressing event to keep form from reloading page
//   event.preventDefault();

//   //query selector by Id
//   const newTask = document.querySelector("#new-task-description").value;

//   //updating tasklist with innerHTML method
//   newTaskDescription.innerHTML += `<li> ${newTask}
//   <button data-action = "delete" > Remove </button>
//   </li>`;

//   //Reset textfield to blank space to add next item to list
//   taskForm.reset();
// });

//Click event that deletes task from list when x btn is clicked
// newTaskForm.addEventListener("click", function (e) {
//   if (e.target.dataset.action === "delete") {
//     e.target.parentElement.remove();
//   }
// });

//Input Id's
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");

//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners to DOM contents
//   newTaskForm.addEventListener("submit", () => {
//     createNewTask(event, newTaskDescription);
//     //clear input field
//     newTaskForm.reset();
// });
// });

// const createNewTask = (event, newTaskDescription) => {
//   //prevent form from refreshing when submit event occurs
//   event.preventDefault();
//   //create new li element where tasks will live
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   //new task appended to li
//   appendNewTask(newTask);

//   //create delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";

//   deleteButton.addEventListener("click", (event) => {
//     //delete task from li
//     event.target.parentNode.remove();
//   });

//   newTask.appendChild(deleteButton);
// };

// const appendNewTask = (task) => {
//   document.getElementById("tasks").appendChild(task);
// };

// //Generate Random Color

// const random = (number) => {
//   return Math.floor(Math.random() * (number * 1));
// };

// const changeColorButton = document.createElement("button");
// changeColorButton.textContent = "Change Color";
// changeColorButton.classList = "color-change";

// changeColorButton.addEventListener("click", () => {
//   const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}`;

//   changeColorButton.style.backgroundColor = randomColor;
// });

// document.getElementById("main-content").appendChild(changeColorButton);
