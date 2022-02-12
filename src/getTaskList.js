export function getTaskList() {
  let taskList = ({
    "taskCount" : 1,
    0 : {
      "title" : "task title",
      "detail" : "this is an init task",
      "deadline" : "1993-12-25",
      "isDone" : false,
    }
  });

  if (!localStorage.getItem('taskList')) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  } else {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  return taskList;
}