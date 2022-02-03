import { addTask } from "./addTask.js";
import { setDeleteEvent } from "./deleteTask.js";
import { setEditEvent } from "./editTask.js";
import { getTaskElementDOM } from "./getTaskElement.js";
try {
  const $addTaskButton = document.querySelector('.addTaskButton');
  const $taskWrapper = document.querySelector('.taskWrapper');

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
      setDeleteEvent(taskDOM, taskList, id, $taskWrapper);
      $taskWrapper.appendChild(taskDOM.container);
    }
  }

  $addTaskButton.addEventListener("click", () => {
    addTask($taskWrapper, taskList);
  });
  
} catch (error) {
  console.log("error : ", error);
}