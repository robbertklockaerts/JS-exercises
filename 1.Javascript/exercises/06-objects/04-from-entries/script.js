/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here


    document.getElementById("run").addEventListener("click", () => {
       

 var array1 = [keys[0], values[0]];
 var array2= [keys[1], values[1]];
 var array3= [keys[2], values[2]];
 var array4= [keys[3], values[3]];

 var obj1 = [array1,array2,array3,array4];
 console.log(obj1);

 console.log(Object.fromEntries(obj1));

});
 
    })(); 

    /*

    1/
    const entries = new Map ([[keys[0]]+[values[0]]]);

    const obj = Object.fromEntries(entries);

    console.log(obj)
    
    2/
    const obj = [];
        for (i=0; i<(keys.length); i++) {
            obj.push([keys[i],values[i]]);
            console.log(obj)
        }
        console.log(Object.fromEntries(obj));


    */

