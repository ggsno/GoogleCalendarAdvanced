import { addTask } from "./addTask.js";
import { setDeleteEvent } from "./deleteTask.js";
import { setEditEvent } from "./editTask.js";
import { getTaskElementDOM } from "./getTaskElement.js";
try {
  const $taskAddButton = document.querySelector('.task-add-button');
  const $taskList = document.querySelector('.task-list');

  let taskList = ({
    "taskCount" : 1,
    0 : {
      "title" : "init",
      "detail" : "this is an init task",
      "deadline" : null
    }
  });

  if (!localStorage.getItem('taskList')) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  } else {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }

  for (let id of Object.keys(taskList)) {
    if (id !== "0" && id !== "taskCount") {
      const taskDOM = getTaskElementDOM(id);
      setEditEvent(taskDOM, taskList, id);
      setDeleteEvent(taskDOM, taskList, id, $taskList);
      $taskList.appendChild(taskDOM.container);
    }
  }

  $taskAddButton.addEventListener("click", () => {
    addTask($taskList, taskList);
  });
  
} catch (error) {
  console.log("error : ", error);
}