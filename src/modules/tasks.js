const tasks = [];
class Task {
    constructor(name) {
        this.name = name;
        this.index;
        this.doBy;
        this.priority;
        this.notes;
        this.list;
        this.complete = false;
        // this.addToTasks();
        this.assignIndex();
    }

    // addToTasks() {
    //     tasks.push(this);
    // }

    assignIndex() {
        this.index = lists.length - 1;
    }
}

export {tasks, Task}