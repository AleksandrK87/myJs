'use strict';

class User {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;

    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    static isUser (obj) {
        return obj instanceof User;
    }
}
  

const user = new User ('test','Testovich', 20);

console.log('User full name :>>', user.getFullName());


class Phone {
    constructor(brand, model, color,year){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;

    }
    getPhoneAge() {
        return new Date().getFullYear() - this.year;
    }

    getFullDate() {

    }

    set year(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Error');
        }
        if (value < 1960 || value )
    }

}

const myPhone = new Phone('4 note', 'xiaomi', 'black', 2017);


