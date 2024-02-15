import { lists, currentList, List } from "./lists"
import { tasks, completeTasks, Task } from "./tasks";

const saveData = () => {
    localStorage.lists = JSON.stringify(lists);
    localStorage.tasks = JSON.stringify(tasks);
    localStorage.completeTasks = JSON.stringify(completeTasks);

    // loadData();
}

const loadData = () => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedCompleteTasks = JSON.parse(localStorage.getItem("completeTasks"));

    if (savedLists.length < 1 || savedLists == null) {
        new List("Default");
    } else {
        savedLists.forEach(list => {
            new List(list.name);
        });
    }
    savedTasks.forEach(task => {
        new Task(task.name, task.doBy, task.priority, task.notes, task.list, task.complete);
    });
    savedCompleteTasks.forEach(task => {
        console.log(task);
        new Task(task.name, task.doBy, task.priority, task.notes, task.list, task.complete);
    });
}

export {saveData, loadData}
