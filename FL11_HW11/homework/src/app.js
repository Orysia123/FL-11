// let rootNode = document.getElementById("root");

let maxlist = 10;
let zero = 0;
let threeThousand = 3000;


let iconDelete = '<i class="material-icons right">delete</i>';
let iconCheck = '<i class="material-icons">check_box_outline_blank</i>';
let iconDone = '<i class="material-icons" id="doneImg">check_box</i>';

let itemList = document.getElementsByTagName('li');

let createTask = document.getElementById('add-button');

createTask.addEventListener('click', addTaskToDo);

let checkTask = document.createElement('button');

function addTaskToDo() {
    if (itemList.length < maxlist) {
        let wrapper = document.getElementById('added-items');

        let task = document.createElement('li');
        task.classList.add('cat-task');

        let checkTask = document.createElement('button');
        checkTask.classList.add('check-task');
        checkTask.innerHTML = iconCheck;
        checkTask.addEventListener('click', doneTask);

        let textTask = document.createElement('p');
        textTask.classList.add('text-task');
        let textValue = document.getElementById('add-text').value;

        if (textValue) {
            document.getElementById('add-text').value = '';
            textTask.innerHTML = textValue;
        } else {
            document.querySelector('button').disabled = true;

            return;
        }

        let delButton = document.createElement('button');
        delButton.classList.add('delete-task');
        delButton.innerHTML = iconDelete;
        delButton.addEventListener('click', deleteTask);

        wrapper.appendChild(task);
        task.appendChild(checkTask);
        task.appendChild(textTask);
        task.appendChild(delButton);
    } else {
        document.getElementById('add-text').disabled = true;
        document.getElementById('notification').style.display = 'block';
        setTimeout(() => document.querySelector('.notification').remove(), threeThousand);
    }
}



function doneTask() {
    let checkTask = this;
    checkTask.innerHTML = iconDone;
}

function deleteTask() {
    this.parentElement.remove();
    if (itemList.length < maxlist) {
        document.getElementById('add-text').disabled = false;
        document.getElementById('add-button').disabled = false;
    }
}