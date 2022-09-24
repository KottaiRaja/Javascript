let div1 = document.getElementById("div1");
let btn1 = document.getElementById("bt1");
let main = document.getElementById("main");
let body = document.getElementById("body");
div1.style.padding="100px";
div1.style.width="500px";

let bt1 = document.getElementById("bt1");
let bgColor = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
div1.style.borderRadius="20px";
function change(){
    div1.style.backgroundColor = bgColor[Math.ceil(Math.random() * bgColor.length)];
    main.style.backgroundColor = bgColor[Math.ceil(Math.random() * bgColor.length)];
    body.style.backgroundColor = bgColor[Math.ceil(Math.random() * bgColor.length)];
    btn1.style.backgroundColor = bgColor[Math.ceil(Math.random() * bgColor.length)];
}
change();

main.style.padding="100px";
main.style.width="800px";
main.style.borderRadius="40px";
