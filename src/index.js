import createToDo from "./createToDo";
import completeToDo from "./completeToDo";
import changePriority from "./changePriority";
import createProject from "./createProject";
import displayProject from "./displayHandler";
import projectAddToDo from "./projectAddToDo";
import './styles.css';
import {newProjectDialog, selectProjectDialog} from "./openDialogs";



let Projects = [];
let defaultProject = createProject("Default Project");
Projects.push(defaultProject);


let todo =  createToDo("Sample", "sample desc", "12/29/23", 1)



projectAddToDo(defaultProject,todo);


displayProject(defaultProject);

let newProjectButton = document.getElementById('newProjectButton');
newProjectButton.addEventListener("click", () => {
    newProjectDialog();
    let form = document.getElementById('newProjectForm');
    console.log(form)
    form.addEventListener('submit', function(event){
        event.preventDefault(); 
        console.log('Form submitted!');

        let input = document.getElementById('inputProject');

        if (input.value != '') {
            let newProject = createProject(input.value)
            Projects.push(newProject);
            console.log(Projects);
        }
        form.parentElement.close();
    });
});


let selectProjectButton = document.getElementById('selectProjectButton');
selectProjectButton.addEventListener("click", () => {
    selectProjectDialog(Projects);
});










