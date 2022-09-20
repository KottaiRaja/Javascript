let a = document.getElementById("p");
a.style.fontSize = "100px";
a.style.fontWeight="bold";


function sum()
{
    let pv=a.textContent;
    let uv=parseInt(pv)+1;
    if(uv>0){
        a.style.color="green";
    }
    a.textContent=uv;
}
function sub()
{
    let pv=a.textContent;
    let uv=parseInt(pv)-1;
    if(uv<0){
        a.style.color="red";
    }
    a.textContent=uv;
}
function set()
{
    let pv=0;
    a.textContent=pv;
    a.style.color="black";
}