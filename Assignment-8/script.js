let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let div = document.getElementById("div");
div.style.marginLeft="500px";
div.style.marginTop="50px";
let h3 = document.createElement("h3");
h3.textContent = recipeObj.title;
h3.style.marginLeft="60px";
h3.style.color="red";
div.appendChild(h3);

let img1 = document.getElementById("imgid");
img1.src = recipeObj.imgSrc;
img1.style.width="300px";
div.appendChild(img1);


let div1 = document.getElementById("div1");
div1.style.marginLeft="500px";
div1.style.backgroundColor="#7C83BC";
div1.style.marginTop="30px";
div1.style.width="300px";
div1.style.paddingTop="30px";
div1.style.paddingLeft="30px";
div1.style.paddingBottom="30px";
div1.style.borderRadius="20px";

let ulist = document.getElementById("ulist");
let ing = recipeObj.ingredients;

for(let i of ing){


    let list = document.createElement("li");
    list.textContent=i;
    list.style.color="white";
    ulist.appendChild(list);
}
