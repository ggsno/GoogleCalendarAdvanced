export function setEditEvent(taskDOM, taskList, id) {
  taskDOM.title.addEventListener("focusout", (event) => {
    if (taskList[id])
      taskList[id]["title"] = event.currentTarget.value;
  });
  taskDOM.detail.addEventListener("focusout", (event) => {
    taskList[id]["detail"] = event.currentTarget.value;
  });
  taskDOM.deadline.addEventListener("change", (event) => {
    taskList[id]["deadline"] = event.currentTarget.value;
  });
  taskDOM.doneButton.addEventListener("click", (event) => {
    const isDone = taskDOM.container.classList.toggle("done");
    if (isDone) {
      taskDOM.doneButton.innerText = "undo";
      taskDOM.title.readOnly = true;
      taskDOM.title.style = "background-color:gray"
      console.log("done");
    } else {
      taskDOM.doneButton.innerText = "done";
      taskDOM.title.readOnly = false;
      taskDOM.title.style = "background-color:white"
      console.log("undo");
    }
  })
}