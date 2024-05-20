"use strict";
const myName = 'daniela';
const myAge = 12;
const suma = (a, b) => {
    return a + b;
};
suma(12, 23);
class person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getSummary() {
        return `I'm ${this.name} and I'm ${this.age}`;
    }
}
const daniela = new person(15, 'daniela');
daniela.getSummary();
