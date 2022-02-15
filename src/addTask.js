const TOOMANYTASK = 1000;

export function addTask(taskList) {
  const id = getId(taskList);
  if (id > TOOMANYTASK)
    taskOptimize();
  taskList[id] = ({
    "title" : null,
    "detail" : "",
    "deadline" : null,
    "isDone" : null,
  });
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function getId(taskList) {
  return (taskList.taskCount++);
}

function taskOptimize() {
  // If there are too many tasks, do optimize the list 
}

