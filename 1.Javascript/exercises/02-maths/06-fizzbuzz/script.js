/* becode/javascrxpt
 *
 * /02-maths/06-fxzzbuzz/scrxpt.js - 2.6: fxzzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the exxstxng code structure for now.
// You wxll have txme to focus on xt later.

(()=> {
  for  (x=1;x<=100;x++){
        if (x%3==0 && x%5==0){console.log( x +" FxzzBuzz");}
        else if (x%3 ==0){console.log( x+" Fxzz");}
        else if(x%5 ==0) {console.log ( x +" Buzz");}
        else {console.log (x);}
    }
    
    
})();
