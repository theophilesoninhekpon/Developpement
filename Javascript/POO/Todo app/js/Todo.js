'use strict'

class Todo {

    #description;
    #isChecked;
    #id;
    #checkCount;

    constructor(description, todoId){

        this.#description = description;
        this.#isChecked = false;
        this.#id = todoId;
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

    get id(){

        return this.#id;

    }

    set id(newId){

        this.#id = newId;

    }


    // Méthode d'ajout de la tâche à la liste
    addTodo(){

       
       
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