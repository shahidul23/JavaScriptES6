// __geta attribute__//
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
div.style.backgroundColor = "green";
div.style.color = "White";
div.style.fontSize = "14px";

// div.innerText = "Hello JavaScript";

// __set attribute__//
let para = document.querySelector("p");
console.log(para);
para.setAttribute("class", "new-classs");

let newbtn = document.createElement("button");
console.dir(newbtn);
newbtn.innerText = "click me!";

//__append__//
div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
para.after(newbtn);

let frotsName  = document.createElement("h2");
frotsName.innerText = "Forts List";
div.before(frotsName);
para.remove();
