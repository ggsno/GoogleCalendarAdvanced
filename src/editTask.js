export function setEditEvent(taskDOM, taskList, id) {
  taskDOM.title.addEventListener("focusout", (event) => {
    if (taskList[id]) {
      taskList[id]["title"] = event.currentTarget.value;
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
    if (taskList[id]["detail"] === "") {
      taskDOM.detail.style = "display:none";
    }
  });
  taskDOM.title.addEventListener("click", () => {
    taskDOM.title.select();
    taskDOM.detail.style = "display:block";
  });

  taskDOM.detail.addEventListener("focusout", (event) => {
    if (event.currentTarget.value !== "") {
      taskList[id]["detail"] = event.currentTarget.value;
      localStorage.setItem("taskList", JSON.stringify(taskList));
      taskDOM.detail.style = "display:block";
    }
    
  });
  taskDOM.deadline.addEventListener("change", (event) => {
    taskList[id]["deadline"] = event.currentTarget.value;
    localStorage.setItem("taskList", JSON.stringify(taskList));
  });
}