//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

const taskInput = document.getElementById("new-task"); //new-task
const addButton = document.getElementsByTagName("button")[0]; //first button
const incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
const completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

let TASKS = [
  {
    text:"Pay Bills",
    status:false
  },
  {
    text:"See the doctor",
    status:true
  }
];

//Add a new task
const addTask = function() {
  console.log("Add task...");
  let text = taskInput.value;
  
  //When the button is pressed
  //Create a new list item with the text from #new-task:
  //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
}

//Edit an existing task
const editTask = function() {
  console.log("Edit task...");
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text
    
    //Toggle .editMode on the parent
}

//Delete an existing task
const deleteTask = function() {
  console.log("Delete task...");
  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
const taskCompleted = function() {
  console.log("Task complete...");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
const taskIncomplete = function() {
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

addButton.addEventListener('click', addTask);








