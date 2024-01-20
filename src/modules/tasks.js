const tasks = [];
class Task {
    constructor(name, doBy, priority, notes) {
        this.name = name;
        this.index;
        this.doBy = doBy;
        this.priority = priority;
        this.notes = notes;
        this.list;
        this.complete = false;
        this.addToTasks();
        this.assignIndex();
    }

    addToTasks() {
        tasks.push(this);
    }

    assignIndex() {
        this.index = tasks.length - 1;
    }
}

export {tasks, Task}