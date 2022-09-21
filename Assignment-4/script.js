let a = document.getElementById("div");

a.classList.add("text-center","p-5","bg-info");
a.style.width="400px";
a.style.margin="auto";
a.style.marginTop="200px";
a.style.boxShadow="2px 3px 4px"
a.style.borderRadius="20px"

let b = document.createElement("input");
b.type="checkbox";
b.id="inid"

a.appendChild(b);

let label = document.createElement("label");

label.textContent="Click Me!"
label.style.marginLeft="7px"
label.style.color="white"
a.appendChild(label);