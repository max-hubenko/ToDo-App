

export function newProjectDialog() {
    let dialog = document.getElementById('dialog');
    dialog.innerHTML = `<form method="dialog" id="newProjectForm">
    <label>Project Name:</label>
    <input id="inputProject" type="text">
    <button id="submit" type="submitProject">Submit</button>
    <button id="close">Close</button>
    </form>`
    dialog.showModal();
}


export function selectProjectDialog(Projects) {
    let dialog = document.getElementById('dialog');
    dialog.innerHTML = `<h3 id="projectSelectHeader">Projects:</h3>
    <ul id="projectList">
    </ul>
    <form method="dialog">
        <button id="close">Close</button>
    </form>`;
    let projectList = document.getElementById('projectList');
    Projects.forEach(project => {
        projectList.innerHTML += `<div class="project">
        <p>${project.name}</p>
        <input type="checkbox">
    </div>`
        
    });
    dialog.showModal();
}

export function newToDodialog() {
    let dialog = document.getElementById('dialog');
    dialog.innerHTML = `<form method="dialog" id="newToDo">
    <label>ToDo</label>
    <input id="inputProject" type="text">
    <button id="submit" type="submitProject">Submit</button>
    <button id="close">Close</button>
    </form>`
    dialog.showModal();
}
