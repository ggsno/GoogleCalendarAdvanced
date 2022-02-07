export function getTaskElementDOM(id) {
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
  doneButton.innerText = "done";
  doneButton.classList.add('done-button');
  title.type = "text";
  deadline.type = "date";
  optionButton.innerText = "option";
  title.placeholder = "title"
  detail.placeholder = "detail";
  if (checkListExist(id)) {
    title.value = JSON.parse(localStorage.getItem("taskList"))[id].title;
    detail.value = JSON.parse(localStorage.getItem("taskList"))[id].detail;
    deadline.value = JSON.parse(localStorage.getItem("taskList"))[id].deadline;
  }
  
  container.id = id;
  container.appendChild(doneButton);
  container.appendChild(title);
  container.appendChild(detail);
  container.appendChild(deadline);
  container.appendChild(optionButton);
}

function checkListExist(id) {
  // It is a temporary code.
  return JSON.parse(localStorage.getItem("taskList"))[id].title;
}