
export function setDeleteEvent(taskDOM, taskList, id, $taskWrapper)
{
  taskDOM.title.addEventListener("keydown", (event) => {
    if (event.currentTarget.value === "" && event.key === "Backspace")
    {
      deleteTask(taskList,id, taskDOM, $taskWrapper);
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  });
}

function deleteTask(taskList, id, taskDOM, taskWrapper) {
  if (delete taskList[id])
  {
    taskWrapper.removeChild(taskDOM.container);
    console.log("delete success !!!");
  }
  else
    console.log("something wrong !!!");
  
}

