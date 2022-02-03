export function getTaskElementDOM(id) {
  const $taskElement = document.createElement("li");
  const $doneButton = document.createElement("button");
  const $title = document.createElement("input");
  const $detail = document.createElement("textarea");
  const $deadline = document.createElement("input");
  const $optionButton = document.createElement("button");
  $doneButton.innerText = "done";
  $title.type = "text";
  $deadline.type = "date";
  $optionButton.innerText = "option";
  $title.placeholder = "title"
  $detail.placeholder = "detail";
  if (JSON.parse(localStorage.getItem("taskList"))[id].title) {
    $title.value = JSON.parse(localStorage.getItem("taskList"))[id].title;
    $detail.value = JSON.parse(localStorage.getItem("taskList"))[id].detail;
    $deadline.value = JSON.parse(localStorage.getItem("taskList"))[id].deadline;
  }
  
  $taskElement.id = id;
  $taskElement.appendChild($doneButton);
  $taskElement.appendChild($title);
  $taskElement.appendChild($detail);
  $taskElement.appendChild($deadline);
  $taskElement.appendChild($optionButton);
  
  const taskDOM = ({
    "container" : $taskElement,
    "title" : $title,
    "detail" : $detail,
    "deadline" : $deadline,
    "doneButton" :$doneButton,
    "optionButton" : $optionButton
  });

  return (taskDOM);
}