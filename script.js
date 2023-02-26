//Selecting + Add Button.
const addTaskBtn = document.querySelector(".add-task");
addTaskBtn.addEventListener("click", addToList);

function addToList(){

  //Selecting UL
  let taskList = document.querySelector(".task-list");
  //Now Creating Nested Div and other Elements 
  //------------------//
  //------------Container DIV------------//
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container", "glass");
  //------------Completed Icon------------//
  let completeIcon = document.createElement("i");
  completeIcon.classList.add("fa-regular","fa-circle-check", "check-icon");
  //------------Task Li------------ ---------//
  let task = document.createElement("li");
  task.classList.add("task", "white-glass");
  //------------Icons Div------------//
  let iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons")
  //--------Star Icon--------//
  let starIcon = document.createElement("i");
  starIcon.classList.add("fa-sharp", "fa-solid", "fa-star" ,"star-icon");
  //----Mark Important Div----//
  let markImportant = document.createElement("div");
  markImportant.classList.add("mark-important");
  //--------More Icon-----------//
  let moreIcon = document.createElement("i");
  moreIcon.classList.add("fa-sharp" , "fa-solid", "fa-ellipsis","more-icon");
  //----More Menu Container Div----//
  let moreMenuContainer = document.createElement("div");
  moreMenuContainer.classList.add("more-menu-container", "white-glass");
  //----More Menu----//
  let moreMenu = document.createElement("div");
  moreMenu.classList.add("more-menu");
  //----More Menu 2----//
  let moreMenu2 = document.createElement("div");
  moreMenu2.classList.add("more-menu");
  //---Edit Icon---//
  let editIcon = document.createElement("i");
  editIcon.classList.add("fa-sharp", "fa-solid", "fa-pen", "edit");
  //---Delete Icon---//
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-sharp", "fa-solid", "fa-trash", "delete");
  //---Span for Icons---//
  let editSpan = document.createElement("span");
  let deleteSpan = document.createElement("span")

  // Checking IF task Input field is filled or empty...
  const taskInputElem = document.querySelector(".task-input");
  let taskInput = taskInputElem.value;
  //--Selecting Error--//
  let error = document.querySelector(".error");
  if(taskInputElem.value === ""){
    error.classList.add("show");
    setTimeout(()=>{
      error.classList.remove("show")
    }, 3000)
  }
  else{

  
 //-------------------------------- Appending Child and Creating Structure-------------//

  taskList.appendChild(taskContainer);
  taskContainer.appendChild(completeIcon);

  //Adding the Task//
  taskContainer.appendChild(task); // <<------------
  task.innerText = taskInput;

  //-----------------Appending More...------------------//

  taskContainer.appendChild(iconsDiv);
  iconsDiv.appendChild(starIcon);
  iconsDiv.appendChild(moreIcon);
  starIcon.appendChild(markImportant);
  markImportant.innerText = 'Mark as Important'
  moreIcon.appendChild(moreMenuContainer);
  moreMenuContainer.appendChild(moreMenu);
  moreMenuContainer.appendChild(moreMenu2);
  moreMenu.appendChild(editIcon);
  moreMenu.appendChild(editSpan);
  editSpan.textContent = "Edit"
  moreMenu2.appendChild(deleteIcon);
  moreMenu2.appendChild(deleteSpan);
  deleteSpan.textContent = "Delete";
  
}
  //Check Icon On Click Function...
  completeIcon.addEventListener("click", completedTask => {
    if(task.classList.contains("completed-task")){
      task.classList.remove("completed-task")
    }else{
    task.classList.add("completed-task")
    }
  });
  // Star Icon Hover Effect and Functionality...
const starIcons = document.querySelectorAll(".star-icon");

starIcons.forEach(starIcon => {
  starIcon.addEventListener("click", taskMarkImportant);
});


starIcons.forEach(starIcon => {
  starIcon.addEventListener("mouseenter", starIconDisplay);
});

function starIconDisplay() {
  const hoverMark = this.closest(".star-icon").querySelector(".mark-important");
  hoverMark.style.display = "block";
}
//Star Icon Hide
starIcons.forEach(starIcon => {
    starIcon.addEventListener("mouseleave", starIconHide);
} )

function starIconHide() {
    const hoverMark = this.closest(".star-icon").querySelector(".mark-important");
    hoverMark.style.display = "none";
  }

//More Icon Click and Functionality..

const moreIcons = document.querySelectorAll(".more-icon");
moreIcons.forEach(moreIcon => {
    moreIcon.addEventListener("click", moreIconOpen)
});

//--Delete Icon--//
moreMenu2.addEventListener("click", deleteTask);

//--Edit Icon--//
moreMenu.addEventListener("click", editTask);
//----Clearing text field----//
taskInputElem.value = "";
}


// Adding Functionality to "ADD TASK" Button.  
const addNewBtn = document.querySelector(".add-task-btn")
addNewBtn.addEventListener("click", inputFormOpen);

function inputFormOpen(){
    let form = document.querySelector(".task-input-form");
    if (form.style.display === "none" || !form.style.display) {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }

}
// More Icon Functionality-//
function moreIconOpen(){
  let moreMenu = this.closest(".more-icon").querySelector(".more-menu-container");
  if(moreMenu.style.display === "block"){
      moreMenu.style.display = "none"
  }else {
      moreMenu.style.display = "block"
  }
}

//TaskMark Important Functionality---//
function taskMarkImportant(){
  let starIcon = this.closest(".star-icon")
  let taskContainer = this.closest(".task-container");
  let markImportant = document.querySelector(".mark-important")
  if(taskContainer.classList.contains("gold-glass")){
    taskContainer.classList.remove("gold-glass");
    starIcon.style.color = "black";
    markImportant.innerText = "Mark as Important";
}else {
  taskContainer.classList.add("gold-glass");
  starIcon.style.color = "yellow";
  markImportant.innerText = "Un-Mark Important";
}
}

//Delete and Edit Task Menu Functionality--//
function deleteTask(){
  let taskContainer = this.closest(".task-container");
  taskContainer.remove();
}

function editTask(){
  let taskContainer = this.closest(".task-container");
  let addTaskBtn = document.querySelector(".add-task");
  let taskInputElem = document.querySelector(".task-input");
  let task =  this.closest(".task-container").querySelector(".task");
  console.log(task.innerText)
  taskInputElem.value = task.innerText;
  taskContainer.remove();
}


