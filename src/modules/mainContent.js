// NEXT TIME DO NOT NEED TO PUT ALL HTML INTO JS. JUST PUT NEEDED HTML INTO A DIV
import { tasks, Task } from "./tasks";
const contentDiv = document.querySelector('#content');
const mainContentDiv = document.createElement('div');
const tasksUl = document.createElement('ul');

const setupMain = () => {
    contentDiv.appendChild(mainContentDiv);
    mainContentDiv.classList.add("main-content");

    tasksUl.classList.add("to-do-list");
    mainContentDiv.appendChild(tasksUl);
    showTasks();

    const newTaskBtn = document.createElement("button");
    newTaskBtn.classList.add("add-new-task");
    newTaskBtn.textContent = "New Task +";
    newTaskBtn.onclick = () => {
        newTaskForm.classList.add("new-task-form");
        newTaskForm.classList.remove("hide");
    }
    tasksUl.appendChild(newTaskBtn);

    const newTaskForm = document.createElement("form");
    newTaskForm.action = "#";
    newTaskForm.method = "get";
    // newTaskForm.classList.add("new-task-form");
    newTaskForm.classList.add("hide");
    mainContentDiv.appendChild(newTaskForm);

    const taskFormLabel = document.createElement("label");
    taskFormLabel.for = "task_desc";
    taskFormLabel.textContent = "Task";
    newTaskForm.appendChild(taskFormLabel);

    const taskNameInput = document.createElement("input");
    taskNameInput.name = "task_desc";
    taskNameInput.id = "task_desc";
    taskNameInput.required = true;
    newTaskForm.appendChild(taskNameInput);

    const taskFormDate = document.createElement("label");
    taskFormDate.for = "task_duedate";
    taskFormDate.textContent = "Do By";
    newTaskForm.appendChild(taskFormDate);

    const taskDateInput = document.createElement("input");
    taskDateInput.type = "date";
    taskDateInput.name = "task_desc";
    taskDateInput.id = "task_desc";
    newTaskForm.appendChild(taskDateInput);

    const taskPrioFieldset = document.createElement("fieldset");
    taskPrioFieldset.classList.add("task-prio");
    newTaskForm.appendChild(taskPrioFieldset);

    const taskPrioLegend = document.createElement("legend");
    taskPrioLegend.textContent = "Priority";
    taskPrioFieldset.appendChild(taskPrioLegend);

    const highPrioDiv = document.createElement("div");
    taskPrioFieldset.appendChild(highPrioDiv);
    
    const highPrioLabel = document.createElement("label");
    highPrioLabel.for = "high_prio";
    highPrioLabel.textContent = "High";
    highPrioDiv.appendChild(highPrioLabel);

    const highPrioInput = document.createElement("input");
    highPrioInput.type = "radio";
    highPrioInput.name = "task_prio";
    highPrioInput.id = "high_prio";
    highPrioInput.value = "high";
    highPrioDiv.appendChild(highPrioInput);

    // START HERE w/ MED PRIO DIV
}

const showTasks = () => {
    while (tasksUl.firstChild) {
        tasksUl.removeChild(tasksUl.firstChild);
    }

    tasks.forEach(task => {
        // if (task.list == currentList)
        const taskLi = document.createElement('li');
        taskLi.classList.add("task");
        tasksUl.appendChild(taskLi);

        const taskInput = document.createElement('input');
        taskInput.type = "checkbox";
        taskInput.id = task.list.concat(task.index);
        taskInput.name = task.list.concat(task.index);
        taskInput.classList.add("hidden-checkbox");
        taskLi.appendChild(taskInput);

        const taskLabel = document.createElement("label");
        taskLabel.for = task.list.concat(task.index);
        taskLabel.classList.add("custom-checkbox");
        taskLi.appendChild(taskLabel);

        const checkmarkDiv = document.createElement("div");
        checkmarkDiv.classList.add("checkmark");
        taskLabel.appendChild(checkmarkDiv);

        const checkmarkImg = document.createElement("img");
        checkmarkImg.src = "images/tick-mark-icon.svg";
        checkmarkImg.alt = "Checkmark";
        checkmarkImg.classList.add("check-img");
        checkmarkDiv.appendChild(checkmarkImg);

        const taskName = document.createElement("p");
        taskName.textContent = task.name;
        taskLabel.appendChild(taskName);

        if (task.doBy != null) {
            const taskNameDateDiv = document.createElement("div");
            taskLabel.appendChild(taskNameDateDiv);
            taskLabel.removeChild(taskName);
            taskNameDateDiv.appendChild(taskName);

            const taskDoBy = document.createElement("p");
            taskDoBy.classList.add("do-by");
            taskDoBy.textContent = "Do by ".concat(task.doBy);
            taskNameDateDiv.appendChild(taskDoBy);
        }

        const optionDotsImg = document.createElement("img");
        optionDotsImg.src = "images/dots-horizontal.svg";
        optionDotsImg.alt = "Dots";
        optionDotsImg.classList.add("option-dots");
        taskLi.appendChild(optionDotsImg);
    });
}

export {setupMain}