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

    addTaskToList(task) {
        tasks.push(task);
    }

    addToLists() {
        lists.push(this);
    }

    assignIndex() {
        this.index = lists.length - 1;
    }

    setAsCurrent() {
        currentList = this;
    }
}

export {lists, currentList, List}