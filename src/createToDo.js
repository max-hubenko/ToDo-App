export default function createToDo(title, description, dueDate, priority) {
    let isDone = false;

    return {title,description,dueDate,priority,isDone};

}