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

 //filtering function
 
/*let item = document.querySelectorAll('option');
let ul = document.querySelector('select')
item.forEach(el => {
    el.addEventListener('click', function(){
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    })
})*/






 /*filter.addEventListener("click", function(element){
        
    
    

    item.


     if(element.target.option = "item"){
        //remove and add active class
      
        filter.contains("active").remove("active")
        element.target.classList.add("active"); 
      
     
        
     }
   const list = document.querySelectorAll('.list');

    if(element.target.classList.contains("item")){
        console.log(element);
        //remove and add active class
        filter.querySelector(".active").classList.remove("active");
        element.target.classList.add("active");
        console.log(element);
        //get data-name of selected items and store in filtername
        let filterName = element.target.getAttribute("data-name");
        list.forEach((li) => {

            //get data name value
            let filterList = li.getAttribute("data-name");
            console.log(filterList);

            if( (filterList == filterName) || (filterName == "all")){
                li.classList.add("show");
                li.classList.remove("hide");
            }else{
                li.classList.add("hide");
                li.classList.remove("show");
            }
        })
    }*/









filter.addEventListener('click', filterItem);





function filterItem(event){
   // const items = document.querySelectorAll(".list");
   // const itemsJob = event.target.attributes.job.value;

    for(let i=1; i < event.length; i++){
        switch(event.target.value){
            case "all":
                items[i].style.display = "flex";
                break;
            case "completed":
            if(items[i].classList.contains('fa-check-circle')){
                items[i].style.display = "flex";
            }else {
                items[i].style.display = "none";
            }
            break;
            case "uncompleted":
            if(!items[i].classList.contains('fa-trash')){
                items[i].style.display = "flex";
            }else{
                items[i].style.display = "none";
            }
            break;
        }
    }
} 

