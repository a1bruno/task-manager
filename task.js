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

