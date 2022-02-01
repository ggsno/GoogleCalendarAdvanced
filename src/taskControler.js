import createTaskElement from "./createTaskElement.js";

const $button = document.querySelector('.addTaskButton');
const $taskList = document.querySelector('.taskList');

class taskInfo {
  constructor(id, title, deadline, detail) {
    this.id = id;
    this.title = title;
    this.deadline = deadline;
    this.detail = detail;
  }
}

const taskList = [];

try {
  $button.addEventListener("click", () => {
    const newTask = new taskInfo(0,"title", "deadline", "detail");
    addTask($taskList, newTask);
  });
  
} catch(error) {
  console.log("error : ", error);
}

function addTask($taskList, taskInfo) {
  const $taskElement = createTaskElement(taskInfo);
  $taskList.appendChild($taskElement);
  taskList.push(taskInfo.id);
}