/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
       constructor(firstname, lastname) {
            this.firstname = 'bal';
            this.lastname = 'bo' ;
           
           
        };
        get fullName() {
            return `${person.firstname} ${person.lastname}`;
    
    };
    set fullName(value){
    const parts = value.split('');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }

}
document.getElementById("run").addEventListener("click", () => {
        Person.fullName = 'john wick '
        console.log(Person.fullName);
     
        Person.value = 'Bruce Lee'
        console.log(Person.value);
    })();

})();
