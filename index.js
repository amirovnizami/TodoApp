const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
    secondCardBody.addEventListener("click",deleteTodo);
    clearButton.addEventListener("click",clearAllTodos);
}


function addTodo(e){
    const newTodo = todoInput.value.trim();
    if (newTodo === ""){
        showAlert("danger","Please enter a todo..")

    }
    else{
        addTodoToUi(newTodo);
        showAlert("success","Todo has been added successfully..")
    }
e.preventDefault();
}

function addTodoToUi(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a"); // Yeni bir a elementi yarat

    link.href = "#";
    link.className = "delete-item";
    listItem.className = "list-group-item d-flex justify-content-between";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
}

function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();

        showAlert("success","Todo was successfully deleted..")
    }
}

function clearAllTodos(e){
    if(confirm("Are you sure you want to delete all todos?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
    }
    e.preventDefault();
}
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000)
}