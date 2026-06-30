let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{

        let li=document.createElement("li");

        li.innerHTML=`
        <strong class="${task.completed?'completed':''}">
        ${task.name}
        </strong><br>
        ${task.date}<br>

        <div class="actions">
            <button onclick="completeTask(${index})">✔</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        </div>
        `;

        list.appendChild(li);

    });

}

function addTask(){

    let task=document.getElementById("taskInput").value;
    let date=document.getElementById("taskDate").value;

    if(task==""){
        alert("Enter Task");
        return;
    }

    tasks.push({
        name:task,
        date:date,
        completed:false
    });

    saveTasks();
    displayTasks();

    document.getElementById("taskInput").value="";
    document.getElementById("taskDate").value="";
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}

function completeTask(index){
    tasks[index].completed=!tasks[index].completed;
    saveTasks();
    displayTasks();
}

function editTask(index){

    let newTask=prompt("Edit Task",tasks[index].name);

    if(newTask){
        tasks[index].name=newTask;
        saveTasks();
        displayTasks();
    }

}

displayTasks();
