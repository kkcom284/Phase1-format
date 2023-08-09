const addli = document.getElementsByClassName("addli")[0];
const addbtn = document.getElementsByClassName("add-btn")[0];
const lists = document.getElementsByClassName("lists")[0];
const todo = document.getElementById("todo");

const addTasks = (task) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = task;
  todo.appendChild(listItem);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  todo.removeChild(chosenTask);
};

addbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const taskValue = document.getElementById("add-area");
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
});
