document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("taskForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      var titleInput = document.getElementById("taskTitle");
      var descriptionInput = document.getElementById("taskDescription");
      
      var title = titleInput.value.trim();
      var description = descriptionInput.value.trim();
      
      if (title !== "" && description !== "") {
        addTask(title, description);
        titleInput.value = "";
        descriptionInput.value = "";
      } else {
        alert("Please fill in both title and description.");
      }
    });
  
    document.getElementById("taskList").addEventListener("click", function(event) {
      if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
      }
    });
  });
  
  function addTask(title, description) {
    var taskList = document.getElementById("taskList");
  
    var li = document.createElement("div");
    li.classList.add('task');
    var titleElement = document.createElement("div");
    titleElement.classList.add('task1');
    var descriptionElement = document.createElement("div");
    var deleteButton = document.createElement("button");
    deleteButton.classList.add('task2');
  
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
  
    li.appendChild(titleElement);
    li.appendChild(descriptionElement);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }