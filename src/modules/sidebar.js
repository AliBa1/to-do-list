import { lists, currentList, List } from "./lists";
import { showTasks, tasksUl, completeTasksUl } from "./mainContent";
import { tasks, completeTasks } from "./tasks";
const contentDiv = document.querySelector('#content');
const sidebarDiv = document.createElement('div');
const listsUl = document.createElement('ul');

const setupSidebar = () => {
    contentDiv.appendChild(sidebarDiv);
    sidebarDiv.classList.add("sidebar");

    // make list to display lists
    const listsHeader = document.createElement('h1');
    listsHeader.classList.add('lists-header');
    listsHeader.textContent = "Lists";
    sidebarDiv.appendChild(listsHeader);

    sidebarDiv.appendChild(listsUl);

    // new List("Default");
    // new List("2024 Goals");
    // new List("Basic");
    // new List("School");
    if (lists.length < 1) {
        new List("Default");
    }
    console.log(lists);
    lists[0].setAsCurrent();

    showLists();

    // button to show form and add a new list
    const newListBtn = document.createElement('button');
    newListBtn.classList.add('add-new-list');
    newListBtn.textContent = "New List +";
    newListBtn.onclick = () => {
        if (newListForm.classList.contains('hide')) {
            newListForm.classList.add('new-list-form');
            newListForm.classList.remove('hide');
        } else {
            newListForm.classList.remove('new-list-form');
            newListForm.classList.add('hide');
        }
    }
    sidebarDiv.appendChild(newListBtn);

    const newListForm = document.createElement('form');
    // newListForm.classList.add('new-list-form');
    newListForm.classList.add('hide');
    newListForm.action = '#';
    newListForm.method = 'get';
    sidebarDiv.appendChild(newListForm);

    const listNameLabel = document.createElement('label');
    listNameLabel.htmlFor = "new_list";
    listNameLabel.textContent = "List Name";
    newListForm.appendChild(listNameLabel);

    const listNameInput = document.createElement('input');
    listNameInput.type = "text";
    listNameInput.name = "new_list";
    listNameInput.id = "new_list";
    listNameInput.required = true;
    newListForm.appendChild(listNameInput);

    const addListBtn = document.createElement('button');
    addListBtn.classList.add("submit-list-btn");
    addListBtn.type = "button";
    addListBtn.textContent = "Add List";
    addListBtn.onclick = () => {
        new List(listNameInput.value);
        lists[lists.length-1].setAsCurrent();
        showLists();
        showTasks(tasksUl, tasks);
        listNameInput.value = "";
        newListForm.classList.remove('new-list-form');
        newListForm.classList.add('hide');
    }
    newListForm.appendChild(addListBtn);
}

const showLists = () => {
    while (listsUl.firstChild) {
        listsUl.removeChild(listsUl.firstChild);
    }

    lists.forEach(list => {
        const listLi = document.createElement('li');
        listLi.classList.add('sidebar-list');
        listLi.textContent = list.name;
        listsUl.appendChild(listLi);

        if (currentList == list) {
            listLi.classList.add('selected-list');
        } else {
            listLi.classList.remove('selected-list');
        }
        
        listLi.onclick = () => {
            list.setAsCurrent();
            showTasks(tasksUl, tasks);
            showTasks(completeTasksUl, completeTasks);
            showLists();
        }
    });
}



export {setupSidebar, showLists}