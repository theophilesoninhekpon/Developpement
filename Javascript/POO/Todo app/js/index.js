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
//Ajout d'une tâche
function addTodo(todo){

    todoArray.push(todo);
    
}


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

document.addEventListener("DOMContentLoaded", ()=>{
    
    let input = document.getElementById("todo");
    
    todos = document.getElementById("todos");
    defaultStatement = document.querySelector("#todos > span");

    let todoCount = 0;
    
    displayTodo();

    document.querySelector("form").addEventListener("submit", (event)=>{

        event.preventDefault();

    })

    document.addEventListener("keydown", (event)=>{

        if(event.code === "Enter"){

            todoCount++;
            let todoDescription = input.value; 

            if(typeof todoDescription === "string"){
                
                let todo = {};
                todo.id = todoCount;
                todo.description = todoDescription;
                todo.isChecked = false;
                todo.checkCount = 0;
                addTodo(todo);
                input.value = "";

                displayTodo();
                
            } else{
                
                alert("Veuillez entrer une chaîne de caractères valide");
                
            }
        
        }
        
        
    })

    todos.addEventListener("click",(event)=>{

        if(event.target.classList.contains("checkbtn")){

            let targetParent = event.target.parentElement;
            let parentId = targetParent.id;
            
            console.log(element)
            element.checkTodo();

        } else if((event.target.classList.contains("check-icon"))){

            let targetParent = event.target.parentElement;
            let parentId = targetParent.parentElement.id;
            let relativeTodoId = parseInt(parentId.slice(5, parentId.length));
            console.log(relativeTodoId)
            let element = todoArray[relativeTodoId - 1];
            console.log(element)
            element.checkTodo();

        } else if(event.target.classList.contains("deletebtn")){

            let targetParent = event.target.parentElement;
            let parentId = targetParent.id;
            let relativeTodoId = parseInt(parentId.slice(5, parentId.length));
            console.log(relativeTodoId)
            let element = todoArray[relativeTodoId - 1];
            console.log(element)
            element.deleteTodo();
            console.log(todoArray)
            
        } else if((event.target.classList.contains("delete-icon"))){
            
            let targetParent = event.target.parentElement;
            let parentId = targetParent.parentElement.id;
            let relativeTodoId = parseInt(parentId.slice(5, parentId.length));
            console.log(relativeTodoId)
            let element = todoArray[relativeTodoId - 1];
            console.log(element)
            element.deleteTodo();
            console.log(todoArray)
            
        }

    })

    // todoArray.forEach((element) => {

    //     // Bouton de validation
    //     let checkCount = 0;
    //     todoCheckBtn = document.querySelector(`#todo-${element.todoId} > .checkbtn`);
                
    //     // Au click du bouton de validation
    //     todoCheckBtn.addEventListener("click", ()=>{
            
    //         console.log(todoCheckBtn)
    //         console.log("Checké !")
    //         checkCount++;
    //         element.checkTodo(checkCount);
    
    //     })
    
    //     // Bouton de suppression
    //     todoDeleteBtn = document.querySelector(`#todo-${element.todoId} > .deletebtn`);


    //     // Au click du bouton de validation

    //     todoDeleteBtn.addEventListener("click", ()=>{
            
    //         console.log("Todo supprimé !")
    //         element.deleteTodo();
        
    //     })


    // })

})