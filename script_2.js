let userNumber = prompt('Donne moi un chiffre STP');
  for (var i = userNumber-1; i > 1; i--) {
    console.log(`i est égal à ${i}`)
    multiply = userNumber * i
    userNumber = multiply
  }
console.log(`La factorielle de ton chiffre est ${userNumber}`)
