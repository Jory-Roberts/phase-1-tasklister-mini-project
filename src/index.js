// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {});

const taskForm = document.querySelector("#create-task-form");

const taskList = document.querySelector("#tasks");

//submit on form to add item to list
taskForm.addEventListener("submit", function (event) {
  // suppressing event to keep form from reloading page
  event.preventDefault();

  //query selector by Id
  const newTask = document.querySelector("#new-task-description").value;

  //updating tasklist with innerHTML method
  taskList.innerHTML += `<li> ${newTask} 
  <button data-action = "delete" > X </button>
  </li>`;

  //Reset texxfield to blank space to add next item to list
  taskForm.reset();
});

//Click event that deletes task from list when x btn is clicked
taskList.addEventListener("click", function (e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
});
