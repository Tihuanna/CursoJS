let varA = 'A'; //b
let varB = 'B'; // c
let varC = 'C'; // a
let varD = 'D'; 

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

/*
[varA, varB, varC] = [varB, varC, varA];    
*/

console.log (varA, varB, varC);