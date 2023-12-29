


export default function displayProject(project) {
    let header = document.getElementById('projectHeader');
    let div = document.getElementById('todosdiv');
    header.innerHTML = project.name;
    div.innerHTML = ``;
    project.ToDos.forEach(todo => {
        div.innerHTML += `
        <div class="todo">
        <p>${todo.title}</p>
        <input type="checkbox">
    </div>`;
    });
}

