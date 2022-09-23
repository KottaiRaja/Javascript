let a = document.getElementById("div");

a.classList.add("text-center","p-5","bg-danger");
a.style.width="400px";
a.style.margin="auto";
a.style.marginTop="200px";
a.style.boxShadow="2px 3px 4px";
a.style.borderRadius="90px";

let b = document.createElement("input");
b.type="checkbox";
b.id="inid";


a.appendChild(b);

let label = document.createElement("label");
label.id="lbid";
label.textContent="I am a Label";
label.style.marginLeft="7px";
label.style.color="white";

let i =0;
b.onclick=function(){
    if (i%2==0) {

        label.style.textDecoration = "line-through";
    }else{
        label.style.textDecoration="none";
    }
    i=i+1;
}



a.appendChild(label);


