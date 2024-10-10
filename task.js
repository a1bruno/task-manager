class Task {
    constructor(description) {
        this.description = description
        this.complete = false
    }
    completeIt() {
        this.complete = true
    }
    changeDescription(newDesc) {
        this.description = newDesc
    }
    get Description() {
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
            console.log(`${index + 1}: ${task.Description} - ${task.complete ? 'Completed task!' : 'Not completed.'}`)
        })
    }
    showCompletedTasks() {
        this.tasks.forEach((task, index) => {
            if (this.tasks[index].complete === true) {
                console.log(`${index + 1}: ${task.Description} - 'Completed task!'`)
            }
        })
}
    showNotCompletedTasks() {
        this.tasks.forEach((task, index) => {
            if(this.tasks[index].complete === false) {
                console.log(`${index + 1}: ${task.Description} - 'Not completed.'`)
            }
        })
    }
    removeTask(index) {
        this.tasks.splice(index - 1, 1)
    }
}

let manager = new TaskManager()
manager.addTask("learn js")
manager.addTask("learn node")
manager.tasks[0].completeIt()
manager.showNotCompletedTasks()
