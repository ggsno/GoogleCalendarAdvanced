import { setDeleteEvent } from "./deleteTask.js";
import { setDoneEvent } from "./doneTask.js";
import { setEditEvent } from "./editTask.js";
import { getTaskElementDOM } from "./getTaskElement.js";

export function renderTaskList($taskList, taskList) {
  while ($taskList.hasChildNodes()) {
    $taskList.removeChild($taskList.firstChild);
  }
  for (let id of Object.keys(taskList)) {
    if (id === "0" || id === "taskCount" || taskList[id].isDone === true)
      continue;
    const taskDOM = getTaskElementDOM(id);
    setDoneEvent(taskDOM,taskList, id, $taskList);
    setEditEvent(taskDOM, taskList, id);
    setDeleteEvent(taskDOM, taskList, id, $taskList);
    $taskList.appendChild(taskDOM.container);
  }
}
