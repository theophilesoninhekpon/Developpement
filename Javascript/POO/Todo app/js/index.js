'use strict'


/********************************************************************************
 *************************************VARIABLES*********************************
 *******************************************************************************/
let todo;
let todos;
let todoCheckBtn;
let todoDeleteBtn;
let todoArray = [];
let defaultStatement;
let todoList;
let storageKey = 0;
let existingTodos = [];

//Ajout d'une tâche
function addTodo(todo){
    
    localStorage.setItem(`todo${todoCount}`, JSON.stringify(todo));
    for(todo in localStorage){
        if(todo.startsWith("todo")){
            console.log(localStorage[todo])
        }
    }
    todoArray.push(todo);
    
}

// Validation de la tâche
function checkTodo(todoId){

        // On récupère l'élément du tableau qui correspond à la tâche actuelle
        let element = todoArray.filter((todoElt)=> todoElt.id === parseInt(todoId))[0];
        element.checkCount++;

        // Icône de validation de la tâche
        let currentTodo = document.getElementById(`${element.id}`);
        let todoBtn = currentTodo.childNodes[0];
        element.isChecked = true;
        let todoDescription = currentTodo.childNodes[1];

        // Affichage de l'icône check dans le bouton de validation
        if(element.checkCount % 2 === 1){

            todoBtn.classList.add("validate","far", "fa-check-circle");
            todoDescription.style.textDecoration = "line-through";
            
        // Au second clic, on supprime l'icône 
        } else{
            
            element.isChecked = false;
            todoBtn.classList.remove("validate","far", "fa-check-circle");
            todoDescription.style.textDecoration = "none";

        }
}

// Modification de la tâche
function updateTodo(todoId){

    // On récupère l'élément du tableau qui correspond à la tâche actuelle
    let element = todoArray.filter((todoElt)=> todoElt.id === parseInt(todoId))[0];

    let currentTodo = document.getElementById(`${element.id}`);
    let todoDescription = currentTodo.childNodes[1].innerHTML;

    element.description = todoDescription;
    console.log(todoArray)

}

// Suppression de la tâche
function deleteTodo(todoId){
        
        // On récupère l'élément du tableau qui correspond à la tâche actuelle
        let element = todoArray.filter((todoElt)=> todoElt.id === parseInt(todoId))[0];
        
        todoArray.splice(todoArray.indexOf(element), 1);

        // Suppression de la tâche du DOM
        let currentTodo = document.getElementById(`${element.id}`);
        todoList.removeChild(currentTodo);

    }


// Affichage de la tâche dans le DOM
function displayTodo(){
    
    if(todoArray.length > 0){
        
        todoList = document.getElementById("todo-list");
        defaultStatement.style.display = "none";

        let element = todoArray[todoArray.length - 1];
       
         // élément de liste
        let todoListItem = document.createElement("li");
        todoListItem.classList.add("todo");
        todoListItem.setAttribute("id", `${element.id}`);

        // bouton de validation
        let checkBtn = document.createElement("span");
        checkBtn.classList.add("checkbtn");
        
        // description de la tâche
        let todoDescription = document.createElement("span");
        todoDescription.classList.add("todo-description");
        todoDescription.setAttribute("contenteditable", "true");
        todoDescription.innerHTML = element.description;

        // bouton de suppression de la tâche
        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("deletebtn", "fas", "fa-times");

        // Ajout des noeuds dans le Dom
        todoListItem.appendChild(checkBtn);
        todoListItem.appendChild(todoDescription);
        todoListItem.appendChild(deleteBtn);
        todoList.append(todoListItem);

    } else{

        defaultStatement.style.display = "block";

    }

}


// Affichage de toutes les tâches
function showAllTasks(){

    let allLiItems = document.querySelectorAll("li.todo");

    allLiItems.forEach((element) => {

            element.style.display = "flex";

    })

}

// Affichage des tâches terminées
function showCheckedTasks(){

    let allLiItems = document.querySelectorAll("li.todo");

    allLiItems.forEach((element) => {

        if(getComputedStyle(element.childNodes[1]).textDecorationLine === "none"){

            element.style.display = "none";

        } else{

            element.style.display = "flex";

        }
        
    })

}

// Affichage des tâches non terminées
function showUncheckedTasks(){

    let allLiItems = document.querySelectorAll("li.todo");

    allLiItems.forEach((element) => {
        
        if(getComputedStyle(element.childNodes[1]).textDecorationLine === "line-through"){

            element.style.display = "none";

        } else{

            element.style.display = "flex";

        }
    })

}

// Affichage du nombre de tâches
function showTasksNumber(){

    let itemNumber = document.querySelectorAll("li.todo").length;
    document.getElementById("item-number").innerHTML= ` ${itemNumber} tâches`;

}



document.addEventListener("DOMContentLoaded", ()=>{
    
    let input = document.getElementById("todo");
    
    todos = document.getElementById("todos");
    defaultStatement = document.querySelector("#todos > span");

    let todoCount = 0;
   
    displayTodo();
    showTasksNumber();

    document.querySelector("form").addEventListener("submit", (event)=>{

        event.preventDefault();

    })

    // Création de la tâche au tape de la touche entrée
    document.addEventListener("keydown", (event)=>{

        if(event.code === "Enter"){

            todoCount++;
            let todoDescription = input.value; 

            if(typeof todoDescription === "string"){
                
                let todo = {};
                todo.id = todoCount;
                todo.description = todoDescription
                todo.isChecked = false;
                todo.checkCount = 0;
                
                addTodo(todo);
                input.value = "";

                displayTodo();
                showTasksNumber();
                
            } else{
                
                alert("Veuillez entrer une chaîne de caractères valide");
                
            }
        
        }
        
        
    })

    // Validation d'une tâche
    todos.addEventListener("click",(event)=>{
        
        let targetParentId = event.target.parentElement.id;
        
        if(event.target.classList.contains("checkbtn")){
            
            checkTodo(targetParentId);

        } else if(event.target.classList.contains("deletebtn")){

            deleteTodo(targetParentId);
            showTasksNumber();

            if(todoArray.length === 0){
                displayTodo();
            }

        }
        
        
    })

    // Modification de la description
    todos.addEventListener("input",(event)=>{
        
        let targetParentId = event.target.parentElement.id;

        if(event.target.classList.contains("todo-description")){

            updateTodo(targetParentId);

        }

    })


    let completedFilterBtn = document.getElementById("completed");
    completedFilterBtn.addEventListener("click", ()=>{

        console.log("éléments cochés")
        showCheckedTasks();

    })

    let activeFilterBtn = document.getElementById("active");
    activeFilterBtn.addEventListener("click", ()=>{

        console.log("éléments décochés")
        showUncheckedTasks();

    })

    let allFilterBtn = document.getElementById("all");
    allFilterBtn.addEventListener("click", ()=>{

        console.log("tous les éléments")
        showAllTasks();

    })

})