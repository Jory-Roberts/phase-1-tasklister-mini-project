// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  //Input Id's
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  const newTaskUl = document.getElementById("tasks");

  //attach event listeners to DOM contents
  newTaskForm.addEventListener("submit", () => {
    createNewTask(event, newTaskDescription);
    //clear input field
    newTaskForm.reset();
  });
});

const createNewTask = (event, newTaskDescription) => {
  //orevent form from refreshing when submit event occurs
  event.preventDefault();
  //create new li element where tasks will live
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  //new task appended to li
  appendNewTask(newTask);

  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.addEventListener("click", (event) => {
    //delete task from li DOM element
    event.target.parentNode.remove();
  });

  newTask.appendChild(deleteButton);
};

const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};

//Generate Random Color

const random = (number) => {
  return Math.floor(Math.random() * (number * 1));
};

const changeColorButton = document.createElement("button");
changeColorButton.textContent = "Change Color";
changeColorButton.classList = "color-change";

changeColorButton.addEventListener("click", () => {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}`;

  changeColorButton.style.backgroundColor = randomColor;
});

document.getElementById("main-content").appendChild(changeColorButton);

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
