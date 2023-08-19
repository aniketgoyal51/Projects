let button= document.getElementById("add");
let ul = document.getElementById("listitem");
let textvalue = document.getElementById("text");

button.addEventListener("click",()=>{
    let li = document.createElement("li");
    li.textContent = textvalue.value;
    ul.appendChild(li);
    textvalue.value="";
})