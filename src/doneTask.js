import { renderTaskList } from "./renderTaskList.js";

export function setDoneEvent(taskDOM, taskList, id, $taskList) {
  taskDOM.doneButton.addEventListener("click", (event) => {
    taskList[id].isDone = true;
    renderTaskList($taskList, taskList);
  });
}
