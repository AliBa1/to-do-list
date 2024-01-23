import { lists, currentList } from "./lists"
import { tasks, completeTasks } from "./tasks";

const saveData = () => {
    localStorage.lists = JSON.stringify(lists);
    localStorage.currentList = JSON.stringify(currentList);
    localStorage.tasks = JSON.stringify(tasks);
    localStorage.completeTasks = JSON.stringify(completeTasks);

    setData();
}

const setData = () => {
    // console.log(JSON.parse(localStorage.getItem("lists")));

    // lists = localStorage.getItem("lists");
    // currentList = localStorage.getItem("currentList");
    // tasks = localStorage.getItem("tasks");
    // completeTasks = localStorage.getItem("completeTasks");
}

export {saveData, setData}
