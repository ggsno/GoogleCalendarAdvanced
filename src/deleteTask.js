
export function setDeleteEvent(taskDOM, taskList, id, $taskWrapper)
{
  taskDOM.title.addEventListener("keydown", (event) => {
    if (event.currentTarget.value === "" && event.key === "Backspace")
      deleteTask(taskList,id, taskDOM, $taskWrapper);
  });
}

function deleteTask(taskList, id, taskDOM, taskWrapper) {
  if (delete taskList[id])
    console.log("delete success !!!");
  else
    console.log("something wrong !!!");
  taskWrapper.removeChild(taskDOM.container);
}

