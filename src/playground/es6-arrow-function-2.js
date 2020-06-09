//arguments object - no longer bound with arrow function 

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

//this keyword - no longer bound 

const user = {
    name: 'Mustapha',
    cities: ['Ife', 'Ibadan', 'Benin'],
    printPlacedLived() {
    return this.cities.map((city) => city + '!');
    }
};

console.log(user.printPlacedLived());

//Challenge Area

const multiplier = {
    numbers: [2, 3, 5, 8, 9],
    multiplyBy: 7,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

}

console.log(multiplier.multiply());
