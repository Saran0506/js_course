// console.dir(document);
// alert("hi");
// let name=window.prompt("enter the name","saran");
// console.log(name);

//LOAD EVENTS++++++++++++++++++++++++++++++++++++++++++++++++

//it is used to acces the html elements once get it submitted

// DOM METHODS+++++++++++++++++++++++++++++++++++++++

//1)document.getElementById >>>
//2)document.getElementsByclassname>>>
//3)document.getElementByTagName>>>>
//4)Finding Elements by CSS selectors
//5)queryselctor and querySelectorAll()


// DOM getElementById>>>>>>>>>>>>>>>>>>

// var heading1=document.getElementById('saran');
// console.log(heading1.value);

//CREATING ELEMENTS+_+_+_+_+_+_+_+_+_+++_+_+__

const main=document.getElementById("main");

const div=document.createElement("div");
const text=document.createTextNode("food is updated");
div.append(text)
console.log(div);


