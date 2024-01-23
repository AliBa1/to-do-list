import { lists, currentList } from "./lists"
import { tasks, completeTasks } from "./tasks";

const saveData = () => {
    localStorage.clear();
    localStorage.lists = JSON.stringify(lists);
    localStorage.currentList = JSON.stringify(currentList);
    localStorage.tasks = JSON.stringify(tasks);
    localStorage.completeTasks = JSON.stringify(completeTasks);

    // loadData();
}

const loadData = () => {
    // const savedLists = JSON.parse(localStorage.getItem("lists"));
    // const savedCurrentList = JSON.parse(localStorage.getItem("currentList"));
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    // const savedCompleteTasks = JSON.parse(localStorage.getItem("completeTasks"));

    // if (savedLists) lists.push(...savedLists);
    // if (savedCurrentList) currentList = savedCurrentList;
    if (savedTasks) tasks.push(...savedTasks);
    console.log(tasks);
    // if (savedCompleteTasks) completeTasks.push(...savedCompleteTasks);
}

export {saveData, loadData}
