'use strict'

import Todo from "./Todo.js";

document.addEventListener("DOMContentLoaded", ()=>{

    let input = document.getElementById("todo");
    let todo;
    let todoCheckBtn;
    let todoDeleteBtn;
    let todoArray = [];
    let todos = document.getElementById("todos");
    todos.innerHTML = `<ul id="todo-list"></ul>`;
    let todoList = document.getElementById("todo-list");
    let todoCount = 0;

    document.querySelector("form").addEventListener("submit", (event)=>{

        event.preventDefault();

    })

    document.addEventListener("keydown", (event)=>{

        if(event.code === "Enter"){

            todoCount++;
            let todoDescription = input.value; 

            if(typeof todoDescription === "string"){
                
                todo = new Todo(todoDescription, todoCount);
                todo.addTodo();
                input.value = "";
                todoArray.push(todo);
                
            } else{
                
                alert("Veuillez entrer une chaîne de caractères valide");
                
            }
            
            console.log(todoArray)

         
        
        }
        
        
    })

    todos.addEventListener("click",(event)=>{

        if(event.target.classList.contains("checkbtn")){

            let targetParent = event.target.parentElement;
            let parentId = targetParent.id;
            let relativeTodoId = parseInt(parentId.slice(5, parentId.length));
            console.log(relativeTodoId)
            let element = todoArray[relativeTodoId - 1];
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