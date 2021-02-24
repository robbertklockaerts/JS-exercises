/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        var arr = [];
        while(arr.length < 10){
            var r = Math.floor(Math.random() * 100) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        document.getElementById("n-1").innerHTML = arr[0];
        document.getElementById("n-2").innerHTML = arr[1];
        document.getElementById("n-3").innerHTML = arr[2];
        document.getElementById("n-4").innerHTML = arr[3];
        document.getElementById("n-5").innerHTML = arr[4];
        document.getElementById("n-6").innerHTML = arr[5];
        document.getElementById("n-7").innerHTML = arr[6];
        document.getElementById("n-8").innerHTML = arr[7];
        document.getElementById("n-9").innerHTML = arr[8];
        document.getElementById("n-10").innerHTML = arr[9];

        document.getElementById("min").innerHTML =  Math.min(...arr) ;
        document.getElementById("max").innerHTML =  Math.max(...arr) ;

        var sum = arr.reduce(function(a, b){
            return a + b;
        }, 0); 


        document.getElementById("sum").innerHTML =  sum;

        var arraverage = arr.reduce((a,b) => a + b, 0) / arr.length;
        {console.log(arraverage)}

        document.getElementById("average").innerHTML =  arraverage


    
}); 
})();
