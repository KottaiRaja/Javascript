let a = document.getElementById("img1");
let b = document.getElementById("img2");
let c = document.getElementById("button1");
let d = document.getElementById("button2");
let e = document.getElementById("p");

function on(){
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    c.style.backgroundColor="green";
    d.style.backgroundColor="";
    e.textContent="Switched On"


}

function off(){
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    c.style.backgroundColor="";
    d.style.backgroundColor="red";
    e.textContent="Switched Off"

}
