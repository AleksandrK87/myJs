'use strict';

function facktorial(n) {
    if (n === 0) { return 1; }
    return n * facktorial(n - 1);
}
return 3 * facktorial(2);


const brackets = [],

function bracketWrapper(n) {
    if (n === 0) { return; }
    bracket.push('(');
    bracketWrapper(n - 1);
    bracket.push(')');

}