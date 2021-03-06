import { setDeleteEvent } from "./deleteTask.js";
import { setDoneEvent } from "./doneTask.js";
import { setEditEvent } from "./editTask.js";
import { getTaskElement } from "./getTaskElement.js";

export function renderTaskList($taskList, taskList) {
  while ($taskList.hasChildNodes()) {
    $taskList.removeChild($taskList.firstChild);
  }
  for (let id of Object.keys(taskList)) {
    if (id === "0" || id === "taskCount" || taskList[id].isDone === true)
      continue;
    const taskDOM = getTaskElement(id);
    setDoneEvent(taskDOM,taskList, id, $taskList);
    setEditEvent(taskDOM, taskList, id);
    setDeleteEvent(taskDOM, taskList, id, $taskList);
    if (taskList[id].detail)
      taskDOM.detail.style = "display:block";
    $taskList.appendChild(taskDOM.container);
  }
}
