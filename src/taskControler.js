import { addTask } from "./addTask.js";
import { getTaskList } from "./getTaskList.js";
import { renderTaskList } from "./renderTaskList.js";
try {
  const $taskAddButton = document.querySelector('.task-add-button');
  const $taskList = document.querySelector('.task-list');
  const taskList = getTaskList();

  renderTaskList($taskList, taskList);

  $taskAddButton.addEventListener("click", () => {
    addTask(taskList);
    renderTaskList($taskList, taskList);
  });
} catch (error) {
  console.log("error : ", error);
}