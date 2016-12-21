var controller = (function () {
    'use strict';

    function addingNewTask(inputValue, doneOrNot, order) {
        var newTask = new Task(inputValue, doneOrNot);

        if (Array.isArray(tasks)) {

            tasks.unshift(newTask);
            view.showTasks(tasks);
        } else {
            throw new Error('Broken tasks array')
        }
    }

    return {
        addingNewTask: addingNewTask,
    }
} (controller));

