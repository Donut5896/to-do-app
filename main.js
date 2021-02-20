const inputBar = document.getElementById('inputbar');
const addBtn = document.querySelector(".plus-btn");
const lists = document.getElementById('lists');



//delete and check functionality
function deleteItem(e){
    const item = e.target;
     console.log(item);
    //delete items
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove;
        })
        console.log(item.classList[0]);
    }
    //checked items
    if(item.classList[0] === "check-btn"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completedItem")
          console.log(todo);
    }
}



// create lists with delete and check buttons
function addTodo(event){
    event.preventDefault();
    // todo li
    const todoLi = document.createElement('li');
    todoLi.innerHTML = `<p>${inputBar.value}</p>`;
    todoLi.classList.add('list');
    lists.appendChild(todoLi);
    //if input equals to null
    if(inputBar.value === ""){
        return null;
    }
    // button div
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    

    //check button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = ` <i class="fa fa-check"></i>`;
    checkedButton.classList.add('check-btn');
    buttons.appendChild(checkedButton)
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = ` <i class="fa fa-trash"></i>`;
    deleteButton.classList.add('delete-btn');
    buttons.appendChild(deleteButton); 
    todoLi.appendChild(buttons);

    //clear todo input bar
    inputBar.value = "";
}





//event listeners
addBtn.addEventListener('click', addTodo);
lists.addEventListener('click', deleteItem);






/*function createListItem(event){
    //let inputList = inputBar.value;

    let list = document.createElement('li');
    list.classList.add("list")
    const attr = document.createAttribute('data-id');
    attr.value = id;
    list.setAttributeNode(attr);
    list.innerHTML = `
                        <p>${value}</p>
                        <div class="buttons">
                            <button id="check-btn" class="check-btn">
                                <i class="fa fa-check"></i>
                            </button>
                            <button id="delete-btn" class="delete-btn">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>   
                    `;

    
   

const checkBtn = list.querySelector('.check-btn');
const deleteBtn = list.querySelector('.delete-btn'); 
deleteBtn.addEventListener('click', deleteItem);

 lists.appendChild(list); 
 console.log(list)
}

   /* function dount(){
       let list = document.querySelectorAll('.list');
        list.forEach(function(e) {
        e.addEventListener('click', () => {
             e.style.textDecoration = 'line-through';      
        })  
    })    
  
    }
  
 checkBtn.forEach(dount);*
    
  


}

 //check button 
/*function check(e){
        let list = document.querySelectorAll('.list');
        list.forEach(function(e) {
        e.addEventListener('click', () => {
        e.style.textDecoration = 'line-through'; 
        console.log(list);
        })
    })
} */


//delete button





