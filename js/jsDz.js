

function isWorkingAgePerson(age) {
    return age >= 16 && age <= 65;
}

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  console.log(isPrime(4));

  function checkMultiplicity(n1,n2) {
      return n1%n2 == 0;
  }

  console.log(checkMultiplicity(25, 5));
  console.log(checkMultiplicity(15, 3));
  console.log(checkMultiplicity(15, 5));
  console.log(checkMultiplicity(15, 4));
