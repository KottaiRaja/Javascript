let a = document.getElementById("inid");
let b = document.getElementById("ulid");
let btn = document.getElementById("btn1");
btn.style.borderRadius="10px";
btn.style.width="65px";
btn.style.height="35px";
btn.style.border="0";

function cart(){
    let list = document.createElement("li");
    list.textContent = a.value;
    a.value ="";
    b.appendChild(list); 
}
