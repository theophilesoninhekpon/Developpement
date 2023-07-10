'use strict'

class Todo {

    #description;
    #isChecked;
    #todoId;
    #checkCount;
    todoWrapper = document.getElementById("todo-list");

    constructor(description, todoId){

        this.#description = description;
        this.#isChecked = false;
        this.#todoId = todoId;
        this.#checkCount = 0;

    }

    get description(){

        return this.#description;

    }

    set description(newDescription){

        this.#description = newDescription;

    }

    get isChecked(){

        return this.#isChecked;

    }

    set isChecked(newCheckState){

        this.#isChecked = newCheckState;

    }

    get todoId(){

        return this.#todoId;

    }

    set todoId(newId){

        this.#todoId = newId;

    }


    // Méthode d'ajout de la tâche à la liste
    addTodo(){

        // élément de liste
        const todoListItem = document.createElement("li");
        todoListItem.classList.add("todo");
        todoListItem.setAttribute("id", `todo-${this.#todoId}`);

        // bouton de validation
        const checkBtn = document.createElement("button");
        checkBtn.classList.add("checkbtn");

        // description de la tâche
        const todoDescription = document.createElement("span");
        todoDescription.classList.add("todo-description");
        todoDescription.setAttribute("contenteditable", "true");
        todoDescription.innerHTML = this.#description;

        // bouton de suppression de la tâche
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletebtn");

        // Icone de suppression
        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon", "fas", "fa-times");

        // Ajout des noeuds dans le Dom
        deleteBtn.appendChild((deleteIcon));
        todoListItem.appendChild(checkBtn);
        todoListItem.appendChild(todoDescription);
        todoListItem.appendChild(deleteBtn);
        this.todoWrapper.appendChild(todoListItem);
       
    }


    // Modification de la tâche
    updateTodo(){


    }

    // Validation de la tâche
    checkTodo(){

        this.#checkCount++;
        let todoBtn = document.querySelector(`#todo-${this.#todoId} > .checkbtn`);
        this.#isChecked = true;
        let todoDescription = document.querySelector(`#todo-${this.#todoId} > .todo-description`);

        // Icône de validation de la tâche
        const checkIcon = document.createElement("span");
        checkIcon.classList.add("check-icon", "far", "fa-check-circle");

        // Affichage de l'icône check dans le bouton de validation
        if(this.#checkCount % 2 === 1){

            todoBtn.appendChild(checkIcon);
            todoDescription.style.textDecoration = "line-through";
            
        // Au second clic, on supprime l'icône 
        } else{
            
            const todoCheckIcon = document.querySelector(`#todo-${this.#todoId} > .checkbtn > .check-icon`);
            todoBtn.removeChild(todoCheckIcon);
            todoDescription.style.textDecoration = "none";

        }


    }


    // Suppression de la tâche
    deleteTodo(){

        const todo = document.querySelector(`#todo-${this.#todoId}`);
        this.todoWrapper.removeChild(todo);

    }


}

export default Todo;