export function getTaskElement(id) {
  const taskDOM = createTaskDOM(id);
  return taskDOM;
}

function createTaskDOM(id) {
  const $container = document.createElement("li");
  const $doneButton = document.createElement("button");
  const $title = document.createElement("input");
  const $detail = document.createElement("textarea");
  const $deadline = document.createElement("input");
  const $optionButton = document.createElement("button");

  const taskDOM = ({
    "container" : $container,
    "title" : $title,
    "detail" : $detail,
    "deadline" : $deadline,
    "doneButton" :$doneButton,
    "optionButton" : $optionButton
  });

  initTaskDOM(id, taskDOM);

  return taskDOM
}

function initTaskDOM(id, {container, title, detail, deadline, doneButton, optionButton}) {
  const $taskPreview = document.createElement("div");
  const $taskEditView = document.createElement("div");

  $taskPreview.classList.add("task-preview");
  $taskEditView.classList.add("task-edit-view");

  doneButton.innerText = "✅";
  doneButton.classList.add('task-done-button');

  title.type = "text";
  title.placeholder = "title"
  title.classList.add('task-title');

  optionButton.innerText = "👀";
  optionButton.classList.add('task-option-button');

  detail.placeholder = "detail";
  detail.classList.add('task-detail');

  deadline.type = "date";
  deadline.classList.add('task-deadline');

  if (checkListExist(id)) {
    title.value = JSON.parse(localStorage.getItem("taskList"))[id].title;
    detail.value = JSON.parse(localStorage.getItem("taskList"))[id].detail;
    deadline.value = JSON.parse(localStorage.getItem("taskList"))[id].deadline;
  }

  container.id = id;

  $taskPreview.appendChild(doneButton);
  $taskPreview.appendChild(title);
  $taskPreview.appendChild(optionButton);
  $taskEditView.appendChild(detail);
  $taskEditView.appendChild(deadline);

  container.appendChild($taskPreview);
  container.appendChild($taskEditView);
}


function checkListExist(id) {
  // It is a temporary code.
  return JSON.parse(localStorage.getItem("taskList"))[id].title;
}