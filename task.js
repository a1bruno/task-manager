class Task {
    constructor(description, date, priority = "low") {
        this.description = description
        this.date = date
        this.priority = priority
        this.complete = false
    }
    completeIt() {
        this.complete = true
    }
    get Description() {
        return `${this.description}, ${this.date}`
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
    }
    addTask(description, date, priority = "low") {
        const task = new Task(description, date, priority)
        this.tasks.push(task)
    }
    changeDesc(newDesc, taskIndex) {
        this.tasks[taskIndex].description = newDesc
    }
    showTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task.Description} - ${task.complete ? 'Completed task!' : 'Not completed.'} Task priority: ${task.priority}.`)
        })
    }
    showCompletedTasks() {
        this.tasks.forEach((task, index) => {
            if (this.tasks[index].complete === true) {
                console.log(`${index + 1}: ${task.Description} - 'Completed task!', priority ${task.priority}.`)
            }
        })
}
    showNotCompletedTasks() {
        this.tasks.forEach((task, index) => {
            if(this.tasks[index].complete === false) {
                console.log(`${index + 1}: ${task.Description} - 'Not completed.' Task priority: ${task.priority}.`)
            }
        })
    }
    showPriorityTasks(priority) {
        this.tasks.forEach((task, index) => {
            if(this.tasks[index].priority === priority) {
                console.log(`${index + 1}: ${task.Description} - Priority: ${task.priority}.`)
            }
        })
    }
    removeTask(index) {
        this.tasks.splice(index - 1, 1)
    }
}

let manager = new TaskManager()
manager.addTask("learn node", "10/10/2024")
manager.addTask("study 1h", "10/10/2024")
manager.addTask("practice some exercise", "10/10/2024")
manager.addTask("learn js", "10/10/2024", "high")
manager.addTask("go shop", "10/10/2024")
manager.tasks[3].completeIt()
manager.changeDesc("learn expressJs", 3)
manager.showTasks()
