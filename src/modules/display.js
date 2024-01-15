const contentDiv = document.createElement('div');


const mainContentDiv = document.createElement('div');

const sidebar = () => {
    const sidebarDiv = document.createElement('div');

    const setupSidebar = () => {
        contentDiv.appendChild(sidebarDiv);

        // make list to display lists
        const listsHeader = document.createElement('h1');
        listsHeader.classList.add('lists-header');
        sidebarDiv.appendChild(listsHeader);

        const listsUl = document.createElement('ul');
        sidebarDiv.appendChild(listsUl);

        newList('2024 Goals');
        newList('Basic');
        newList('School');

        // button to show form and add a new list
        const addListBtn = document.createElement('button');
        addListBtn.className.add('add-new-list');
        addListBtn.onclick(() => {
            newListForm.className.add('new-list-form');
            newListForm.className.remove('hide');
        });
        sidebarDiv.appendChild(addListBtn);

        const newListForm = document.createElement('form');
        // newListForm.className.add('new-list-form');
        newListForm.className.add('hide');
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
        newListBtn.className.add("submit-list-btn");
        newListBtn.type = "submit";
        newListBtn.textContent = "Add List";
        addListBtn.onclick(() => {
            newList(listNameInput.textContent);
        });
        newListForm.appendChild(newListBtn);
    }

    const newList = (name) => {
        const listLi = document.createElement('li');
        listLi.className.add('sidebar-list');
        listLi.textContent = name;
        listsUl.appendChild(listLi);
    }

    return { sidebarDiv };
}

const mainContent = () => {

}