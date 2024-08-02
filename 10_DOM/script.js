const div = document.createElement("div");
const h = document.createElement("h1");
const h1 = document.createElement("h1");
const h2 = document.createElement("h1");
const h3 = document.createElement("h1");
h.textContent = "Hello world 0 ";
h1.textContent = "Hello world 1 ";
h2.textContent = "Hello world 2 ";
h3.textContent = "Hello world 3 ";
div.appendChild(h);
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
document.body.appendChild(div)
console.log(div.childNodes[2])
console.log(div.firstChild)
console.log(div.lastChild)
console.log(div.ATTRIBUTE_NODE)

const c = document.querySelector("div")
const d = document.querySelectorAll("h1") 
// manipulating h1 color
d.forEach(function(env){
    console.log(env.style.backgroundColor = "green")
})