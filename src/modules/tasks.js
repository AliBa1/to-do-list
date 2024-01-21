const tasks = [];
const completeTasks = [];
class Task {
    constructor(name, doBy, priority, notes, list, isComplete) {
        this.name = name;
        this.index;
        this.doBy = doBy;
        this.priority = priority;
        this.notes = notes;
        this.list = list;
        this.complete = false;
        if (isComplete) {
            this.addToCompleteTasks();
        } else {
            this.addToTasks();
        }
        this.assignIndex();
    }

    addToTasks() {
        tasks.push(this);
    }

    addToCompleteTasks() {
        completeTasks.push(this);
    }

    assignIndex() {
        this.index = tasks.length - 1;
    }
}

const removeTask = (taskList, taskIndex) => {
    taskList.splice(taskIndex, 1);
    for (let i = taskIndex; i < taskList.length; i++) {
        taskList[i].index -= 1;
    }
}

export {tasks, completeTasks, Task, removeTask}