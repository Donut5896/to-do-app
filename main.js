const inputBar = document.getElementById('inputbar');
const addBtn = document.querySelector(".plus-btn");
const lists = document.getElementById('lists');
const filter = document.querySelector('.categories');






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
                                <i class="fa ${DONE} co" id="${id}" job="complete" value="completed"></i>
                                <i class="fa fa-trash" id="${id}" job="delete" value="uncompleted"></i>
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




filter.addEventListener('click', filterItem)


function filterItem(event){
 
   const items = lists.childNodes;

   items.forEach(function(El) {
       //make sure the node type is li
      
       if(El.nodeName === "LI"){
            switch(event.target.value){
                case 'all':
                    El.style.display = "flex";
            break;

                case 'completed':
                    //focus on p tag inside li 
                if(El.children[0].classList.contains("lineThrough")){
                    El.style.display = "flex";
                }else{
                    El.style.display = "none";
                }
                break;

                case "uncompleted":
                    if(El.children[0].classList.contains("lineThrough")){
                        El.style.display = "none";
                    }else{
                        El.style.display = "flex";
                    }
                    break;
            }
       }
   }); 

 // another way using for loop
   /*for(let i=1; i < items.length; i++){
       if(items[i].nodeName === "LI"){
        switch(event.target.value){
            case "all":
                items[i].style.display = "flex";
                break;
            case "completed":
            if(items[i].children[0].classList.contains('lineThrough')){
                items[i].style.display = 'flex';
            }else{
                items[i].style.display = "none";
            }
            break;
            case "uncompleted":
            if(items[i].children[0].classList.contains('lineThrough')){
                items[i].style.display = "none";
            }else{
                items[i].style.display = "flex";
            }
            break;
           
         }
        }
         
    } */
} 

