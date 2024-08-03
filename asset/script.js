
//------  the IIFE fuction for defult item ------
(function(){
    for (let i = 0; i < 3; i++) 
    {
        const li = document.createElement('li');
        li.textContent = "item"+ (i+1);
        document.getElementById('itemList').appendChild(li);


        li.addEventListener('click', removeItem)

    }
   
})();


//------  this section for add or remove items ------
document.getElementById('addItemButton').addEventListener('click', addItem);

function addItem() {

    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const li = document.createElement('li');
        li.textContent = itemText;
        
      
        li.addEventListener('click', removeItem)

        document.getElementById('itemList').appendChild(li);

        itemInput.value = ""; 
    }
}

// remove
function removeItem(event) {
    const li = event.target;

    li.classList.add('removing');
    
    li.addEventListener('transitionend',function(){
        li.remove();
    })

}