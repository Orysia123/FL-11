const rootNode = document.getElementById('root'),
    todoList = document.getElementById('todo-item'),
    doneList = document.getElementById('ckeck-item'),
    openNewPageBtn = document.getElementById('add-new-task-button'),
    saveTaskBtn = document.getElementById('save-added'),
    cancelAddTask = document.getElementById('cancel-added'),
    saveModifyBtn = document.getElementById('save-modified'),
    cancelModify = document.getElementById('cancel-modified'),
    addTaskInput = document.getElementById('add-task'),
    modifyTaskInput = document.getElementById('modify-task'),
    todoTasks = document.getElementById('todo-tasks'),
    addSection = document.getElementById('add'),
    modifySection = document.getElementById('modify'),
    notifire = document.getElementById('notifire');

let todoItems = [],
    li = document.createElement('li'),
    checkBtn = document.createElement('img'),
    removeBtn = document.createElement('img'),
    span = document.createElement('span'),
    modifyID = null,
    modifyEl = null;

openNewPageBtn.addEventListener('click', function() {
    todoTasks.classList.remove('active');
    addSection.classList.add('active');
    location.hash = 'add';
})

saveTaskBtn.addEventListener('click', function() {
    if (!isEmpty(addTaskInput.value)) {
        addNewTask();

        todoTasks.classList.add('active');
        addSection.classList.remove('active');
        history.pushState('', document.title, window.location.pathname);
    }
})

cancelAddTask.addEventListener('click', function() {
    todoTasks.classList.add('active');
    addSection.classList.remove('active');
    history.pushState('', document.title, window.location.pathname);
})

saveModifyBtn.addEventListener('click', function() {
    if (!isEmpty(modifyTaskInput.value)) {
        modifyItem(modifyID, modifyTaskInput.value);

        modifyEl.childNodes[1].textContent = modifyTaskInput.value;
        modifyTaskInput.value = '';
        todoTasks.classList.add('active');
        modifySection.classList.remove('active');
        history.pushState('', document.title, window.location.pathname);
    }
})

cancelModify.addEventListener('click', function() {
    modifyTaskInput.value = '';
    todoTasks.classList.add('active');
    modifySection.classList.remove('active');
    history.pushState('', document.title, window.location.pathname);
})

function addNewTask() {
    let newTask = new Task(addTaskInput.value);
    todoItems.push(newTask);
    addTaskInput.value = '';

    addNewTasks(newTask.description, newTask.isDone, newTask.id);

    pushToStorage();
}

function addNewTasks(description, isDone, id) {
    let li = document.createElement('li'),
        checkBtn = document.createElement('img'),
        removeBtn = document.createElement('img'),
        span = document.createElement('span'),
        taskId = id;

    span.textContent = description;
    span.addEventListener('click', function(e) {
        let taskDescription = span.textContent;

        modifyID = taskId;
        modifyEl = e.target.parentElement;

        modifyTaskInput.value = taskDescription;

        todoTasks.classList.remove('active');
        modifySection.classList.add('active');
        location.hash = `modify/${modifyID}`;
    })

    removeBtn.setAttribute('src', 'assets/img/remove-s.jpg');
    removeBtn.setAttribute('alt', 'remove');
    removeBtn.addEventListener('click', function(e) {
        let parentLi = e.target.parentElement,
            parentUl = e.target.parentElement.parentElement;

        parentUl.removeChild(parentLi);

        checkTodoLists();

        removeItem(taskId);

        pushToStorage();
    })

    if (isDone) {
        checkBtn.setAttribute('src', 'assets/img/done-s.png');
        checkBtn.setAttribute('alt', 'done');

        li.appendChild(checkBtn);
        li.appendChild(span);
        li.appendChild(removeBtn);

        doneList.appendChild(li);
    } else {
        checkBtn.setAttribute('src', 'assets/img/todo-s.png');
        checkBtn.setAttribute('alt', 'todo');
        checkBtn.addEventListener('click', function(e) {
            checkBtn.setAttribute('src', 'assets/img/done-s.png');
            checkBtn.setAttribute('alt', 'done');

            todoItems[taskId].isDone = true;

            pushToStorage();

            let parentLi = e.target.parentElement,
                parentUl = e.target.parentElement.parentElement;

            if (parentUl !== doneList) {
                parentUl.removeChild(parentLi);
                doneList.appendChild(parentLi);
            }
        })

        li.appendChild(checkBtn);
        li.appendChild(span);
        li.appendChild(removeBtn);

        todoList.appendChild(li);
    }

    checkTodoLists();
}

function removeItem(id) {
    if (todoItems.length === 1) {
        todoItems.pop();

        localStorage.removeItem('todoItems');
    } else {
        let tempArray = todoItems.splice(id);

        for (let i = 1; i < tempArray.length; i++) {
            tempArray[i].id = todoItems.length;

            todoItems.push(tempArray[i]);
        }
    }
}

function modifyItem(id, text) {
    todoItems[id].description = text;

    pushToStorage();
}

function pushToStorage() {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function getFromStorage() {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));

    for (let i = 0; i < todoItems.length; i++) {
        addNewTasks(todoItems[i].description, todoItems[i].isDone, todoItems[i].id)
    }
}

function checkTodoLists() {
    let todoLength = todoList.childNodes.length,
        doneLength = doneList.childNodes.length;

    if (todoLength > 1 || doneLength > 1) {
        notifire.style.display = 'none';
    } else {
        notifire.style.display = 'block';
    }
}

function isEmpty(str) {
    return !str || /^\s*$/.test(str);
}

function Task(text) {
    this.description = text;
    this.isDone = false;
    this.id = todoItems.length;
}

if (localStorage.getItem('todoItems')) {
    getFromStorage();
    checkTodoLists();
}

// function showNotification() {
//     for (let i = 0; i < modifySection.length; i++) {
//         if (listSection === modifySection[i]) {
//             alert('Error. You can"t edit this')
//         }
//     }
// }