let taskIndex = 0;

function taskWord() {
  return taskIndex == 1 ? "Task" : "Tasks";
}

document.querySelector("form").addEventListener("submit", function (X) {
  X.preventDefault();
  taskIndex++;

  let task = document.createElement("div");
  let taskInput = document.querySelector("#taskInput").value;
  let taskTimestamp = Date().substring(0, 25);
  let taskCount = document.querySelector("h2");

  task.innerHTML = `
  <div class="row my-4" id="task${taskIndex}">
  <span class="m-2">${taskTimestamp}</span> 
  <div class="col-9 bg-light d-flex align-items-center p-3">
  <h4 class="m-0">${taskInput}</h4> 
  </div>
  <div class="col-3 bg-light d-flex justify-content-end align-items-center">
  <button type="button" id="edit${taskIndex}" value="${taskIndex}" class="btn btn-outline-dark me-1"><i class="bi bi-pencil-fill"></i></button>
  <button type="button" id="del${taskIndex}" value="${taskIndex}" class="btn btn-outline-dark"><i class="bi bi-trash-fill"></i></button>
  </div>
  </div>`;
  document.querySelector(".task-list").appendChild(task);
  document.querySelector("#taskInput").value = "";

  taskCount.innerHTML = `${taskIndex} ${taskWord()}`;

  document
    .querySelector("#del" + taskIndex)
    .addEventListener("click", function () {
      document.querySelector("#task" + this.value).remove();
      taskIndex--;
      taskCount.innerHTML = `${taskIndex} ${taskWord()}`;
    });

  document
    .querySelector("#edit" + taskIndex)
    .addEventListener("click", function () {
      document.querySelector("#taskInput").value = taskInput;
      document.querySelector("#taskInput").focus();
      document.querySelector("#task" + this.value).remove();
      taskCount.innerHTML = `${taskIndex} ${taskWord()}`;
    });
});



