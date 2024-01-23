import { saveData } from "./storage";
const lists = [];
let currentList;
class List {
    constructor(name) {
        this.name = name;
        this.index;
        this.selected = false;
        this.tasks = [];
        this.addToLists();
        this.assignIndex();
    }

    // addTaskToList(task) {
    //     tasks.push(task);
    // }

    addToLists() {
        lists.push(this);
        saveData();
    }

    assignIndex() {
        this.index = lists.length - 1;
    }

    setAsCurrent() {
        currentList = this;
        saveData();
    }
}

const removeList = (listIndex) => {
    lists.splice(listIndex, 1);
    for (let i = listIndex; i < listIndex.length; i++) {
        listIndex[i].index -= 1;
    }
    saveData();
}

export {lists, currentList, List, removeList}