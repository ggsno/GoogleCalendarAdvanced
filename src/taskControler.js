import {addTask} from "./addTask.js";

const $addTaskButton = document.querySelector('.addTaskButton');
const $taskWrapper = document.querySelector('.taskWrapper');

const taskList = ({
  "taskCount" : 1,
  0 : {
    "title" : "init",
    "detail" : "this is an init task",
    "deadline" : null
  }
});

try {
  $addTaskButton.addEventListener("click", () => {
    addTask($taskWrapper, taskList);
  });
  
} catch (error) {
  console.log("error : ", error);
}