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

    showLists();

    // button to show form and add a new list
    const newListBtn = document.createElement('button');
    newListBtn.classList.add('add-new-list');
    newListBtn.textContent = "New List +";
    newListBtn.onclick = () => {
        newListForm.classList.add('new-list-form');
        newListForm.classList.remove('hide');
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
        console.log(listNameInput.value);
        // newList(listNameInput.textContent);
        new List(listNameInput.value);
        showLists();
        listNameInput.value = "";
        newListForm.classList.remove('new-list-form');
        newListForm.classList.add('hide');
    }
    newListForm.appendChild(addListBtn);
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

const showLists = () => {
    while (listsUl.firstChild) {
        listsUl.removeChild(listsUl.firstChild);
    }
    lists.forEach(list => {
        const listLi = document.createElement('li');
        listLi.classList.add('sidebar-list');
        listLi.textContent = list.name;
        listsUl.appendChild(listLi);
        
        listLi.onclick = () => {
            // currentList = list;
            // assignCurrentList(list.index, listLi);
            console.log(list.index);
            list.selected = true;
            if (list.selected) {
                listLi.classList.add('selected-list');
            } else {
                listLi.classList.remove('selected-list');
            }
        }
    });
}

// const assignCurrentList = (indexSelected, liElement) => {
//     lists.forEach(list => {
//         if (list.index === indexSelected) {
//             list.selected = true;
//             liElement.classList.add('selected-list');
//         } else {
//             list.selected = false;
//             liElement.classList.remove('selected-list');
//         }
//     });
// }

export {setupSidebar}