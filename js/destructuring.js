'use strict';

const user = {
    name: 'Test',
    age: 23,
    email: 'test@test.com',
    isMale: true,
};

f(user);

function f({ name, age }) {
   // const name = userObj.name;
   // const age = userObj.age;

    // const {name, age} = userObj;

    console.log('user :>>', `User name: ${name}. He is ${age} years old.`)
}

const paralelepiped = {
    a: 12,
    b: 30,
    c: 55,
}

console.log(g (paralelepiped));

function g({ a, b, c}) {
    return a * b * c;
}
