// Fix or change the addList logic so that I can add and remove from specific items
import { lists, List } from "./lists";
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

    // newList('2024 Goals');
    // newList('Basic');
    // newList('School');

    new List("2024 Goals");
    new List("Basic");
    new List("School");

    lists.forEach(list => {
        const listLi = document.createElement('li');
        listLi.classList.add('sidebar-list');
        listLi.textContent = list.name;
        listsUl.appendChild(listLi);
        
        listLi.onclick = () => {
            list.selected = true;
            if (list.selected) {
                listLi.classList.add('selected-list');
            } else {
                listLi.classList.remove('selected-list');
            }
        }
    });

    // button to show form and add a new list
    const addListBtn = document.createElement('button');
    addListBtn.classList.add('add-new-list');
    addListBtn.textContent = "New List +";
    addListBtn.onclick = () => {
        newListForm.classList.add('new-list-form');
        newListForm.classList.remove('hide');
    }
    sidebarDiv.appendChild(addListBtn);

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

    const newListBtn = document.createElement('button');
    newListBtn.classList.add("submit-list-btn");
    newListBtn.type = "submit";
    newListBtn.textContent = "Add List";
    newListBtn.onclick = () => {
        // newListForm.submit();
        console.log(listNameInput.textContent);
        // newList(listNameInput.textContent);
        new List(listNameInput.textContent);
    }
    newListForm.appendChild(newListBtn);
}

// const newList = (name) => {
//     const listLi = document.createElement('li');
//     listLi.classList.add('sidebar-list');
//     listLi.textContent = name;
//     listsUl.appendChild(listLi);
//     listLi.onclick = () => {
//         listLi.classList.add('selected-list');
//     }
// }

export {setupSidebar}