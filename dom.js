(function(){ //IEFE ->Immediately evoked Function Expression
    document.body.style.display="flex";
    document.body.style.justifyContent="center";
    document.body.style.marginTop="100px";


    // const todos=[];
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let id = Number(localStorage.getItem("id")) || 0;

    const todoContainer=document.getElementById("todo");
    const todoInput=document.createElement("input");
    const addbtn=document.createElement("button");
    addbtn.textContent="ADD";

    todoContainer.style.background="grey";
    todoContainer.style.padding="20px";
    todoContainer.style.borderRadius="10px";
    todoContainer.style.width="400px"; 
    

    todoInput.style.border="2px solid black";
    todoInput.style.borderRadius="7px";
    todoInput.style.padding="7px";
    todoInput.style.width="250px";
    todoInput.style.fontSize="16px";
    todoInput.style.marginRight="10px";
    todoInput.style.outline="none";

    addbtn.style.border="none";
    addbtn.style.borderRadius="7px";
    addbtn.style.padding="10px 15px";
    addbtn.style.backgroundColor="#2ca949";
    addbtn.style.color="white";
    addbtn.style.cursor="pointer";
    addbtn.style.fontWeight="bold";
    
    const todoList=document.createElement("div");
    todoList.style.width="380px";
    todoList.style.height="350px";
    todoList.style.border="2px solid #ccc";
    todoList.style.borderRadius="7px";
    todoList.style.marginTop="20px";
    todoList.style.padding="10px";
    todoList.style.overflowY="auto";
    todoList.style.backgroundColor="#faf4f4";

    

    todoContainer.append(todoInput,addbtn,todoList);

    function rendertask(todo){
        const todoItem=document.createElement("div")
        todoItem.style.border="1px solid #ddd";
        todoItem.style.margin="10px 0";
        todoItem.style.padding="10px";
        todoItem.style.borderRadius="8px";
        todoItem.style.backgroundColor="white";
        todoItem.style.boxShadow="0 2px 5px rgba(0,0,0,0.1)";
        todoItem.style.display = "flex";
        todoItem.style.flexDirection = "column";

        const p=document.createElement("p");
        p.style.margin="0";
        p.style.fontSize="16px";
        p.style.fontWeight="500";

        p.textContent=todo.text;
        const deletbtn=document.createElement("button");
        deletbtn.textContent="Delete";
        deletbtn.style.backgroundColor="#dc3545";
        deletbtn.style.color="white";
        deletbtn.style.border="none";
        deletbtn.style.padding="6px 10px";
        deletbtn.style.borderRadius="5px";
        deletbtn.style.cursor="pointer";
        deletbtn.style.marginLeft="5px";

        const editbtn=document.createElement("button");
        editbtn.textContent="Edit";
        editbtn.style.backgroundColor="#ffc107";
        editbtn.style.border="none";
        editbtn.style.padding="6px 10px";
        editbtn.style.borderRadius="5px";
        editbtn.style.cursor="pointer";
        editbtn.style.marginLeft="5px";

        editbtn.addEventListener("click", function () {

        if (todoItem.querySelector("input")) return;

        const editContainer = document.createElement("div");
        editContainer.style.marginTop = "10px";
        editContainer.style.display = "flex";
        editContainer.style.gap = "8px";

        const editinput = document.createElement("input");
        editinput.style.padding = "6px";
        editinput.style.borderRadius = "5px";
        editinput.style.border = "1px solid gray";
        editinput.value = todo.text;

        const savebtn = document.createElement("button");
        savebtn.textContent = "Save";
        savebtn.style.backgroundColor = "#28a745";
        savebtn.style.color = "white";
        savebtn.style.border = "none";
        savebtn.style.padding = "6px 10px";
        savebtn.style.borderRadius = "5px";
        savebtn.style.cursor = "pointer";

        editContainer.append(editinput, savebtn);
        todoItem.append(editContainer);

        editinput.focus();

        savebtn.addEventListener("click", function () {
            const updatedTask = editinput.value.trim();

            if (!updatedTask) return;

            todo.text = updatedTask;
            p.textContent = updatedTask;

            saveTodos();

            editContainer.remove();
        });
    });

        deletbtn.addEventListener("click",()=>{
            const index = todos.findIndex(t => t.id === todo.id);
            todos.splice(index, 1);
            saveTodos();
            todoItem.remove();
        })  
        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "8px";
        buttonContainer.append(deletbtn, editbtn);

        const topRow = document.createElement("div");
        topRow.style.display = "flex";
        topRow.style.justifyContent = "space-between";
        topRow.style.alignItems = "center";
        topRow.style.width = "100%";
        topRow.append(p, buttonContainer);
        todoItem.append(topRow);
        // todoItem.append(p,deletbtn,editbtn);
        // todoList.append(p);  //add item at end
        todoList.prepend(todoItem);  // add item at start
    }

    todos.forEach(todo => {
        rendertask(todo);
    });

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);
    }

    function addtodo(){
        const task=todoInput.value;
        if(!task){
            return;
        }

        const todo = {
            id: id++,
            text: task,
            completed: false,
            editing: false
        };

        // console.log(task);
        // todos.unshift(task);
        // rendertask(task);
        todos.unshift(todo);
        saveTodos();
        rendertask(todo);
        todoInput.value="";
        todoInput.focus();
    }
    addbtn.addEventListener("click",addtodo);
    todoInput.addEventListener("keydown",function(e){
        // console.log(e);
        if(e.key==="Enter"){
            addtodo();
        }
    })
})();