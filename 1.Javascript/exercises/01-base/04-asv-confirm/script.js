/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let UserAge = prompt("What's your age?");
    let UserSex = prompt("What's your sexe?");
    let UserAdress = prompt("Where do you live?");
    let message = "Ben je een "+UserAge+" jarige " + UserSex + " uit "  + UserAdress + " ?";

    var r = confirm(message);
    { 
        if (r == true) {
            txt = "You pressed OK!"; } else { let UserAge = prompt("What's your age?");
          let UserSex = prompt("What's your sexe?");
          let UserAdress = prompt("Where do you live?");
          let message = "Ben je een "+UserAge+" jarige " + UserSex + " uit "  + UserAdress + " ?";
          }
    }

})();
