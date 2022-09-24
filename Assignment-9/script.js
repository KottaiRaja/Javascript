let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let user = document.getElementById("user");
let result = document.getElementById("result");
let img = document.getElementById("img1");
img.style.width="300px";

sp1.style.backgroundColor="lightgray";
sp1.style.padding="9px";
sp2.style.backgroundColor="lightgray";
sp2.style.padding="9px";
sp1.style.borderRadius="10px";
sp2.style.borderRadius="10px";

let success = "congratulations";
let tryagain = "Try Again";

function reset(){
   let r1 = Math.random() * 100;
   let r2 = Math.random() * 100;
   sp1.textContent=Math.ceil(r1);
   sp2.textContent=Math.ceil(r2);
   result.textContent = "";
   user.value = "";
   result.style.padding="";
}
reset();

function check (){

    let rin1= parseInt(sp1.textContent);
    let rin2 = parseInt(sp2.textContent);
    let userint = parseInt(user.value);
    let userval = rin1 + rin2;
    if(userval===userint){
        result.textContent=success;
        result.style.backgroundColor="green";
        result.style.color="white";
        result.style.padding="10px";
    }else{
        result.textContent=tryagain;
        result.style.backgroundColor="#000000";
        result.style.color="white";
        result.style.padding="10px";
    }
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.style.backgroundColor="green";
btn2.style.backgroundColor="red";
btn1.style.color="white";
btn2.style.color="white";
btn1.style.width="100px";
btn2.style.width="100px";
btn1.style.border="0";
btn2.style.border="0";
btn1.style.borderRadius="50px";
btn2.style.borderRadius="50px";


result.style.width="300px";
result.style.borderRadius="30px";
user.style.borderRadius="30px";


let div1 = document.getElementById("div1");
div1.style.backgroundColor="pink";
div1.style.width="500px";
div1.style.borderRadius="50px";