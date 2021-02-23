const inputBar = document.getElementById('inputbar');
const addBtn = document.querySelector(".plus-btn");
const lists = document.getElementById('lists');






// create lists with delete and check buttons
/*function addTodo(event){
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

*/





//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


//variable
let LIST = [];
let id = 0;


function createListItem( toDo, id, done, trash){
    
    if(trash){return}
    const DONE = done? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGH : "";
    
    const item = `<li class="list">
                        <p class="text ${LINE}">${toDo}</p>
                        <div class="buttons">
                                <i class="fa ${DONE} co" id="${id}" job="complete"></i>
                                <i class="fa fa-trash" id="${id}" job="delete"></i>
                        </div> 
                    </li>  
                    `;

    const position = "beforeend";
    lists.insertAdjacentHTML(position, item);
   

}


// add item to the list
document.addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
        const toDo = inputBar.value;

        if(toDo){
            createListItem(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            })
            id++;
        }
        inputBar.value = "";
    }
})
  
// check button
function checkbutton(element){

     element.classList.toggle(CHECK);
     element.classList.toggle(UNCHECK);
     element.parentNode.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
     //updat the list
     LIST[element.id].done = LIST[element.id].done ? false : true; 
     
}
  
 // remove button
 function deletebutton(item){
    item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode);
    //update the list
    LIST[item.id].trash = true;
 }
    
  
//target the item created dinamically
lists.addEventListener("click", function(event){
    const element = event.target;
    const itemJob = element.attributes.job.value;

    if(itemJob == "complete"){
         checkbutton(element);
    }else if(itemJob == "delete"){
        deletebutton(element);
    }
})




