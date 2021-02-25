/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    var p = document.getElementById("source").getAttribute("data-image");
    var img  =document.createElement("img");
    var target = document.getElementById("target");
    target.appendChild(img);
    img.src = p;
    document.getElementsByTagName("span")[1].removeAttribute("source");

    var c = document.getElementById("id")

   //alert("congé");




    


    console.log(p,img,target,c)



})();



// console.dir(document)   examine the document object
// console.dir(document.title)   examine the document object
// ocument.title = 123; 
// console.dir(document.doctype)
// console.dir(document.head)
// console.dir(document.all)    links , forms , images , ...
// innerText and TextContent
// style element in camel 
// parent element = parent node
// not childNodes => children  (doesn't select whitespace)    as f irstElementchild 