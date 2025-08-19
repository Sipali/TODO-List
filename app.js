let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let listItems = document.createElement("li"); 
    listItems.innerText = inp.value; 

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete");
 listItems.appendChild(delbtn);

 
 ul.addEventListener("click",function(events){
    console.log(events.target.nodeName) 
    console.log("button clicked");
    if(events.target.nodeName == "BUTTON"){
        let listitem = events.target.parentElement; 
        listitem.remove();
// console.log(listitem);
    }
 })
     ul.appendChild(listItems);
    console.log(inp.value);
    inp.value = ""; 
});