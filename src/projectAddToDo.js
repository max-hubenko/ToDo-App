
export default function projectAddToDo(project,todo) {
    if (project.ToDos.length < 8) {
        project.ToDos.push(todo);
    }
}