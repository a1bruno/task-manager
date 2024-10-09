class Task {
    constructor(description) {
        this.description = description
        this.complete = false
    }
    completeIt() {
        this.complete = true
    }
    showDescription() {
        return this.description
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
    }
    addTask(description) {
        const task = new Task(description)
        this.tasks.push(task)
    }
    showTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task.showDescription} - ${task.complete ? 'Completed task!' : 'Not completed.'}`)
        })
    }
    removeTask(index) {
        this.tasks.splice(index - 1, 1)
    }
}