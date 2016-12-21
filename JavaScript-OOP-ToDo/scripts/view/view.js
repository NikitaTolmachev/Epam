var view = (function () {
    'use strict';

    var i;
    var close = document.getElementsByClassName("close");

    function clearTaskList() {
        while (document.getElementById('todo').hasChildNodes()) {
            document.getElementById('todo').removeChild(document.getElementById('todo').firstChild);
        }
    }

    function showTasks(tasks) {
        i = 0;
        clearTaskList()
        tasks.forEach(function (task, indexOfTask) {

            var taskEl = newElement(task);

        });
    }

    function InitializeEvents() {
        document.getElementById('button').addEventListener('click', onTaskAdd);
    }

    function onTaskAdd() {
        var doneOrNot = false;
        var inputValue = document.getElementById("myInput").value;

        controller.addingNewTask(inputValue, doneOrNot)

    }

    function newElement(task) {

        var li = document.createElement("li");
        var newInputCheckBox = document.createElement('input');

        newInputCheckBox.setAttribute('type', 'checkbox');
        newInputCheckBox.setAttribute('margin-top', '0px')
        newInputCheckBox.setAttribute('id', task.getInputValue());
        newInputCheckBox.setAttribute('name', task.getInputValue());
        li.appendChild(newInputCheckBox);

        var newLabel = document.createElement('label');
        var newInputValue = task.getInputValue();

        newLabel.setAttribute('for', newInputValue);
        newLabel.id = 'checkBoxLabel';

        if (task.getDoneOrNot() == true) {
            newLabel.className = 'ls';
            newInputCheckBox.checked = true;
        }
        else {
            newLabel.className = 'nls'
        }

        var taskText = task.getInputValue();

        newLabel.innerHTML = taskText;
        li.appendChild(newLabel);

        if (task.getInputValue === '') {
            alert("You must write something!");

        } else {
            document.getElementById("todo").appendChild(li);
            newInputCheckBox.addEventListener('click', function (ev) {

                if (newInputCheckBox.checked == true) {
                    newLabel.className = 'ls';
                    task.setDoneOrNot(true);
                    tasks.splice([span.id], 1);
                    tasks.push(task);
                    showTasks(tasks);
                }
                else {
                    newInputCheckBox.checked = false;
                    task.setDoneOrNot(false);
                    newLabel.className = 'nls';
                    tasks.splice([span.id], 1);
                    tasks.unshift(task);
                    showTasks(tasks);
                }
            });
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");

        span.className = "close";
        span.id = i;
        i = i + 1;
        span.appendChild(txt);
        li.appendChild(span);

        span.addEventListener('click', function () {
            var div = this.parentElement;

            div.style.display = "none";
            delete tasks[span.id];
        })

    }

    return {
        newElement: newElement,
        showTasks: showTasks,
        InitializeEvents: InitializeEvents
    }
} (view));

var main = (function (view) {
    'use strict';

    view.InitializeEvents();

} (view));