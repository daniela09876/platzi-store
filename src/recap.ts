const myName = 'daniela';
const myAge = 12;
const suma = (a: number, b: number) => {
    return a + b;
}
suma(12, 23)

class person {

    constructor(private age: number, private name: string) { }

    getSummary() {
        return `I'm ${this.name} and I'm ${this.age}`;
    }
}

const daniela = new person(15, 'daniela');
daniela.getSummary(); 