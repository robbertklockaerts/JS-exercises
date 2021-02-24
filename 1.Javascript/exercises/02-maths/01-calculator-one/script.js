/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", (sum) =>
     {
    var a = parseInt (document.getElementById("op-one").value);
    var b = parseInt (document.getElementById("op-two").value);
    var sum = ( a + b);
    alert (sum);


    });

    document.getElementById("substraction").addEventListener("click", (aftrek) => {
        var a = parseInt (document.getElementById("op-one").value);
        var b = parseInt (document.getElementById("op-two").value);
        var aftrek = ( a - b);
        alert (aftrek);


    });

    document.getElementById("multiplication").addEventListener("click", (maal) => {
        var a = parseInt (document.getElementById("op-one").value);
        var b = parseInt (document.getElementById("op-two").value);
        var maal = ( a * b);
        alert (maal);
    });

    document.getElementById("division").addEventListener("click", (gedeeld) => {
       
            var a = parseInt (document.getElementById("op-one").value);
            var b = parseInt (document.getElementById("op-two").value);
            var gedeeld = ( a / b);
            alert (gedeeld);
    });
})();
