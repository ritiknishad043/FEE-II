(function () {

    // const todos = [];
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let id = Number(localStorage.getItem("id")) || 0;

    const todoContainer = document.getElementById("todo");

    const todoInput = document.createElement("input");
    todoInput.type = "text";
    todoInput.placeholder = "Enter Task....";

    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    const todoList = document.createElement("div");
    todoList.id = "taskList";

    todoContainer.append(todoInput, addButton, todoList);

    function renderTask(task) {

        const todoItem = document.createElement("div");
        todoItem.className = "todoItem";

        const p = document.createElement("p");
        p.textContent = task.text;

        const buttonBox = document.createElement("div");
        buttonBox.className = "buttons";

        // Complete Button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";

        completeBtn.addEventListener("click", () => {

            if (todoItem.classList.contains("completed")) {
                todoItem.classList.remove("completed");
                completeBtn.textContent = "Complete";
            } else {
                todoItem.classList.add("completed");
                completeBtn.textContent = "Undo";
            }

        });

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => {

            const newTask = prompt("Edit your task:", p.textContent);

            if (newTask !== null && newTask.trim() !== "") {

                const index = todos.indexOf(task);

                if (index !== -1) {
                    todos[index] = newTask;
                }

                task = newTask;
                p.textContent = newTask;
            }

        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {

            const index = todos.indexOf(task);

            if (index !== -1) {
                todos.splice(index, 1);
            }

            todoItem.remove();

        });

        buttonBox.append(completeBtn, editBtn, deleteBtn);

        todoItem.append(p, buttonBox);

        todoList.prepend(todoItem);
    }

    function addTodo() {

        const task = todoInput.value;

        // if (task === "") return;

        // todos.unshift(task);

        // renderTask(task);

        // todoInput.value = "";
        // todoInput.focus();
        id=id+1;
        const obj={
            id:id,
            text:task,
            complete:false,
            edit:0
        }
        todos.unshift(obj);

        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);

        renderTask(obj);

        todoInput.value = "";
        todoInput.focus();
    }

    addButton.addEventListener("click", addTodo);

    todoInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTodo();
        }
    });

})();