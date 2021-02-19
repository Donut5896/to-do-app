const inputBar = document.getElementById('inputbar');
const addBtn = document.querySelector(".plus-btn");
const listContainer = document.querySelector('.list-container');
const lists = document.getElementById('lists');


function main(){
addBtn.addEventListener('click', (e) => {
    let inputList = inputBar.value;
    let list = document.createElement('li');
    list.innerHTML = `
                        <p>${inputList}</p>
                        <div class="buttons">
                            <button id="check-btn" class="check-btn">
                                <i class="fa fa-check"></i>
                            </button>
                            <button id="delete-btn" class="delete-btn">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>   
                    `;
    list.classList.add("list")
    list.id = 'list';
    lists.appendChild(list);


      
   
   

let checkBtn = document.querySelectorAll('.check-btn');
let deleteBtn = document.querySelectorAll('.delete-btn');
  

 

    function dount(){
       let list = document.querySelectorAll('.list');
        list.forEach(function(e) {
        e.addEventListener('click', () => {
             e.style.textDecoration = 'line-through';      
        })  
    })    
  
    }
  
 checkBtn.forEach(dount);
  deleteBtn.forEach(waffle);

    function waffle(){
        let list = document.querySelectorAll('.list');
        list.forEach(function(i) {
        i.addEventListener('click', () => {
             i.style.display = 'none';      
        })  
    })    
    }

  
  
  
  });
    
  


}

  
    
 //check button
function check(e){
        let list = document.querySelectorAll('.list');
        list.forEach(function(e) {
        e.addEventListener('click', () => {
             e.style.textDecoration = 'line-through'; 
             console.log(list);
        })
       
    })
}
  
//delete button
function deleted(){
    let list = document.querySelectorAll('.list');
    list.forEach(function(i){
        i.addEventListener('click', () => {
           
        })
    })
}





main();