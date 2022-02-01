export default function createTaskElement({id, title, deadline, detail}) {
  const $taskElement = document.createElement("li");
  const $completeButton = document.createElement("button");
  const $title = document.createElement("input");
  const $detail = document.createElement("textarea");
  const $optionButton = document.createElement("button");

  // if (title === null)
  // title = "new task";
  // if (deadline === null)
  // deadline = new Date();
  // if (detail === null)
  // detail = "";
  
  $completeButton.innerText = "complete";
  $title.type = "text";
  $title.placeholder = ""
  $detail.innerText = detail;
  $optionButton.innerText = "option";
  
  $taskElement.id = id;
  $taskElement.appendChild($completeButton);
  $taskElement.appendChild($title);
  $taskElement.appendChild($detail);
  $taskElement.appendChild($optionButton);
  
  return ($taskElement);
}
