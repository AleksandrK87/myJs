const firstName = 'Test';
const lastName = 'Testovich';
const email = 'test@gmail.com';

const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

const user = {
    firstName = 'Test',
    lastName = 'Testovich',
    email = 'test@gmail.com',
    password = 'qwerty',
}

console.log(user);
console.log(user.firstName);

user.email = 'test1@gmail.com';

user1.id = 123;

delete user.password;

const a = 1;
const b = 1;
console.log (a===b);

const o1 = {};
const o2 = {};
console.log(o1===o2)

const machine = {
    marka: 'Mersedes',
    model: 'ML550',
    year: 2019,
    namber: 'AP5269IH',
    color: 'blue'
}

console.log (machine);

machine.color = 'green';
delete machine.year;
machine.infoUser = 'Test testovich';

console.log (machine);

const prop = prompt('Input prop')
alert(user[prop])


const machineProp ='color';
machine[machineProp] ='black';


const user1 = {
    firstName = 'Test',
    lastName = 'Testovich',
    email = 'test@gmail.com',
    password = 'qwerty',
}

function getFullName(user) {
    return `${user.firstName} ${user.lastName}`
}

console.log(getFullName(user1))

const user2 = {
    firstName = 'Test',
    lastName = 'Testovich',
    email = 'test@gmail.com',
    password = 'qwerty',
    weight: 70,
    height: 1.75,
    bmi() {
        return this.weight / (this.height ** 2)
    }
    /*getFullName: function () {
        //console.log('this', this);
        return `${this.firstName} ${this.lastName}`
    }*/
}

user2.bmi()
console.log(user2.bmi())


const anotherUser = {
    firstName = 'ivan',
    lastName = 'ivanovich',
    getFullName: user2.getFullName,
}

console.log(anotherUser.getFullName())

/************************* */

function User(firstName, lastName, age, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.isAdult = function (){
        return this.age >= 18;
    }
}

const userProto = {};

userProto.isAdult = function(){
    return this.age >= 18;
}

User.prototype = userProto;




const user4 = new User('Test','Testovich', 23,'test@gmail.com');

console.log(user4.isAdult())

const cat1 = {
    name: 'Barsik',
    age: 4,
    color: 'grey',
    weight: 5,
    breed: 'Cheshirkiy',
}

console.log (cat);

function Cat(name, age, color, weight, breed) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.weight = weight;
    this.breed = breed;
}
const firstCat = new Cat('Murzik', 4, 'white', 3, 'Persian');
const secondCat = new Cat('Busia', 7, 'black', 4, 'Siam');

const catProto = {};

catProto.changeColor =  function (newColor) {
     this.color = newColor;
}

Cat.prototype = catProto;

const firstCat = new Cat('Murzik', 4, 'white', 3, 'Persian');
const secondCat = new Cat('Busia', 7, 'black', 4, 'Siam');

firstCat.changeColor('red')