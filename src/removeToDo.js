

export default function removeToDo(project) {
    project.ToDos = project.ToDos.filter(todo => !todo.isDone);
}