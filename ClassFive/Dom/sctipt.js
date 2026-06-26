let h2 = document.querySelector("h2");
console.dir(h2)
h2.innerText = h2.innerText + " "+"from Apna College Student";

let divs = document.querySelectorAll(".box");
console.log(divs);
const str = ["Hello World", "Wellcome to ApnaCollege", "Md. Shahidul Islam"]
for(let i = 0; i<divs.length; i++)
{
    divs[i].innerText = divs[i].innerText+ str[i];
}
