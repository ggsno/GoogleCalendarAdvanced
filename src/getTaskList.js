export function getTaskList() {
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
  return taskList;
}