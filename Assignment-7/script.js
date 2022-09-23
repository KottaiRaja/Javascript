let profileDetails = {

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",

    name: "Kottai Raja",

    age: 21

};

let div = document.getElementById("div");
let img = document.getElementById("imgid");
img.src=profileDetails.imgSrc;
img.style.width="250px"
div.style.backgroundColor="purple";
div.style.width="400px"
div.style.margin="auto";
div.style.marginTop="40px";
div.style.paddingTop="60px"
div.style.paddingBottom="100px"
div.classList.add("text-center");
div.style.borderRadius="50px"
div.appendChild(img);

let p = document.createElement("h3");
p.textContent=profileDetails.name;
p.style.color="white";
p.style.paddingTop="10px"
div.appendChild(p);

let h3 = document.createElement("h3");
h3.textContent="Age: " + profileDetails.age;
h3.style.color="white";
h3.style.paddingTop="5px"
div.appendChild(h3);

