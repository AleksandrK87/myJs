'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
const users = [];
    
for (let i = 0; i < 100; i++) {
    const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5
    );
    users.push(user);
}

const fullNames = users
    .filter(user => !user.isMale &&  user.age >= 6 && user.age <= 18)
    .map(user => user.getFullName());

console.log(
    'useremail99@gmail.com =>>',
    users.some(user => user.email === 'useremail99@gmail.com')
);

console.log(
    'Subscribed =>>',
    users.every(user => user.isSubscribed)
);
