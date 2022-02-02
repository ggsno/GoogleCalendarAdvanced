
import { getTaskElementDOM } from "./getTaskElement.js";
import { setDeleteEvent } from "./deleteTask.js";
import { setEditEvent } from "./editTask.js";

const TOOMANYTASK = 1000;

export function addTask($taskWrapper, taskList) {
  const id = getId(taskList);
  if (id > TOOMANYTASK)
    taskOptimize();
  taskList[id] = ({
    "title" : null,
    "detail" : null,
    "deadline" : null
  });
  const taskDOM = getTaskElementDOM(id);
  setEditEvent(taskDOM, taskList, id);
  setDeleteEvent(taskDOM, taskList, id, $taskWrapper);
  $taskWrapper.appendChild(taskDOM.container);
}

function getId(taskList) {
  return (taskList.taskCount++);
}

function taskOptimize() {
  // If there are too many tasks, do optimize the list 
}
