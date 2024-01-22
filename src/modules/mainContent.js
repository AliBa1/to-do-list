// NEXT TIME DO NOT NEED TO PUT ALL HTML INTO JS. JUST PUT NEEDED HTML INTO A DIV
import { currentList, removeList, lists} from "./lists";
import { tasks, completeTasks, Task, removeTask } from "./tasks";
import { showLists } from "./sidebar";
const contentDiv = document.querySelector('#content');
const mainContentDiv = document.createElement('div');
const tasksUl = document.createElement('ul');
const completeTasksUl = document.createElement('ul');

const setupMain = () => {
    contentDiv.appendChild(mainContentDiv);
    mainContentDiv.classList.add("main-content");

    tasksUl.classList.add("to-do-list");
    mainContentDiv.appendChild(tasksUl);
    showTasks(tasksUl, tasks);

    const newTaskBtn = document.createElement("button");
    newTaskBtn.classList.add("add-new-task");
    newTaskBtn.textContent = "New Task +";
    newTaskBtn.onclick = () => {
        if (newTaskForm.classList.contains("hide")) {
            newTaskForm.classList.add("new-task-form");
            newTaskForm.classList.remove("hide");
        } else {
            newTaskForm.classList.remove("new-task-form");
            newTaskForm.classList.add("hide");
        }
    }
    mainContentDiv.appendChild(newTaskBtn);

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
    taskDateInput.name = "task_duedate";
    taskDateInput.id = "task_duedate";
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

    const medPrioDiv = document.createElement("div");
    taskPrioFieldset.appendChild(medPrioDiv);
    
    const medPrioLabel = document.createElement("label");
    medPrioLabel.for = "medium_prio";
    medPrioLabel.textContent = "Medium";
    medPrioDiv.appendChild(medPrioLabel);

    const medPrioInput = document.createElement("input");
    medPrioInput.type = "radio";
    medPrioInput.name = "task_prio";
    medPrioInput.id = "medium_prio";
    medPrioInput.value = "medium";
    medPrioDiv.appendChild(medPrioInput);

    const lowPrioDiv = document.createElement("div");
    taskPrioFieldset.appendChild(lowPrioDiv);
    
    const lowPrioLabel = document.createElement("label");
    lowPrioLabel.for = "low_prio";
    lowPrioLabel.textContent = "Low";
    lowPrioDiv.appendChild(lowPrioLabel);

    const lowPrioInput = document.createElement("input");
    lowPrioInput.type = "radio";
    lowPrioInput.name = "task_prio";
    lowPrioInput.id = "low_prio";
    lowPrioInput.value = "low";
    lowPrioDiv.appendChild(lowPrioInput);

    const taskNotesLabel = document.createElement('label');
    taskNotesLabel.for = "task_notes";
    taskNotesLabel.textContent = "Notes";
    newTaskForm.appendChild(taskNotesLabel);

    const taskNotesTextArea = document.createElement('textarea');
    taskNotesTextArea.name = "task_notes";
    taskNotesTextArea.id = "task_notes";
    taskNotesTextArea.cols = 30;
    taskNotesTextArea.rows = 10;
    newTaskForm.appendChild(taskNotesTextArea);

    const taskSubmitBtn = document.createElement('button');
    taskSubmitBtn.classList.add("submit-task-btn");
    taskSubmitBtn.type = "button";
    taskSubmitBtn.textContent = "Add Task";
    taskSubmitBtn.onclick = () => {
        const prioButtons = document.getElementsByName("task_prio");
        let prioValue;
        for (let i = 0; i < prioButtons.length; i++) {
            if (prioButtons[i].checked) {
                prioValue = prioButtons[i].value;
                break; // Stop iterating once a checked radio button is found
            }
        }
        new Task(taskNameInput.value, taskDateInput.value, prioValue, taskNotesTextArea.value, currentList, false);
        showTasks(tasksUl, tasks);

        taskNameInput.value = "";
        taskNotesTextArea.value = "";
        newTaskForm.classList.remove("new-task-form");
        newTaskForm.classList.add("hide");

    }
    newTaskForm.appendChild(taskSubmitBtn);

    completeTasksUl.classList.add("completed-tasks");
    mainContentDiv.appendChild(completeTasksUl);
    // new Task("This is complete", "", "low", "", currentList, true);
    showTasks(completeTasksUl, completeTasks);

    const footerDiv = document.createElement('div');
    footerDiv.classList.add("footer");
    mainContentDiv.appendChild(footerDiv);

    const trashImg = document.createElement("img");
    trashImg.src = "images/delete.svg";
    trashImg.alt = "Delete";
    trashImg.classList.add("delete-list");
    footerDiv.appendChild(trashImg);
    trashImg.onclick = () => {
        const comfirmListDel = window.confirm("Are you sure you want to delete this list (all tasks in list will be removed as well)?");
        if (comfirmListDel) {
            removeList(currentList.index);
            tasks.forEach(task => {
                if (task.list == currentList.name) {
                    task.removeTask(tasks, task.index);
                }
            });
            completeTasks.forEach(task => {
                if (task.list == currentList.name) {
                    task.removeTask(completeTasks, task.index);
                }
            });
            // currentList = lists[0];
            if (lists.length-1 > -1) {
                lists[lists.length-1].setAsCurrent();
            }
            showLists();

        } else {
            console.log("Deletion canceled");
        }
    }

    // may remove
    // const taskViewP = document.createElement("p");
    // taskViewP.classList.add("task-view");
    // taskViewP.textContent = "Task View: Basic";
    // footerDiv.appendChild(taskViewP);

    // may remove
    // const lightSwitchLabel = document.createElement("p");
    // lightSwitchLabel.classList.add("light-switch");
    // footerDiv.appendChild(lightSwitchLabel);

    // const lightSwitchInput = document.createElement("input");
    // lightSwitchInput.type = "checkbox";
    // lightSwitchLabel.appendChild(lightSwitchInput);

    // const lightSwitchSpan = document.createElement("span");
    // lightSwitchSpan.classList.add("slider");
    // lightSwitchLabel.appendChild(lightSwitchSpan);

}

const showTasks = (Ul, taskList) => {
    while (Ul.firstChild) {
        Ul.removeChild(Ul.firstChild);
    }

    taskList.forEach(task => {
        if (task.list == currentList) {
            const taskLi = document.createElement('li');
            taskLi.classList.add("task");
            Ul.appendChild(taskLi);

            const taskInput = document.createElement('input');
            taskInput.type = "checkbox";
            taskInput.id = "".concat(task.list, task.index);
            taskInput.name = "".concat(task.list, task.index);
            taskInput.classList.add("hidden-checkbox");
            taskLi.appendChild(taskInput);

            if (task.complete === true) {
                taskInput.checked = true;
            } else {
                taskInput.checked = false;
            }

            taskInput.addEventListener('change', () => {
                if (taskInput.checked) {
                    console.log(task.name + " checked");
                    task.complete = true;
                    removeTask (tasks, task.index);
                    task.addToCompleteTasks();
                    task.assignIndex();
                    showTasks(tasksUl, tasks);
                    showTasks(completeTasksUl, completeTasks);
                } else {
                    console.log(task.name + " unchecked");
                    task.complete = false;
                    removeTask (completeTasks, task.index);
                    task.addToTasks();
                    task.assignIndex();
                    showTasks(tasksUl, tasks);
                    showTasks(completeTasksUl, completeTasks);
                }
            })

            const taskLabel = document.createElement("label");
            taskLabel.for = "".concat(task.list, task.index);
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

            if (task.doBy != '') {
                const taskNameDateDiv = document.createElement("div");
                taskLabel.appendChild(taskNameDateDiv);
                taskLabel.removeChild(taskName);
                taskNameDateDiv.appendChild(taskName);

                const taskDoBy = document.createElement("p");
                taskDoBy.classList.add("do-by");
                if (task.priority == "low") {
                    taskDoBy.style.color = 'gray';
                } else if (task.priority == "medium") {
                    taskDoBy.style.color = 'gold';
                } else if (task.priority == "high") {
                    taskDoBy.style.color = 'red';
                } else {
                    taskDoBy.style.color = 'gray';
                    console.log(task.priority);
                }
                taskDoBy.textContent = "Do by ".concat(task.doBy);
                taskNameDateDiv.appendChild(taskDoBy);
            }

            // const optionDotsImg = document.createElement("img");
            // optionDotsImg.src = "images/dots-horizontal.svg";
            // optionDotsImg.alt = "Dots";
            // optionDotsImg.classList.add("option-dots");
            // taskLi.appendChild(optionDotsImg);

            const removeTaskImg = document.createElement("img");
            removeTaskImg.src = "images/close.svg";
            removeTaskImg.alt = "Remove";
            removeTaskImg.classList.add("remove-task-img");
            taskLi.appendChild(removeTaskImg);
            removeTaskImg.onclick = () => {
                const comfirmTaskDel = window.confirm("Are you sure you want to delete this task?");
                if (comfirmTaskDel) {
                    removeTask(taskList, task.index);
                    showTasks(Ul, taskList);
                } else {
                    console.log("Deletion canceled");
                }
            }

        }
        
    });
}



export {setupMain, showTasks, tasksUl, completeTasksUl}