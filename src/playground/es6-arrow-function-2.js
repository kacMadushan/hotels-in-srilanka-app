const add =  (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Mike',
    cities: ['colombo', 'horana', 'panadura'],
    printPlaceLived() {
        const cityMessage = this.cities.map((city) => {
            return this.name + ' lived in ' + city + '!';
        });
        return cityMessage;
    }
}

console.log(user.printPlaceLived());

// const multiplier = {
//     numbers: [10, 20, 30, 40],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((number) => {
//             return number * this.multiplyBy;
//         });
//     }
// }

const multiplier = {
    numbers: [30, 60, 90],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number, index) => index+ ' ' + number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());