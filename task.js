class Task {
    constructor(description, date) {
        this.description = description
        this.date = date
        this.complete = false
    }
    completeIt() {
        this.complete = true
    }
    changeDescription(newDesc) {
        this.description = newDesc
    }
    get Description() {
        return `${this.description}, ${this.date}`
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
    }
    addTask(description, date) {
        const task = new Task(description, date)
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
manager.addTask("learn js", "10/10/2024")
manager.addTask("learn node", "10/10/2024")
manager.tasks[0].completeIt()
manager.showTasks()
