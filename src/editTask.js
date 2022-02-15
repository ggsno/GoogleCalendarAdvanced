export function setEditEvent(taskDOM, taskList, id) {
  
  taskDOM.title.addEventListener("focusout", (event) => {
    if (taskList[id]) {
      taskList[id]["title"] = event.currentTarget.value;
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  });
  taskDOM.title.addEventListener("click", () => {
    taskDOM.title.select();
    taskDOM.detail.style.display = "block";
    taskDOM.deadline.style.display = "block";
  });

  taskDOM.detail.addEventListener("keydown", () => {
    taskDOM.detail.style.height = "0px";
    taskDOM.detail.style.height = (taskDOM.detail.scrollHeight) + "px";
  })

  taskDOM.detail.addEventListener("focusout", (event) => {
    taskList[id]["detail"] = event.currentTarget.value;
    localStorage.setItem("taskList", JSON.stringify(taskList));
    taskDOM.detail.style.display = "block";
    if (taskList[id]["detail"] === "") {
      taskDOM.detail.style.display = "none";
    }
    taskDOM.deadline.style.display = "none";
  });

  taskDOM.deadline.addEventListener("change", (event) => {
    taskList[id]["deadline"] = event.currentTarget.value;
    localStorage.setItem("taskList", JSON.stringify(taskList));
  });
}