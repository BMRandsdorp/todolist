const taskBtn = document.getElementById(`add-task`);
const taskInput = document.getElementById(`new-task`);

const addTaskToDom = async () => {
    const calledArray = await getToDo();
    const listTask = await calledArray.map((task) => {
    const listedTask = document.createElement("li");
    listedTask.classList.add("to-do-item");
    listedTask.setAttribute("id", task._id);
    listedTask.innerHTML = task.description;
    return listedTask;
  });
  const taskList = document.getElementById(`task-list`);

  while (taskList.firstChild){
    taskList.removeChild(taskList.lastChild);
  };

  listTask.forEach((node) => {
       taskList.appendChild(node);
       const delBtn = document.createElement("button");
       delBtn.classList.add("delete-task");
       node.appendChild(delBtn);
      /*  // checkbox bonus
      const checkBox = document.createElement("input");
       checkBox.type = "checkbox";
       checkBox.classList.add("task-check");
       node.prepend(checkBox);
       */
  });
  
};
addTaskToDom()

taskBtn.addEventListener(`click`, async function(){
   try{ 
    const newTask = taskInput.value; 
    await postToDo(newTask);
    await addTaskToDom();    
    taskInput.value = " ";
   } catch(err){
    console.log(err);
   }
});

document.addEventListener('click', async function(e){
  if(e.target && e.target.classList== 'delete-task'){
       const parentId = e.target.parentNode.id;
       await deleteToDo(parentId);
       addTaskToDom();
   }
});

// bonus

/* check box event listner
document.addEventListener('change', async function(e){
    if(e.target && e.target.classlist== "task-check"){ 
     if(e.target.checked) {
      const task = e.target.parentNode;
      console.log("checked box" + task.id);
      //await putTaskDone(task.id);
      task.classList.add("strike-through");
  } else {
        const task = e.target.parentNode;
        console.log("not checked box"  + task.id)
       // await putTaskNotDone(task.id);
       task.classList.remove("strike-through");
  }}}); 
*/
